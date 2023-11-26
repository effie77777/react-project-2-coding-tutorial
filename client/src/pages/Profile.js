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
            let newArr=[];
            setFilterCategory(allCourses);
            currentUser.data.orders.map((i) => {
                let foundCourse = allCourses.filter((j) => i.courseId === j._id);
                let newObj;
                if (newArr.length === 0) {
                    newObj = { course: foundCourse, order: [] };
                } else {
                    let courseHasExisted = false;
                    for (let m = 0; m < newArr.length; m ++) {
                        if (newArr[m].course === foundCourse) {
                            newArr[m].order.push(i);
                            courseHasExisted = true;
                            break;
                        }
                    }
                    if (!courseHasExisted) {
                        newObj = { course: foundCourse, order: [] };
                    }
                }
                newArr.push(newObj);
            });
            setMyCourses(newArr);
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
                            
                            {myCourses.length > 0 && myCourses.map((i) =>                            
                            <div className="col-10 offset-1 d-flex flex-wrap">
                                <div className="col-12 col-md-4">
                                    <button type="button" className="class-card btn" id={i.course._id} onClick={handleSearch} key={i.course._id}>
                                        <div className="class-card-header">                                
                                            <img src={i.course.instructorPhoto} alt="the instructor" className="profile_img mb-2" />
                                            <p>{i.course.instructor.name}</p>
                                        </div>
                                        <div className="class-card-body text-start">
                                            <h3 className="fw-bold fs-3 text-white">{i.course.title}</h3>                       
                                            <div className="">
                                                {i.course.category.split("、").map((j) =>
                                                <p className="text-primary border border-primary d-inline-block p-1 rounded-0 me-1" style={{fontSize: "0.9rem"}}>{j}</p>
                                                )}
                                            </div>
                                            <p className="h-60 h-sm-50 h-md-60 mb-2">{i.course.description}</p>
                                        </div>
                                        <div className="class-card-footer">
                                            <p className="align-self-end mb-1">{i.course.plan.slice(i.course.plan.indexOf("堂") + 1, i.course.plan.indexOf("/"))}</p>
                                            <p className="fs-4 text-white">{i.course.plan.slice(0, i.course.plan.indexOf(" "))}</p>
                                        </div>
                                    </button>
                                </div>

                                <div className="col-12 offset-md-1 col-md-7">
                                    <p>上課日期: {i.order.date}</p>
                                    <p>上課地址: {i.order.address}</p>
                                    <p>課程方案: {i.order.date}</p>
                                </div>
                            </div>
                            )}
                            
                        </div>
                    </div>
                </section>
            </div>}
        
        </div>
    )
}

export default Profile;