import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import newCourseService from "../services/course-service";

const Class = ({ currentUser, allCourses, setAllCourses, filterCategory, setFilterCategory, currentSearch, setCurrentSearch }) => {
    const [ errorMsg, setErrorMsg ] = useState(null);
    // const [ filterCategory, setFilterCategory ] = useState(null);
    const Navigate = useNavigate();

    const handleSearch = (e) => {
        let result;
        if (e.target.id) { //使用者點到的剛好是 button 那個標籤
            result = filterCategory.filter((i) => i._id === e.target.id);
        } else { //使用者點到 button 標籤底下的任何一個子標籤
            result = filterCategory.filter((i) => i._id === e.target.closest("button").id);
        }
        setCurrentSearch(result);
        localStorage.setItem("current_search", JSON.stringify(result));
        Navigate("/detail");
    }

    const handleFilterCategory = (e) => {
        e.stopPropagation(); //不加的話，會因為 event bubbling 而讓整張卡片都被點擊到，就會觸發 handleSearch 這個 eventListener，然後導向 detail 頁面
        let result = allCourses.filter((i) => i.category.includes(e.target.outerText));
        setFilterCategory(result);
    }

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
                setFilterCategory(newData); //雖然使用者一開始還沒選擇課程類別，但還是先設定這個 state 的預設值，之後再依照類別篩選
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }, []);

    return (
        <div className="container-fluid">

            {!currentUser}
            ? <div className="error_msg">{errorMsg}</div>
            : <div>
                <section className="section">
                    <div className="row">
                        <div className="col-12">
                            <ul className="col-10 offset-1 d-flex overflow-auto class-category">
                                <li key="0"><button type="button" onClick={handleFilterCategory} className="word-break-keep-all">前端語言</button></li>
                                <li key="1"><button type="button" onClick={handleFilterCategory} className="word-break-keep-all">後端語言</button></li>
                                <li key="2"><button type="button" onClick={handleFilterCategory}>JavaScript</button></li>
                                <li key="3"><button type="button" onClick={handleFilterCategory}>HTML</button></li>
                                <li key="4"><button type="button" onClick={handleFilterCategory}>CSS/SCSS</button></li>
                                <li key="5"><button type="button" onClick={handleFilterCategory}>React</button></li>
                                <li key="6"><button type="button" onClick={handleFilterCategory}>Vue</button></li>
                                <li key="7"><button type="button" onClick={handleFilterCategory}>Angular</button></li>
                                <li key="8"><button type="button" onClick={handleFilterCategory}>Node.js</button></li>
                                <li key="9"><button type="button" onClick={handleFilterCategory}>SQL</button></li>
                                <li key="10"><button type="button" onClick={handleFilterCategory}>Python</button></li>
                                <li key="11"><button type="button" onClick={handleFilterCategory}>Java</button></li>
                                <li key="12"><button type="button" onClick={handleFilterCategory}>C++</button></li>
                                <li key="13"><button type="button" onClick={handleFilterCategory}>PHP</button></li>
                                <li key="14"><button type="button" onClick={handleFilterCategory} className="word-break-keep-all">UI設計</button></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-12">
                            <div className="col-10 offset-1 d-flex flex-wrap flex-md-nowrap overflow-md-auto">

                                {filterCategory.length > 0 && filterCategory.map((i) =>
                                <button type="button" className="class-card btn" id={i._id} onClick={handleSearch} key={i._id}>
                                    <div className="class-card-header">                                
                                        <img src={i.instructorPhoto} alt="the instructor" className="profile_img mb-2" />
                                        <p>{i.instructor.name}</p>
                                    </div>
                                    <div className="class-card-body text-start">
                                        <h3 className="fw-bold fs-3 text-white">{i.title}</h3>                       
                                        <div className="">
                                            {i.category.split("、").map((i) =>
                                            <p type="button" className="btn text-primary border border-primary d-inline-block p-1 rounded-0 me-1 hover-bg-primary" style={{fontSize: "0.9rem"}} onClick={handleFilterCategory}>{i}</p>
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
            </div>
            
        </div>
    )
}

export default Class;