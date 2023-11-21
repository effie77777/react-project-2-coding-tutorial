import React, { useState, useEffect } from "react";
import newCourseService from "../services/course-service";

const Profile = ({ currentUser, setAllCourses }) => {
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ myCourses, setMyCourses ] = useState([]);

    useEffect(() => {
        if (!currentUser) {
            setErrorMsg("請先進行登入或註冊")
        } else { // Google 登入的使用者才有 access_token，也就是本地登入的使用者需要跑 newAuthService
            setErrorMsg(null);
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

        {errorMsg && (
            <div className="error_msg">{errorMsg}</div>
        )}

        {currentUser && (
        <section className="py-11">
            <h3 className="fw-bold text-white">我的課程</h3>
        </section>
        )}

        </div>
    )
}

export default Profile;