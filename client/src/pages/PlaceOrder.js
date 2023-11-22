import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import instructor from "../assets/images/instructor.jpg";
import newCourseService from "../services/course-service";

const PlaceOrder = ({ order, setOrder, currentSearch, setCurrentSearch, purchase, setPurchase }) => {
    const [ inputs, setInputs ] = useState([]);
    const Navigate = useNavigate();

    const handleCheckOut = (e) => {
        e.preventDefault();
        const inputTags = document.querySelectorAll("input");
        console.log(inputTags);
        // let name;
        // let value;
        // let arr = [];
        // for (let i = 0; i < inputTags.length; i ++) {
        //     name = inputTags[i].name;
        //     value = inputTags[i].value;
        //     console.log(name, value);
        //     arr.push({ name: value });
        //     console.log(arr);
        // }
        console.log(currentSearch[1] * currentSearch[2]);
        console.log(typeof currentSearch[1] * currentSearch[2]);
        // newCourseService.checkOut(currentSearch[0].title, currentSearch[1] * currentSearch[2])
        // .then((d) => {
        //     console.log("inside checkout component. d is: ", d);
        //     setOrder(d.data.substring(0, d.data.indexOf("<script")) + "</form>");
        //     Navigate("/checkOut");
        // })
        // .catch((e) => {
        //     console.log(e);
        // })
    }

    useEffect(() => {
        setCurrentSearch(JSON.parse(localStorage.getItem("current_search")));
        let pricePerClass = JSON.parse(localStorage.getItem("purchase"))[0];
        let amounts = JSON.parse(localStorage.getItem("purchase"))[1];
        if (pricePerClass !== "洽談報價") {
            pricePerClass = Number(pricePerClass);
            amounts = Number(amounts);
        }
        setPurchase([pricePerClass, amounts]);
    }, []);

    return (
        <div className="container-fluid">
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
                                <p>確認付款資訊</p>
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

            {currentSearch.length > 0 && (
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
                            <div className="w-100 w-sm-48">
                                <label htmlFor="name" className="mb-1">姓名</label>
                                <input type="text" name="name" id="name" className="form-control" required />
                            </div>
                            <div className="w-100 w-sm-48 mt-6 mt-sm-0">
                                <label htmlFor="tel" className="mb-1">手機號碼</label>
                                <input type="tel" name="tel" id="tel" className="form-control" placeholder="格式: 09xx-xxx-xxx" required pattern="^09\d{2}-\d{3}-\d{3}$" title="09xx-xxx-xxx。範例為 0912-345-678" />
                            </div>
                            <div className="mt-6 w-100 w-sm-48">
                                <label htmlFor="email" className="mb-1">Email</label>
                                <input type="email" name="email" id="email" className="form-control" required pattern="^\w{2,}@\w{2,}\.\w{2,}$" />
                            </div>
                            <div className="mt-6 w-100 w-sm-48">
                                <label htmlFor="date" className="mb-1">想預約的日期</label>
                                <input type="date" name="date" id="date" className="form-control" required />
                            </div>
                            <div className="w-100 mt-6">
                                <label htmlFor="address" className="mb-1">上課地點(詳細地址)</label>
                                <input type="text" name="address" id="address" className="form-control" required />
                            </div>
                            <div className="mt-9 mt-sm-15 d-flex flex-column justify-content-between w-100">
                                
                                {purchase && purchase[0] !== "洽談報價" && (
                                <div className="text-white d-flex align-items-sm-center">
                                    <p className="me-5">{`NT$${purchase[0]}x${purchase[1]}堂`}</p>
                                    <p className="text-warning fs-sm-3">{`合計NT$${purchase[0] * purchase[1]}`}</p>
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
                                    <Link className="btn border px-12 py-2 text-white w-sm-48" to="/detail">重選方案</Link>
                                    <button className="btn bg-linear px-12 py-2 text-white w-sm-48 mt-3 mt-sm-0" onClick={handleCheckOut}>前往結帳</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
            )}

        </div>
    )
}

export default PlaceOrder;