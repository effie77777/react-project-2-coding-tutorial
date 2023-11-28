import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PlaceOrder = ({ currentUser, orderFromCustomer, setOrderFromCustomer, currentSearch, setCurrentSearch, purchase, setPurchase }) => {
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ invalidInputMsg, setInvalidInputMsg ] = useState(null);
    const Navigate = useNavigate();

    // 將各 inputs 的值同步更新至 state
    const handleChangeInputs = (e) => {
        
        // if 區塊為 true 代表使用者曾經進入到第二步驟 checkOut，但又返回到第一步驟 placeOrder，這種情況下當偵測到 input 欄位的值有改變，就將 isValid 設為 false，然後在 handleCheckOut 會再檢驗一次新輸入的內容是否符合規定，若符合規定就將 isValid 設為 true
        if (localStorage.getItem("order_from_customer")) {
            let { data, isValid } = JSON.parse(localStorage.getItem("order_from_customer"));
            localStorage.setItem("order_from_customer", JSON.stringify({ data, isValid: false }));
        }
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let copy = [...orderFromCustomer];
        copy.forEach((i) => {
            for (let prop in i) {
                if (inputName === prop) {
                    i[prop] = inputValue;
                    setOrderFromCustomer(copy);
                    break;
                }
            }
        })        
    }

    // 檢查各 inputs 是否為空白
    function checkIfItsEmpty() {
        for (let prop in orderFromCustomer[0]) {
            if (orderFromCustomer[0][prop].length === 0) {
                switch(prop) {
                    case "name":
                        return "姓名";
                    case "tel":
                        return "手機號碼";
                    case "email":
                        return "Email";
                    case "date":
                        return "想預約的日期";
                    case "address":
                        return "上課地點";                                        
                }
            }
        }
        return "true";
    }

    // 檢查各 inputs 內容是否符合規定
    const handleCheckOut = () => {
        let isNotEmpty = checkIfItsEmpty();
        let telRegexp = /^09\d{8}$/;
        let emailExp = /^\w{2,}@\w{2,}\.\w{2,}/;
        let appointmentDate = Number(orderFromCustomer[0].date.replaceAll("-", ""));
        let localeDate = new Date().toLocaleDateString();
        localeDate = Number(localeDate.replaceAll("/", ""));
        
        if( isNotEmpty !== "true") {
            setInvalidInputMsg(`請填寫「${isNotEmpty}」欄位`);
        } else if (!telRegexp.test(orderFromCustomer[0].tel)) {
            setInvalidInputMsg("手機號碼格式為 09xxxxxxxx，共 10 位數字");
        } else if (!emailExp.test(orderFromCustomer[0].email)) {
            setInvalidInputMsg("請確認 Email 是否正確。格式範例為 example@gmail.com")
        } else if (appointmentDate <= localeDate) {
            setInvalidInputMsg("預約日期不可小於或等於今日日期");
        } else if (orderFromCustomer[0].address.length < 8) {
            setInvalidInputMsg("請填寫詳細的上課地點");
        } else {
            localStorage.setItem("order_from_customer", JSON.stringify({ data: orderFromCustomer[0], isValid: true }));
            setInvalidInputMsg(null);   
            Navigate("/checkOut");
        }
    }

    // 檢查 current_search (欲購買的課程) 是否存在
    function checkIfCurrentSearchExists() {
        if (localStorage.getItem("current_search")) {
            setCurrentSearch(JSON.parse(localStorage.getItem("current_search")));
            checkIfOrderExists();
        } else {
            setErrorMsg("您還沒有選擇要購買的課程哦，將為您導向課程頁面");
            setTimeout(() => {
                Navigate("/class");
            }, 2000);
        }
    }

    // 檢查 purchase (購買方案) 是否存在
    function checkIfOrderExists() {
        if (localStorage.getItem("purchase")) {
            let pricePerClass = Number(JSON.parse(localStorage.getItem("purchase"))[0]);
            let amounts = Number(JSON.parse(localStorage.getItem("purchase"))[1]);
            setPurchase([pricePerClass, amounts]);
            // if 區塊第一種情形代表「初次進入到 placeOrder 頁面」。if 區塊第二種情形代表「之前有進到 placeOrder 頁面過，但是又按重選方案，回到 detail 頁面」(不會有 isValid 是因為沒有進到 checkOut 頁面過)
            if (orderFromCustomer.length === 0 || !JSON.parse(localStorage.getItem("order_from_customer")).isValid) {
                setOrderFromCustomer([{"name": currentUser.data.username, "tel": "", "email": currentUser.data.email, "date": "", "address": "" }]);
            } else { // else 區塊代表「使用者已經到 checkOut 了，但是又按修改訂單，回到 placeOrder 」。這種情況就將使用者上一次輸入的內容帶入表單
                let previousInfo = JSON.parse(localStorage.getItem("order_from_customer")).data;
                setOrderFromCustomer([previousInfo]);
            }
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
                                    <div className="border border-1 border-third bg-fourth">
                                        <small className="text-third">2</small>
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

                {currentSearch.length > 0 && orderFromCustomer.length > 0 && (
                <section className="mt-12">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-sm-8 col-md-4 mb-11 mb-md-0">
                            <div className="py-12 px-8 d-flex flex-column align-items-center bg-opacity-25 bg-third rounded-0 position-relative ms-md-6 me-md-n6" >
                                <img src={currentSearch[0].instructorPhoto} alt="the instructor" className="border border-primary border-3 profile_img" />
                                <p className="fw-bold text-white mt-6">{currentSearch[0].title}</p>
                                <p className="mt-1 text-primary">{currentSearch[0].category}</p>
                                <p className="mt-2 text-white">{currentSearch[0].description}</p>
                                <div className="right-arrow position-absolute opacity-25 top-50 d-none d-md-block end-n4" style={{transform: "translateY(-50%)"}}></div>
                                <div className="right-arrow position-absolute opacity-25 left-0 d-md-none bottom-n4" style={{transform: "rotate(90deg) translateX(30%)"}}></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <form action="" className="py-12 px-8 ps-md-18 d-flex flex-row flex-wrap bg-opacity-10 bg-third rounded-0 justify-content-between ms-md-n6 me-md-6">
                                <h3 className="fs-4 mb-12 text-white fw-bold text-center w-100">課程報名</h3>
                                
                                {invalidInputMsg && (
                                    <div className="error_msg w-100 mt-n3">{invalidInputMsg}</div>
                                )}
                                
                                <div className="w-100 w-sm-48 mt-3">
                                    <label htmlFor="name" className="mb-1">姓名</label>
                                    <input type="text" name="name" id="name" className="form-control" value={orderFromCustomer[0].name} onChange={handleChangeInputs} />
                                </div>
                                <div className="w-100 w-sm-48 mt-3">
                                    <label htmlFor="tel" className="mb-1">手機號碼</label>
                                    <input type="tel" name="tel" id="tel" className="form-control" value={orderFromCustomer[0].tel} placeholder="格式: 09xxxxxxxx" onChange={handleChangeInputs} />
                                </div>
                                <div className="mt-6 w-100 w-sm-48">
                                    <label htmlFor="email" className="mb-1">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" value={orderFromCustomer[0].email} onChange={handleChangeInputs} />
                                </div>
                                <div className="mt-6 w-100 w-sm-48">
                                    <label htmlFor="date" className="mb-1">想預約的日期(當地時間)</label>
                                    <input type="date" name="date" id="date" className="form-control" value={orderFromCustomer[0].date} onChange={handleChangeInputs} />
                                </div>
                                <div className="w-100 mt-6">
                                    <label htmlFor="address" className="mb-1">上課地點(詳細地址)</label>
                                    <input type="text" name="address" id="address" className="form-control" value={orderFromCustomer[0].address} onChange={handleChangeInputs} />
                                </div>
                                <div className="mt-9 d-flex flex-column justify-content-between w-100">
                                    <p className="text-warning">{`NT$${purchase[0]} x ${purchase[1]}堂 = NT$${purchase[0] * purchase[1]}`}</p>
                                    <div className="mt-3 d-flex flex-column flex-sm-row justify-content-sm-between">
                                        <Link className="btn border px-12 py-2 text-white w-sm-48" to="/detail">重選方案</Link>
                                        <button type="button" className="btn bg-linear px-12 py-2 text-white w-sm-48 mt-3 mt-sm-0" onClick={handleCheckOut}>確認訂單</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
                )}

            </div>}

        </div>
    )
}

export default PlaceOrder;