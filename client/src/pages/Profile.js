import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newCourseService from "../services/course-service";

const Profile = ({ currentUser, allCourses, setAllCourses, filterCategory, setFilterCategory, setCurrentSearch }) => {
    const Navigate = useNavigate();
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ myCourses, setMyCourses ] = useState([]);

    const handleSearch = (e) => {
        let result = filterCategory.filter((i) => i._id === e.target.id);
        setCurrentSearch(result);
        localStorage.setItem("current_search", JSON.stringify(result));
        let targetCategories = result[0].category.split("、");
        let newArr = [];
        filterCategory.map((i) => {
            for (let j = 0; j < targetCategories.length; j ++) {
                if (i.category.includes(targetCategories[j])) {
                    console.log(targetCategories[j]);
                    newArr.push(i);
                    break;
                }
            }
        });
        setFilterCategory(newArr);
        Navigate("/detail");
    }

    useEffect(() => {
        if (allCourses.length > 0) {
            setFilterCategory(allCourses);
        }
    }, [allCourses]);

    useEffect(() => {
        if (!currentUser) {
            setErrorMsg("請先登入或註冊");
            setTimeout(() => {
                Navigate("/login");
            }, 2000);
        } else {
            newCourseService.searchAllCourses("unlimited")
            .then((d) => {
                let { newData, profile } = d.data;
                for (let i = 0; i < newData.length; i ++) {
                    newData[i].instructorPhoto = profile[i];
                }
                setAllCourses(newData); // newData 是一整個 array，裡面包含很多個 object，每一個 object 都代表一個課程
            })
            .catch((e) => {
                console.log(e);
            })
            newCourseService.getMyOrders(currentUser._id)
            .then((d) => {
                setMyCourses(d.data);
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }, []);

    return (
        <div className="container-fluid">

            {!currentUser
            ? <div className="error_msg">{errorMsg}</div>
            : <div>
                <section className="py-11">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="col-10 offset-1 fw-bold text-white fs-5 mb-10">我的課程</h3>
                            <div className="col-10 offset-1">
                            
                                {myCourses.length > 0 && myCourses.map((i) =>                            
                                <div className="d-flex flex-column flex-md-row py-4 px-6 border mb-6" key={i.courseId}>
                                    <div className="d-flex flex-column flex-lg-row flex-grow-1 profile-card-div">
                                        <div className="flex-grow-1">
                                            <p className="mb-3">{i.courseTitle} ({i.instructor})</p>
                                            <p className="mb-3 mb-lg-0">課程方案: 共 {i.plan} 堂</p>
                                        </div>
                                        <div className="flex-grow-1">                 
                                            <p className="mb-3">上課日期: {i.date}</p>                       
                                            <p className="pb-4 pb-md-0 profile-card-p">上課地點: {i.address}</p>
                                        </div>
                                    </div>                 
                                    <button type="button" className="btn rounded-0 text-start text-md-center mt-4 mt-md-0 flex-shrink-0 profile-card-btn" id={i.courseId} onClick={handleSearch}>
                                        查看課程詳細資訊
                                    </button>
                                </div>
                                )}

                            </div>
                        </div>
                    </div>
                </section>
            </div>}
        
        </div>
    )
}

export default Profile;