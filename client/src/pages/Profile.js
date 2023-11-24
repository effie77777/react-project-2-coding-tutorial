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
            setMyCourses(allCourses.filter((i) => i.students.includes(currentUser.data._id)));
            setFilterCategory(allCourses);
        }
    }, [allCourses]);

    useEffect(() => {
        if (!currentUser) {
            setErrorMsg("請先登入或註冊");
            setTimeout(() => {
                Navigate("/login");
            }, 1500);
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

            {errorMsg}
            ? <div className="error_msg">{errorMsg}</div>
            : <div>
                {/* {currentUser && ( */}
                <section className="py-11">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="col-10 offset-1 fw-bold text-white fs-5 mb-10">我的課程</h2>
                            <div className="col-10 offset-1 d-flex flex-wrap flex-md-nowrap overflow-md-auto">

                                {myCourses.length > 0 && myCourses.map((i) =>
                                <button type="button" className="class-card btn" id={i._id} onClick={handleSearch} key={i._id}>
                                    <div className="class-card-header">                                
                                        <img src={i.instructorPhoto} alt="the instructor" className="profile_img mb-2" />
                                        <p>{i.instructor.name}</p>
                                    </div>
                                    <div className="class-card-body text-start">
                                        <h3 className="fw-bold fs-3 text-white">{i.title}</h3>                       
                                        <div className="">
                                            {i.category.split("、").map((i) =>
                                            <p className="text-primary border border-primary d-inline-block p-1 rounded-0 me-1" style={{fontSize: "0.9rem"}}>{i}</p>
                                            )}
                                        </div>
                                        <p className="h-60 h-sm-50 h-md-60 mb-2">{i.description}</p>
                                    </div>
                                    <div className="class-card-footer">
                                        <p className="align-self-end mb-1">{i.plan.slice(i.plan.indexOf("堂") + 1, i.plan.indexOf("/"))}</p>
                                        <p className="fs-4 text-white">{i.plan.slice(0, i.plan.indexOf(" "))}</p>
                                    </div>
                                </button>
                                )}

                            </div>
                        </div>
                    </div>
                </section>
                {/* )} */}    
            </div>
        
        </div>
    )
}

export default Profile;