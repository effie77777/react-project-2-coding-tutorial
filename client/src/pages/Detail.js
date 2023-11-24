import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import instructor from "../assets/images/instructor.jpg";
import newCourseService from "../services/course-service";

const Detail = ({ currentUser, allCourses, setAllCourses, currentSearch, setCurrentSearch, purchase, setPurchase }) => {
    const [ similarCourses, setSimilarCourses ] = useState([]);
    const [ errorMsg, setErrorMsg ] = useState(null);
    const Navigate = useNavigate();

    const handleSearch = (e) => {
        let targetClass;
        if (e.target.id) {
            targetClass = e.target;
        } else {
            targetClass = e.target.closest("button");
        }
        let result = allCourses.filter((i) => i._id === targetClass.id);
        setCurrentSearch(result);
        localStorage.setItem("current_search", JSON.stringify(result));
        window.scrollTo({
            top: "0",
            behavior: "smooth",
        });
    }

    const handleSelectPlan = (e) => {
        let targetId = e.target.id;
        if (!targetId) {
            targetId = e.target.closest("button").id;
        }
        let amounts = targetId.substring(targetId.indexOf(" ") + 1, targetId.indexOf("堂"));
        let pricePerClass = targetId.substring(targetId.indexOf("$") + 1, targetId.indexOf(" "));
        localStorage.setItem("purchase", JSON.stringify([pricePerClass, amounts]));
        setPurchase([pricePerClass, amounts]);
        Navigate("/placeOrder");
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
                setAllCourses(newData);
                let foundData = JSON.parse(localStorage.getItem("current_search"));
                setCurrentSearch(foundData);                
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }, []);

    //下面這段程式碼不寫在 useEffect(() => {}, []) 裡面，是因為即使頁面不是第一次 loading，但每當使用者點選任何一張卡片(重設 currentSearch )的時候都要執行
    useEffect(() => {
        let sortingResult = sortAllCourses(allCourses, currentSearch);
        setSimilarCourses(sortingResult);
    }, [currentSearch]);

    function sortAllCourses(allCourses, currentSearch) {
        //將所有課程重新排列，將每一門課程 category 和當前搜尋課程的 category 做比較。和當前搜尋的課程完全吻合的放在最前面，剩下的則依照吻合程度排列
        let sortingResult = []; 
        allCourses.map((i) => {
            if (currentSearch[0] && i._id !== currentSearch[0]._id) {
                if (i.category === currentSearch[0].category) {
                    sortingResult.unshift({ "completelyMatch": true, i }); //完全吻合的放在 sortingResult 的最前面
                } else {
                    let matchCount = 0;
                    for (let j = 0; j < currentSearch[0].category.split("、").length; j ++) {
                        if (i.category.includes(currentSearch[0].category.split("、")[j])) {
                            matchCount += 1;
                        }
                    }
                    if (matchCount > 0) {
                        sortingResult.push({ matchCount, i });
                    }
                }
            }
        })
        sortingResult.sort(function(a, b) {
            if (!a.completelyMatch && !b.completelyMatch) {
                //篩選出所有符合條件的課程後，只針對「category 並非完全吻合」的項目，依照其 matchCount 的數量進行排序。也就是「category 完全吻合」的項目不會納入排序，所以一開始裝進 sortingResult 的時候要用 unshift 而非 push
                return b.matchCount - a.matchCount;
            }
        }) 
        
        //     // sortingResult = sortingResult.map((item) => {
        //     //     for (let prop in item) {
        //     //         if (prop !== "i") {
        //     //             delete item[prop];
        //     //         }
        //     //         return item;
        //     //     }
        //     // })

        sortingResult = sortingResult.map((item) => item.i); //我們真正需要的資料只有「課程內容本身」而已，也就是 i 這個 property 對應到的 value
        return sortingResult;
    }


    return (
        <div className="bg-fourth">
            <div className="container-fluid">
        
                {!currentUser}
                ? <div className="error_msg">{errorMsg}</div>
                : <div>

                {/* <div className="container-fluid"> */}
                    <section className="section">
                        <div className="row">
                            <div className="col-12 d-flex flex-wrap">
                                <div className="col-12 col-md-7">
                                    <div className="card p-12 d-flex flex-column flex-md-row justify-content-between bg-third bg-opacity-10 rounded-24">
                                        <div className="w-md-35 w-lg-30 d-flex flex-column justify-content-center">
                                            <img src={currentSearch[0].instructorPhoto} alt="the instructor" className="mb-2 profile_img" />
                                            <p className="detail-card-instructor-name">{currentSearch[0].instructor.name}</p>
                                        </div>
                                        <div className="w-md-65 w-lg-70 d-flex flex-column">
                                            <h3 class="card-title fw-bold fs-4 text-white mb-1">{currentSearch[0].title}</h3>
                                            <p className="text-primary mb-3">{currentSearch[0].category}</p>
                                            <p>{currentSearch[0].description}</p>
                                        </div>
                                    </div>

                                    <h3 className="title mt-15 mb-3 ms-6">講師介紹</h3>
                                    <div className="card p-12 d-flex flex-column align-items-between bg-opacity-10 bg-third rounded-24">
                                        <div className="mb-sm-4 d-flex flex-wrap justify-content-between">
                                            <div className="d-flex w-100 mb-4 mb-sm-0 w-sm-60">
                                                <span class="material-symbols-outlined me-2 text-primary fs-3 font-fill-1">
                                                    school
                                                </span>
                                                <p><span className="text-white">學歷</span> {currentSearch[0].instructor.education}</p>
                                            </div>
                                            <div className="d-flex w-100 mb-4 mb-sm-0 w-sm-37">
                                                <span class="material-symbols-outlined me-2 text-primary fs-3 font-fill-1">
                                                    translate
                                                </span>
                                                <p><span className="text-white">語言</span> {currentSearch[0].instructor.language}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <div className="d-flex w-100 mb-4 mb-sm-0 w-sm-60">
                                                <span class="material-symbols-outlined me-2 text-primary fs-3 font-fill-1">
                                                    work
                                                </span>
                                                <p><span className="text-white">經歷</span> {currentSearch[0].instructor.workingExp}</p>
                                            </div>
                                            <div className="d-flex w-100 w-sm-37">
                                                <span class="material-symbols-outlined me-2 text-primary fs-3 font-fill-1">
                                                    workspace_premium
                                                </span>
                                                <p><span className="text-white">等級</span> {currentSearch[0].instructor.languageLevel}</p>
                                            </div>
                                        </div>
                                        <div className="w-100 h-1 border-bottom my-9"></div>
                                        <div>
                                            <p className="mb-4">{currentSearch[0].instructor.simpleBio.substring(2, currentSearch[0].instructor.simpleBio.indexOf("2"))}</p>
                                            <p>{currentSearch[0].instructor.simpleBio.substring(currentSearch[0].instructor.simpleBio.indexOf("2.") + 2)}</p>
                                        </div>
                                    </div>

                                    <h3 className="title mt-15 mb-3 ms-6">課程簡介</h3>
                                    <div className="card p-12 d-flex flex-column align-items-between bg-opacity-10 bg-third text-white rounded-24">
                                        <div className="mb-9">
                                            <h4 className="border-start border-primary border-3 px-2 fs-3 mb-4">這堂課你將會學到</h4>
                                            <ul>
                                                {currentSearch[0].expectToObtain.split(" ").map((i) =>
                                                <li className="d-flex">
                                                    <span class="material-symbols-outlined detail-square" style={{marginTop: "0.375rem"}}>
                                                        square
                                                    </span>
                                                    <p>{i.substring(2)}</p>
                                                </li>
                                                )}
                                            </ul>
                                        </div>
                                        <div>
                                        <h4 className="border-start border-primary border-3 px-2 fs-3 mb-4">為什麼這堂課重要？</h4>
                                            <ul>
                                                {currentSearch[0].importance.split(" ").map((i) =>
                                                <li className="d-flex">
                                                    <span class="material-symbols-outlined detail-square" style={{marginTop: "0.375rem"}}>
                                                        square
                                                    </span>
                                                    <p>{i.substring(2)}</p>
                                                </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 offset-md-1 d-flex flex-column position-md-fixed mt-15 mt-md-0" style={{top: "10.75rem", right: "3.5%"}}>
                                    <div className="d-flex flex-column flex-lg-row mb-3">
                                        <h3 className="title ms-6">方案選擇</h3>
                                        <small className="ms-5 text-warning align-self-lg-end mb-lg-1">(以下價格均為單堂費用)</small>
                                    </div>
                                    <ul className="w-100 py-8 px-6 bg-opacity-10 bg-third h-fit-content rounded-24 detail-ul" style={{width: "85%"}}>
                                        {currentSearch[0].plan.split(("/")).map((i, index) =>
                                        <li className="detail-li" key={index}>
                                            <button type="button" className="btn" id={i} onClick={handleSelectPlan}>
                                                <p>{i.substring(0, i.indexOf(" "))}</p>
                                                <p>{i.substring(i.indexOf(" ") + 1)}</p>
                                            </button>
                                        </li>
                                        )}                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* </div> */}

                {/* <div className="bg-fourth position-relative z-1"> */}
                    {/* <div className="container-fluid"> */}
                        <section className="d-flex flex-column align-items-center py-15 py-md-22">
                            <h3 className="title text-center">其他人也看了這些課程</h3>
                            <div className="title-vr mb-6 mb-md-18"></div>
                            <div className="row w-100">
                                <div className="col-12 d-flex flex-wrap flex-md-nowrap overflow-md-auto">
                                    
                                    {similarCourses.length > 0 && similarCourses.map((i) =>
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
                                            <p className="align-self-end mb-1">{i.plan.slice(i.plan.indexOf("分鐘") - 2, i.plan.indexOf("/"))}</p>
                                            <p className="fs-4 text-white">{i.plan.slice(0, i.plan.indexOf(" "))}</p>
                                        </div>
                                    </button>
                                    )}

                                </div>
                            </div>
                        </section>
                    {/* </div> */}
                {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Detail;
