import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import newAuthService from "../services/auth-service";
import icon_fb from "../assets/images/icon_fb.svg";
import icon_google from "../assets/images/icon_google.svg";

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

    const handleLoginWithGoogle = useGoogleLogin({
        //這邊只是讓使用者成功登入，還沒向 Google 拿使用者的資料。要到 useEffect(() => {}, [currentUser]) 那邊才會跟 Google 要資料
        onSuccess: (codeResponse) => {
            setCurrentUser(codeResponse);
            console.log("codeResponse: ", codeResponse);
            // localStorage.setItem("user_data", {"token": JSON.stringify(codeResponse.access_token) });
            // Navigate("/profile");
        },
        onError: (error) => console.log("Login Failed: ", error)
    });

    // const handleLoginWithGoogle = GoogleLogin({
    //     onSuccess: (credentialResponse) => {
    //         newAuthService.loginWithGoogle(credentialResponse.credential)
    //         .then((d) => {
    //             localStorage.setItem("user_data", JSON.stringify(d.data));
    //             setCurrentUser(newAuthService.getCurrentUser());
    //             setErrorMsg(null);
    //             Navigate("/profile");
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         })
    //     },
    //     onError: () => {
    //         console.log('Login Failed');
    //     }
    // });

    // function getFbUser() {
    //     window.FB.api("/me", "GET", { fields: "name,email" }, (userInfo) => {
    //         console.log(userInfo);
    //     })   
    // }

    const handleLoginWithFacebook = () => {
        window.FB.login(
            function(response) {
                console.log(response);
                localStorage.setItem("access_token", JSON.stringify(response.authResponse.accessToken));
                setCurrentUser(response.authResponse.userID);
                if (response.status === "connected") {
                    // getFbUser();       
                    window.FB.api("/me", "GET", { fields: "name,email" }, (userInfo) => {
                        console.log(userInfo);
                    })              
                }
            },
            { scope: "public_profile,email,openid" }
        );
        newAuthService.loginWithFacebook(JSON.parse(localStorage.getItem("access_token")))
        .then((d) => {
            console.log(d);
        })
        .catch((e) => {
            console.log(e);
        })
    }


    useEffect(() => {    
        if (currentUser) {
            setErrorMsg("您已經登入過囉 ! 將為您導向個人頁面");
            setTimeout(() => {
                setErrorMsg(null);
                Navigate("/profile");
            }, 2000);
        } else {
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: process.env.REACT_APP_FACEBOOK_LOGIN_APPID,
                    cookie: true,
                    xfbml: true,
                    version: "v18.0",
                });
                console.log("after init");
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

    useEffect(() => {
        if (currentUser && currentUser.access_token) { //向 Google 拿使用者的資料
            axios.get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${currentUser.access_token}`,
                { headers: { Authorization: `Bearer ${currentUser.access_token}`, Accept: "application/json" } }
            )
            .then((res) => {
                console.log("res: ", res);
                // localStorage.setItem("user_data", JSON.stringify(res.data));
                // setProfile(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }, [currentUser]);

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
                <section>
                    <div className="border-top position-relative d-flex justify-content-center">
                        <p className="position-absolute px-5 bg-fourth" style={{transform: "translateY(-50%)"}}>其它登入方式</p>
                    </div>
                    <div className="d-flex mt-12 flex-wrap">
                        <button type="button" className="btn border text-white py-3 w-100 w-sm-40 w-md-30 w-lg-25 me-sm-5 mb-4 mb-sm-0" onClick={handleLoginWithFacebook}>
                            <img src={icon_fb} alt="Facebook icon" className="w-6 h-6 me-4" style={{marginTop: "-0.25rem"}} />
                            Facebook 登入
                        </button>
                        <button type="button" className="btn border text-white py-3 w-100 w-sm-40 w-md-30 w-lg-25" onClick={() => handleLoginWithGoogle()}>
                            <img src={icon_google} alt="Google icon" className="w-5 h-5 me-4" style={{marginTop: "-0.125rem"}} />
                            Google 登入
                        </button>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                                newAuthService.loginWithGoogle(credentialResponse.credential)
                                .then((d) => {
                                    console.log(d);
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