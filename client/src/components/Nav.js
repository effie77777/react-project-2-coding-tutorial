import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import newAuthService from "../services/auth-service";
import logo from "../assets/images/logo2.svg";

const Nav = ({ currentUser, setCurrentUser, setCurrentSearch, setAllCourses }) => {
    const Navigate = useNavigate();
    const handleLogout = (e) => {
        newAuthService.logout();
        localStorage.clear();
        setCurrentUser(null);
        setCurrentSearch([]);
        setAllCourses([]);
        window.alert("成功登出 ! 將為您導回首頁 : )");
        Navigate("/");
    }

    // const handleFacebookLogout = () => {
    //     window.FB.logout((response) => {
    //         console.log(response);
    //         setCurrentUser(null);
    //     })
    // }

    return (
        <section className="position-sticky top-0 z-3 bg-fourth">
            <nav className="navbar navbar-expand d-none d-sm-block p-0">
                <div className="container-fluid d-flex justify-content-between py-6">
                    <Link to="/" className="d-flex align-items-end">
                        <img src={logo} alt="logo" className="me-4" style={{width: "42px", height: "42px"}} />
                        <h1 className="fs-2 text-third">Coding Home</h1>
                    </Link>
                    <ul className="navbar-nav">
                        <li>
                            <Link className="nav-link" to="/">首頁</Link>
                        </li>

                        {currentUser && (
                        <li>
                            <Link className="nav-link" to="/class">課程介紹</Link>
                        </li>
                        )}

                        {!currentUser && (
                        <li>
                            <Link className="nav-link" to="/login">登入</Link>
                        </li>
                        )}

                        {!currentUser && (
                        <li>
                            <Link className="nav-link" to="/register">註冊</Link>
                        </li>
                        )}

                        {currentUser && (
                        <li>
                            <Link className="nav-link" to="/profile">個人頁面</Link>
                        </li>
                        )}

                        {currentUser && (
                        <li>
                            <button type="button" className="nav-link btn" onClick={handleLogout}>登出</button>
                        </li>
                        )}

                        {/* {currentUser && currentUser.access_token && (
                        <li>
                            <button type="button" className="nav-link btn" onClick={handleLogout}>Google 登出</button>
                        </li>
                        )} */}

                        {/* {currentUser && (
                        <li>
                            <button type="button" className="nav-link btn" onClick={handleFacebookLogout}>FB 登出</button>
                        </li>
                        )} */}

                    </ul>
                </div>
            </nav>

            <div className="container-fluid d-flex d-sm-none justify-content-between align-items-center py-6 px-0" style={{width: "310px"}}>
                <h1 className="fs-2 text-third d-flex">
                    <Link to="/" className="text-nowrap overflow-hidden" style={{background: `url(${logo}) center/cover`, width: "42px", height: "42px", textIndent: "101%"}}>
                        Coding Home
                    </Link>
                </h1>
                <button className="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div className="border-top border-3 border-primary w-8" style={{marginBottom: "0.45rem"}}></div>
                    <div className="border-top border-3 border-primary w-8" style={{marginBottom: "0.45rem"}}></div>
                    <div className="border-top border-3 border-primary w-8"></div>
                </button>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{width: "375px"}}>
                    <div className="offcanvas-header d-flex justify-content-end p-0">
                        <button type="button" className="btn-close btn fs-10 mt-3 me-8 p-2 h-fit-content" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
                    </div>
                    <div className="offcanvas-body">
                        <ul>
                            <li>
                                <Link to="/">首頁</Link>
                            </li>
                            <li>
                                <Link to="/class">課程介紹</Link>
                            </li>
                            <li>
                                <Link to="/login">登入</Link>
                            </li>
                            <li>
                                <Link to="/register">註冊</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>登出</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                <div className="border border-1 w-50 border-primary opacity-1" style={{height: "1px", minHeight: "1px"}}></div>
                <div className="border border-1 w-50 border-secondary opacity-1" style={{height: "1px", minHeight: "1px"}}></div>
            </div>
        </section>
    )
}

export default Nav;