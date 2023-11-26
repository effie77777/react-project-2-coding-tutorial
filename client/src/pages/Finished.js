import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newCourseService from "../services/course-service";

const Finished = ({ currentUser, currentSearch, setCurrentSearch }) => {
    const Navigate = useNavigate();
    const [ errorMsg, setErrorMsg ] = useState(null);

    const handleEnroll = (e) => {
        console.log(e.target.textContent);
        newCourseService.enroll(currentUser.data._id, currentSearch[0]._id)
        .then((d) => {
            console.log("successfully enrolled", d);
        })
        .catch((e) => {
            console.log(e);
        });
        if (e.target.textContent === "探索更多課程") {
            Navigate("/class");
        } else if (e.target.textContent === "回到個人頁面") {
            Navigate("/profile");
        }
    }

    function checkUnfinishedOrder() {
        if (localStorage.getItem("order_from_customer")) {
            if (JSON.parse(localStorage.getItem("order_from_customer")).isValid) {
                Navigate("/checkOut");
            } else {
                Navigate("/placeOrder");
            }
        } else if (!localStorage.getItem("purchase") && localStorage.getItem("current_search")) {
            Navigate("/detail");
        } else {
            Navigate("/class");
        }
    }

    useEffect(() => {
        if (!currentUser) {
            setErrorMsg("請先登入或註冊");
            setTimeout(() => {
                Navigate("/login");
            }, 2000);
        } else if (localStorage.getItem("submitted_ecpay_form")) {
            localStorage.removeItem("submitted_ecpay_form");
            localStorage.removeItem("form_from_ecpay");
            localStorage.removeItem("order_from_customer");
            localStorage.removeItem("purchase");
        } else {
            setErrorMsg("如欲查看已完成的訂單，請至個人頁面查詢");
            setTimeout(() => {
                checkUnfinishedOrder();                
            }, 1500);
        }
    }, []);

    return (
        <div className="container-fluid">
            
            {errorMsg
            ? <div className="error_msg">{errorMsg}</div>
            : <div>
                <section className="py-11">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="progress_bar">
                                <div className="border-top"></div>
                                <div>
                                    <div>
                                        <small>1</small>
                                    </div>
                                    <p>填寫購買資料</p>
                                </div>
                                <div>
                                    <div className="bg-linear border-0">
                                        <small className="text-dark">2</small>
                                    </div>
                                    <p>確認訂單資訊</p>
                                </div>
                                <div>
                                    <div className="bg-linear border-0">
                                        <small className="text-dark">3</small>
                                    </div>
                                    <p>成功註冊課程</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-12">
                    <div className="row align-items-center">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="col-sm-8 col-lg-4 px-8 py-12 bg-third bg-opacity-10 d-flex flex-column align-items-center" style={{ maxWidth: "450px" }}>
                                <div className="d-flex align-items-center mb-8">
                                    <span class="material-symbols-outlined text-primary me-3" style={{fontSize: "2.75rem", transform: "translateY(-10%)"}}>
                                        new_releases
                                    </span>
                                    <h3 className="text-white fw-bold fs-4">完成訂購</h3>
                                </div>

                                {currentSearch.length > 0 && (
                                <p className="mb-10 text-white">恭喜您已成功購買課程，請注意郵件訊息，家教老師將與您聯繫！您可至個人頁面查看已購買的課程。</p>
                                )}

                                <div className="d-flex flex-column align-items-center">
                                    <button type="button" className="btn bg-linear text-dark px-12 py-2 mb-3" onClick={handleEnroll}>探索更多課程</button>
                                    <button type="button" className="btn text-white border px-12 py-2" onClick={handleEnroll}>回到個人頁面</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>}

        </div>
    )
}

export default Finished;