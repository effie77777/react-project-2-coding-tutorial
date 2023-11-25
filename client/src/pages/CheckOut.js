import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newCourseService from "../services/course-service";

const CheckOut = ({ currentUser, currentSearch, setCurrentSearch, purchase, setPurchase, orderFromCustomer, setOrderFromCustomer, orderFromECPAY, setOrderFromECPAY }) => {
    const Navigate = useNavigate();
    const [ errorMsg, setErrorMsg ] = useState(null);

    const handleGoPay = () => {
        let form = document.getElementById("_form_aiochk");
        console.log(form);
        if (form) {
            window.alert("將為您導向綠界金流頁面。\n提醒您，本專案僅為 demo 性質，切勿輸入真實信用卡卡號等機敏資料。\n如您使用「網路 ATM 」付款，建議選擇「台灣土地銀行」或「台新銀行」，無須安裝軟體即可觀看模擬的交易結果。");
            form.submit();
        }
    }

    function checkIfCurrentSearchExists() {
        if (localStorage.getItem("current_search")) {
            setCurrentSearch(JSON.parse(localStorage.getItem("current_search")));
            // checkIfOrderExists();
            return true;
        } else {
            setErrorMsg("您還沒有選擇要購買的課程哦，將為您導向課程頁面");
            setTimeout(() => {
                Navigate("/class");
            }, 2000);
        }
    }

    function checkIfOrderExists() {
        if (localStorage.getItem("purchase")) {
            let pricePerClass = JSON.parse(localStorage.getItem("purchase"))[0];
            let amounts = JSON.parse(localStorage.getItem("purchase"))[1];
            if (pricePerClass !== "洽談報價") {
                pricePerClass = Number(pricePerClass);
                amounts = Number(amounts);
            }
            setPurchase([pricePerClass, amounts]);
            // if (orderFromCustomer.length === 0) {
            //     setOrderFromCustomer([{"name": currentUser.data.username, "tel": "", "email": currentUser.data.email, "date": "", "address": "" }]);
            // } else {
            //     //代表使用者已經到第二步驟 checkOut 了，但是又按修改訂單，回到第一步驟 placeOrder，這種情況就將使用者上一次輸入的內容帶入表單
            //     let previousInfo = JSON.parse(localStorage.getItem("order_from_customer"));
            //     setOrderFromCustomer([previousInfo]);
            // }
            return true;
        } else {
            setErrorMsg("您還沒有選擇購買方案哦，將為您導向課程頁面");
            setTimeout(() => {
                Navigate("/detail");
            }, 2000);
        }
    }

    useEffect(() => {
        if (!currentUser) {
            setErrorMsg("請先登入或註冊");
            setTimeout(() => {
                Navigate("/login");
            }, 2000);
        } else {
            // setCurrentSearch(JSON.parse(localStorage.getItem("current_search")));
            // setOrderFromCustomer([JSON.parse(localStorage.getItem("order_from_customer"))]);
            // let pricePerClass = JSON.parse(localStorage.getItem("purchase"))[0];
            // let amounts = JSON.parse(localStorage.getItem("purchase"))[1];
            // if (pricePerClass !== "洽談報價") {
            //     pricePerClass = Number(pricePerClass);
            //     amounts = Number(amounts);
            // }
            // setPurchase([pricePerClass, amounts]);
            if (checkIfCurrentSearchExists()) {
                checkIfOrderExists();
            }
            if (!localStorage.getItem("order_from_customer") || !JSON.parse(localStorage.getItem("order_from_customer")).isValid) {
                setErrorMsg("目前還沒有有效訂單哦，將為您導向訂單頁面");
                setTimeout(() => {
                    Navigate("/placeOrder");
                }, 2000);
            } else {
                setOrderFromCustomer([JSON.parse(localStorage.getItem("order_from_customer")).data]);
                let parentElement = document.getElementById("parentElement");
                console.log(parentElement);
                if (parentElement) {
                    let purchase = JSON.parse(localStorage.getItem("purchase"));
                    let result = purchase[0] * purchase[1];
                    newCourseService.checkOut(JSON.parse(localStorage.getItem("current_search"))[0].title, result)
                    .then((d) => {
                        console.log(d.data);
                        parentElement.innerHTML = d.data.substring(0, d.data.indexOf("<script")) + "</form>";
                    })
                    .catch((e) => {
                        console.log(e);
                    })    
                }        
            }
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
                                    <div className="border border-1 border-third bg-fourth">
                                        <small className="text-third">3</small>
                                    </div>
                                    <p>成功註冊課程</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-12">
                    <div className="row align-items-center">
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                            <h3 className="fs-4 text-white fw-bold text-center w-100">訂單資訊</h3>
                            
                            {orderFromCustomer && orderFromCustomer.length > 0 && (
                            <form className="col-12 col-sm-10 col-md-8 d-flex flex-wrap justify-content-between text-white">
                                <div className="w-100 w-sm-48 mt-6 bg-third bg-opacity-25 px-4 py-2">
                                    <label htmlFor="name" className="me-3">姓名</label>
                                    <input type="text" name="name" id="name" value={orderFromCustomer[0].name} className="bg-transparent border-0 text-white px-0" disabled />
                                </div>
                                <div className="w-100 w-sm-48 mt-6 bg-third bg-opacity-25 px-4 py-2">
                                    <label htmlFor="tel" className="me-3">手機號碼</label>
                                    <input type="tel" name="tel" id="tel" value={orderFromCustomer[0].tel} className="bg-transparent border-0 text-white px-0" disabled />
                                </div>
                                <div className="mt-6 w-100 w-sm-48 bg-third bg-opacity-25 px-4 py-2">
                                    <label htmlFor="email" className="me-3">Email</label>
                                    <input type="email" name="email" id="email" value={orderFromCustomer[0].email} className="bg-transparent border-0 text-white px-0" disabled />
                                </div>
                                <div className="mt-6 w-100 w-sm-48 bg-third bg-opacity-25 px-4 py-2">
                                    <label htmlFor="date" className="me-3">上課日期</label>
                                    <input type="date" name="date" id="date" value={orderFromCustomer[0].date} className="bg-transparent border-0 text-white px-0" disabled />
                                </div>
                                <div className="w-100 mt-6 bg-third bg-opacity-25 px-4 py-2">
                                    <label htmlFor="address" className="me-3">上課地點</label>
                                    <input type="text" name="address" id="address" value={orderFromCustomer[0].address} className="bg-transparent border-0 text-white px-0 overflow-auto d-inline-block w-100 w-sm-fit-content" disabled />
                                </div>
                                <div className="w-100 mt-6 bg-third bg-opacity-25 px-4 py-2 d-flex flex-wrap">
                                    <label htmlFor="address" className="me-3">課程名稱</label>
                                    <p>{currentSearch[0].title} ({currentSearch[0].instructor.name} 老師)</p>
                                </div>
                                <div className="mt-9 mt-sm-12 d-flex flex-column justify-content-between w-100">
                                    
                                    {purchase && purchase[0] !== "洽談報價" && (
                                    <div className="text-white d-flex align-items-sm-center">
                                        <p className="me-5">{`NT$${purchase[0]}x${purchase[1]}堂`}</p>
                                        <p className="text-warning">{`合計NT$${purchase[0] * purchase[1]}`}</p>
                                    </div>
                                    )}

                                    {purchase && purchase[0] === "洽談報價" && (
                                    <div className="text-white d-flex fw-bold">
                                        <p className="me-2">方案:</p>
                                        <p className="me-1">客製化課程</p>
                                        <p className="text-warning">(洽談報價)</p>
                                    </div>
                                    )}

                                    <div className="mt-3 d-flex flex-column flex-sm-row justify-content-sm-between">
                                        <Link className="btn border px-12 py-2 text-white w-sm-48" to="/placeOrder">修改訂單</Link>
                                        <button type="button" className="btn bg-linear px-12 py-2 text-white w-sm-48 mt-3 mt-sm-0" onClick={handleGoPay}>前往付款</button>
                                    </div>
                                </div>
                            </form>
                            )}

                        </div>
                    </div>
                </section>
                <section id="parentElement"></section>
            </div>}
        
        </div>
    )
}

export default CheckOut;