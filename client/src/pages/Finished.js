import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newCourseService from "../services/course-service";

const Finished = ({ currentUser, currentSearch, setCurrentSearch }) => {
    const Navigate = useNavigate();
    const [ errorMsg, setErrorMsg ] = useState(null);

    function checkUnfinishedOrder() {
        if (localStorage.getItem("order_from_customer") && JSON.parse(localStorage.getItem("order_from_customer")).isValid) {
            Navigate("/checkOut");
        } else {
            Navigate("/placeOrder");
        }
    }

    useEffect(() => {
        if (!currentUser) {
            setErrorMsg("請先登入或註冊");
            setTimeout(() => {
                Navigate("/login");
            }, 2000);
        } else if (localStorage.getItem("submitted_ecpay_form")) {
            let studentId = currentUser.data._id;
            let course = JSON.parse(localStorage.getItem("current_search"))[0];
            let orderDetail = JSON.parse(localStorage.getItem("order_from_customer"));
            let classAmounts = JSON.parse(localStorage.getItem("purchase"))[1];
            newCourseService.enroll(studentId, course, orderDetail, classAmounts)
            .then((d) => {
                console.log("successfully enrolled", d);
            })
            .catch((e) => {
                console.log(e);
            });    
            localStorage.removeItem("submitted_ecpay_form");
            localStorage.removeItem("form_from_ecpay");
            localStorage.removeItem("order_from_customer");
            localStorage.removeItem("purchase");
        } else if (localStorage.getItem("purchase")) {
            setErrorMsg("訂單尚未完成，將為您重新導向");
            setTimeout(() => {
                checkUnfinishedOrder();                
            }, 2000);    
        } else {
            setErrorMsg("目前沒有進行中的訂單哦，如欲查詢已完成的訂單請至個人頁面");
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
                                <p className="mb-10 text-white">恭喜您已成功購買課程，請注意郵件訊息，家教老師將與您聯繫！您可至個人頁面查看已購買的課程。</p>
                                <div className="d-flex flex-column align-items-center">
                                    <Link className="btn bg-linear text-dark px-12 py-2 mb-3" to="/class">探索更多課程</Link>
                                    <Link className="btn text-white border px-12 py-2" to="/profile">回到個人頁面</Link>
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