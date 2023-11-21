import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import newAuthService from "../services/auth-service";
import icon_fb from "../assets/images/icon_fb.svg";
import icon_google from "../assets/images/icon_google.svg";

const Login = ({ currentUser, setCurrentUser, profile, setProfile }) => {
    const Navigate = useNavigate();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ successMsg, setSuccessMsg ] = useState(null);

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const changePswVisibility = (e) => {
        console.log(e.target);
        let pwd = document.querySelector("#password");
        pwd.type === "password"
        ? pwd.type = "text"
        : pwd.type = "password";
    }

    const handleLogin = (e) => {
        e.preventDefault();
        let emailInputTag = document.querySelector("#email");
        // let passwordInputTag = document.querySelector("#password");
        console.log(emailInputTag.validity);
        if (email.length === 0 || emailInputTag.validity.patternMismatch) {
            return setErrorMsg("信箱格式錯誤");
        } else if (password.length < 8) {
            return setErrorMsg("密碼至少需為 8 位數");
        }
        newAuthService.login(email, password)
        .then((d) => {
            console.log("successful! ", d);
            setErrorMsg(null);
            setSuccessMsg(d.data.msg);
            setTimeout(() => {
                localStorage.setItem("user_data", JSON.stringify(d.data));
                let currentUser = newAuthService.getCurrentUser();
                setCurrentUser(currentUser); //不涉及 db 所以回傳資料的形式不是 promise，不用 .then .catch      
                setSuccessMsg(null);
                Navigate("/profile");
                               
                //(待檢驗)如果在 navigate 到 class 頁面前就先設定 currentUser，這樣在 login 頁面就有 currentUser 存在，就會跳出錯誤訊息
            }, 2000);
        })
        .catch((e) => {
            console.log(e);
            setErrorMsg(e.response.data);
        })
    }

    useEffect(() => {
        if (currentUser) {
            setErrorMsg("您已經登入過囉 ! 將為您導向個人頁面");
            setTimeout(() => {
                setErrorMsg(null);
                Navigate("/profile");
            }, 2000);
        }
    }, []);

    return (
        <div className="container-fluid">

            {errorMsg && (
                <div className="error_msg">{errorMsg}</div>
            )}

            {successMsg && (
                <div className="success_msg">{successMsg}</div>
            )}

            {!currentUser && (
            <div>
                <section className="my-11">
                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="form-label">信箱</label>
                            <input type="email" className="form-control p-3" id="email" name="email" placeholder="example@gmail.com" required max="60" pattern=".+@.+\.+.{2,}" onChange={changeEmail} />
                        </div>
                        <div className="mb-11">
                            <div className="position-relative">
                                <label htmlFor="password" className="form-label">密碼</label>
                                <input type="password" className="form-control py-3 ps-3" id="password" name="password" required min="8" onChange={changePassword} />
                                <button type="button" className="btn p-0 position-absolute end-0 ms-2 me-2 me-sm-4" style={{top: "46%"}} >
                                    <span class="material-symbols-outlined font-fill-1 p-2" onClick={changePswVisibility} >
                                        visibility
                                    </span>
                                </button>
                            </div>
                            <p className="mt-3">8位數以上，至少一個大寫英文字母、一個數字、一個特殊符號(僅限<span className="text-warning">!@#%&=_?</span>)且<span className="text-warning">不可有空格</span></p>
                        </div>
                        <button type="submit" className="btn bg-linear text-white px-6 w-100 w-sm-40 w-md-30 w-lg-25 border-0" style={{ paddingTop: "0.625rem", paddingBottom: "0.625rem" }} onClick={handleLogin}>登入</button>
                    </form>
                </section>
                {/* <section>
                    <div className="border-top position-relative d-flex justify-content-center">
                        <p className="position-absolute px-5 bg-fourth" style={{transform: "translateY(-50%)"}}>其它登入方式</p>
                    </div>
                    <div className="d-flex mt-12 flex-wrap">
                    </div>
                </section> */}
            </div>
            )}
        </div>
    )
}

export default Login;