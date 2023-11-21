import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newCourseService from "../services/course-service";

const CheckOut = ({ order, setOrder }) => {
    console.log(order);
    const Navigate = useNavigate();
    const handleCheckOut = () => {
        newCourseService.checkOut()
        .then((d) => {
            console.log("inside checkout component. d is: ", d);
            // Navigate("/finished");
            // setOrder(d.data);
        })
        .catch((e) => {
            console.log(e);
        })
    }
    // const newlyCreated = document.createElement("div");
    // newlyCreated.innerHTML = order;
    const parentElement = document.getElementById("parentElement");
    if (parentElement) {
        console.log(parentElement);
        parentElement.innerHTML = order;
        let copy = [...order];
        setOrder(copy);
        // parentElement.appendChild(newlyCreated);
        // console.log(parentElement);
        // parentElement.innerHTML = order;
    }
    
    useEffect(() => {
        const form = document.getElementById("_form_aiochk");
        if (form) {
            console.log(form);
               form.submit();
        }    
    }, [order]);
    // let htmlString = order;
    // let doc = new DOMParser().parseFromString(htmlString, "text/html");
    // console.log(doc);
    // let parentElement = document.getElementById("parentElement");
    // if (parentElement) {
    //     parentElement.appendChild(doc);
    // }

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
                                <div className="bg-linear border-0">
                                    <small className="text-dark">2</small>
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

            <section className="mt-12">
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center" id="parentElement">
                        <p>將為您導向綠界金流頁面</p>
                        {/* <form className="col-12 col-sm-8 col-lg-6">
                            <div className="mb-6">
                                <label htmlFor="cardNumber" className="form-label">信用卡卡號</label>
                                <input type="text" className="form-control p-3" id="cardNumber" name="cardNumber" placeholder="xxxx-xxxx-xxxx" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="cardSecurityCode" className="form-label">安全碼</label>
                                <input type="text" className="form-control p-3" id="cardSecurityCode" name="cardSecurityCode" placeholder="(共三碼)" required />
                            </div>
                            <div>
                                <label htmlFor="cardExpirationDate" className="form-label">到期日</label>
                                <input type="text" className="form-control p-3" id="cardExpirationDate" name="cardExpirationDate" placeholder="MM/YYYY" required />
                            </div>
                            <div className="mt-9 mt-sm-12 d-flex flex-wrap justify-content-between align-items-end w-100">
                                <p className="text-white fs-3">NT$1600</p>
                                <div className="mt-3 mt-sm-0 w-100 w-sm-70 d-flex justify-content-between">
                                    <Link className="btn py-2 border" to="/placeOrder" style={{width: "48%"}}>上一步</Link>
                                    <button type="button" className="btn bg-linear py-2 text-white" style={{width: "48%"}} onClick={handleCheckOut}>下一步</button>
                                </div>
                            </div>
                        </form> */}
                        {/* {order && (
                            order
                        )} */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CheckOut;