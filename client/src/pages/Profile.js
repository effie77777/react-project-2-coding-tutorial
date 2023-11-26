import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newCourseService from "../services/course-service";

const Profile = ({ currentUser, allCourses, setAllCourses, filterCategory, setFilterCategory, setCurrentSearch }) => {
    const Navigate = useNavigate();
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ myCourses, setMyCourses ] = useState([]);

    const handleSearch = (e) => {
        let result;
        if (e.target.id) { //使用者點到的剛好是 button 那個標籤
            result = filterCategory.filter((i) => i._id === e.target.id);
        } else { //使用者點到 button 標籤底下的任何一個子標籤
            result = filterCategory.filter((i) => i._id === e.target.closest("button").id);
        }
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
            setMyCourses(currentUser.data.orders);
        }
    }, [allCourses]);

    useEffect(() => {
        if (!currentUser) {
            setErrorMsg("請先登入或註冊");
            setTimeout(() => {
                Navigate("/login");
            }, 2000);
        } else {
            newCourseService.searchAllCourses()
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
                            <h2 className="col-10 offset-1 fw-bold text-white fs-5 mb-10">我的課程</h2>
                            <div className="col-10 offset-1 d-flex flex-wrap flex-md-nowrap overflow-md-auto">
                            
                                {myCourses.length > 0 && myCourses.map((i) =>                            
                                <div className="class-card" key={i.courseId}>
                                    <div className="class-card-header">                                
                                        <p>{i.courseTitle} ({i.instructor})</p>
                                    </div>
                                    <div className="class-card-body text-start">
                                        <p>上課日期: {i.date}</p>                       
                                        <p>上課地點: {i.address}</p>                       
                                        <p>課程堂數: 共 {i.plan[1]} 堂</p>                       
                                    </div>
                                    <button type="button" className="class-card-footer btn text-start" id={i.courseId} onClick={handleSearch}>
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