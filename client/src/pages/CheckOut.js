import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newCourseService from "../services/course-service";

const CheckOut = ({ currentUser, currentSearch, setCurrentSearch, purchase, setPurchase, orderFromCustomer, setOrderFromCustomer, orderFromECPAY, setOrderFromECPAY }) => {
    const Navigate = useNavigate();
    const [ errorMsg, setErrorMsg ] = useState(null);

    const handleGoPay = () => {
        let form = document.getElementById("_form_aiochk");
        if (form) {
            localStorage.setItem("submitted_ecpay_form", "true");
            window.alert("將為您導向綠界金流頁面。\n提醒您，本專案僅為 demo 性質，切勿輸入真實信用卡卡號等機敏資料。\n為方便觀看模擬的交易結果，付款方式請您選擇「網路 ATM 」，銀行建議選擇「台灣土地銀行」或「台新銀行」，無須安裝軟體即可進行操作。");
            form.submit();
        }
    }

    function checkIfCurrentSearchExists() {
        if (localStorage.getItem("current_search")) {
            setCurrentSearch(JSON.parse(localStorage.getItem("current_search")));
            console.log("inside checkIfCurrentSearchIsValid. result: true");
        } else {
            setErrorMsg("您還沒有選擇要購買的課程哦，將為您導向課程頁面");
            setTimeout(() => {
                Navigate("/class");
            }, 2000);        
        }
    }

    function checkIfOrderExists() {
        if (localStorage.getItem("purchase")) {
            let pricePerClass = Number(JSON.parse(localStorage.getItem("purchase"))[0]);
            let amounts = Number(JSON.parse(localStorage.getItem("purchase"))[1]);
            setPurchase([pricePerClass, amounts]);
            console.log("inside checkIfOrderExists. result: true");
        } else {
            setErrorMsg("您還沒有選擇購買方案哦，將為您導向課程頁面");
            setTimeout(() => {
                Navigate("/detail");
            }, 2000);    
        }
    }

    function checkIfOrderIsValid() {
        if (localStorage.getItem("order_from_customer") && JSON.parse(localStorage.getItem("order_from_customer")).isValid) {
            setOrderFromCustomer([JSON.parse(localStorage.getItem("order_from_customer")).data]);
            newCourseService.checkOut(currentSearch[0].title, purchase[0] * purchase[1])
            .then((d) => {
                console.log(d.data);
                localStorage.setItem("form_from_ecpay", d.data.substring(0, d.data.indexOf("<script")) + "</form>");
                let parentElement = document.getElementById("parentElement");
                console.log(parentElement);
                if (parentElement) {
                    parentElement.innerHTML = d.data.substring(0, d.data.indexOf("<script")) + "</form>";
                }        
            })
            .catch((e) => {
                console.log(e);
            })
        } else {
            setErrorMsg("目前沒有有效的訂單哦，將為您導回修改訂單的頁面");
            setTimeout(() => {
                Navigate("/placeOrder");
            }, 2000);
        }
    }

    // if 區塊為 true 代表使用者曾經進到綠界頁面，但是沒有完成付款，就按「返回上一頁」回到 CheckOut，這時需要去後端再拿一次訂單編號，這樣訂單編號才不會重複。因為使用者不是按「重新整理」，不會跑 useEffect(() => {}, [])，所以要額外寫
    if (localStorage.getItem("submitted_ecpay_form")) {
        console.log("the user had submitted ecpay form");
        localStorage.removeItem("submitted_ecpay_form");
        checkIfCurrentSearchExists();
    }    

    useEffect(() => {
        if (currentSearch && currentSearch.length > 0) {
            checkIfOrderExists();
        }
    }, [currentSearch]);

    useEffect(() => {
        if (purchase && purchase.length > 0) {
            checkIfOrderIsValid();
        }
    }, [purchase]);

    useEffect(() => {
        if (!currentUser) {
            setErrorMsg("請先登入或註冊");
            setTimeout(() => {
                Navigate("/login");
            }, 2000);
        } else {
            // let result = checkIfOrderIsValid();
            // if(!result) {
            //     checkIfCurrentSearchExists();
            // }
            checkIfCurrentSearchExists();
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