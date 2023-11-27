import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import newAuthService from "../services/auth-service";
import icon_fb from "../assets/images/icon_fb.svg";

const Login = ({ currentUser, setCurrentUser }) => {
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

    // 本地登入
    const handleLogin = (e) => {
        e.preventDefault();
        let emailInputTag = document.querySelector("#email");
        console.log(emailInputTag.validity);
        if (email.length === 0 || emailInputTag.validity.patternMismatch) {
            return setErrorMsg("信箱格式錯誤");
        } else if (password.length < 8) {
            return setErrorMsg("密碼至少需為 8 位數");
        }
        newAuthService.login(email, password)
        .then((d) => {
            setErrorMsg(null);
            setSuccessMsg(d.data.msg);
            setTimeout(() => {
                localStorage.setItem("user_data", JSON.stringify(d.data));
                let currentUser = newAuthService.getCurrentUser(); //不涉及 db 所以回傳資料的形式不是 promise，不用 .then .catch
                setCurrentUser(currentUser);      
                setSuccessMsg(null);
                Navigate("/profile");
            }, 2000);
        })
        .catch((e) => {
            console.log(e);
            setErrorMsg(e.response.data);
        })
    }

    // Facebook 登入
    const handleLoginWithFacebook = () => {
        window.FB.login(
            function(response) {
                let accessToken = response.authResponse.accessToken;
                if (response.status === "connected") {
                    window.FB.api("/me", "GET", { fields: "name,email" }, (userData) => {
                        newAuthService.loginWithFacebook(accessToken, userData)
                        .then((d) => {
                            setCurrentUser(d.data);
                            localStorage.setItem("user_data", JSON.stringify(d.data));
                            Navigate("/profile");
                        })
                        .catch((e) => {
                            console.log(e);
                        })        
                    })              
                }
            },
            { scope: "public_profile,email" }
        );
    }

    useEffect(() => {
        if (currentUser && currentUser.access_token) { // 向 Google 拿使用者的資料
            axios.get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${currentUser.access_token}`,
                { headers: { Authorization: `Bearer ${currentUser.access_token}`, Accept: "application/json" } }
            )
            .then((res) => {
                console.log("res: ", res);
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }, [currentUser]);

    useEffect(() => {    
        if (currentUser) {
            setErrorMsg("您已經登入過囉 ! 將為您導向個人頁面");
            setTimeout(() => {
                setErrorMsg(null);
                Navigate("/profile");
            }, 2000);
        } else {
            // Facebook 登入初始化
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: process.env.REACT_APP_FACEBOOK_LOGIN_APPID,
                    cookie: true,
                    xfbml: true,
                    version: "v18.0",
                });
                window.FB.AppEvents.logPageView();
            };
            (function(d, s, id) {
                let js;
                let fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, "script", "facebook-jssdk"));
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
                            <input type="email" className="form-control px-3 py-2" id="email" name="email" placeholder="example@gmail.com" required max="60" pattern=".+@.+\.+.{2,}" onChange={changeEmail} />
                        </div>
                        <div className="mb-11">
                            <div className="position-relative">
                                <label htmlFor="password" className="form-label">密碼</label>
                                <input type="password" className="form-control py-2 ps-3" id="password" name="password" required min="8" onChange={changePassword} />
                                <button type="button" className="btn p-0 position-absolute end-0 ms-2 me-2 me-sm-4" style={{top: "46%"}} >
                                    <span class="material-symbols-outlined font-fill-1 p-2" onClick={changePswVisibility} >
                                        visibility
                                    </span>
                                </button>
                            </div>
                            <p className="mt-3">8位數以上，至少一個大寫英文字母、一個數字、一個特殊符號(僅限<span className="text-warning">!@#%&=_?</span>)且<span className="text-warning">不可有空格</span></p>
                        </div>
                        <button type="submit" className="btn bg-linear text-white border-0 local-login-btn" style={{paddingTop: "0.625rem", paddingBottom: "0.625rem", height: "40px"}} onClick={handleLogin}>登入</button>
                    </form>
                </section>
                <section>
                    <div className="border-top position-relative d-flex justify-content-center">
                        <p className="position-absolute px-5 bg-fourth" style={{transform: "translateY(-50%)"}}>其它登入方式</p>
                    </div>
                    <div className="d-flex mt-12 flex-wrap">
                        <button type="button" className="btn border bg-white text-dark me-5 mb-4 mb-sm-0 rounded-1" style={{fontSize: "14px", width: "194px", height: "40px", fontFamily: "sans-serif", paddingRight: "6px", paddingLeft: "6px"}} onClick={handleLoginWithFacebook}>
                            <img src={icon_fb} alt="Facebook icon" style={{marginRight: "6px", height: "18px"}} />
                            使用 Facebook 帳戶登入
                        </button>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                newAuthService.loginWithGoogle(credentialResponse.credential)
                                .then((d) => {
                                    localStorage.setItem("user_data", JSON.stringify(d.data));
                                    setCurrentUser(newAuthService.getCurrentUser());
                                    setErrorMsg(null);
                                    Navigate("/profile");
                                })
                                .catch((e) => {
                                    console.log(e);
                                })
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        ></GoogleLogin>
                    </div>
                </section>
            </div>
            )}
        </div>
    )
}

export default Login;