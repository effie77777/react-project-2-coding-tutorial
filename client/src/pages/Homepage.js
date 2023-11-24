import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/homepage_banner.jpg";
import share_1 from "../assets/images/homepage_section5-1.jpg";
import share_2 from "../assets/images/homepage_section5-2.png";
import share_3 from "../assets/images/homepage_section5-3.png";
import student_1 from "../assets/images/homepage_section5-1-student.jpg";
import student_2 from "../assets/images/homepage_section5-2-student.jpg";
import student_3 from "../assets/images/homepage_section5-3-student.jpg";
import instructor from "../assets/images/instructor.jpg";

const Homepage = () => {
    setTimeout(() => {
        const card = document.querySelectorAll(".section2-card");
        for (let i = 0; i < card.length; i ++) {
            card[i].addEventListener("mouseenter", (e) => {
                e.stopPropagation();
                card[i].classList.add("active");
            })
            card[i].addEventListener("mouseleave", (e) => {
                e.stopPropagation();
                card[i].classList.remove("active");
            })
        }    
    }, 3000)

    return (
        <div>
            <div className="container-fluid bg-fourth">
                <section className="d-flex banner py-21 py-md-0" style={{background: `url(${banner}) center/100%`}}>
                    <div className="row w-100 m-auto">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="col-md-9 col-lg-8 col-xl-6 border d-flex flex-column align-items-center py-8 px-4 position-relative z-1 bg-fourth">
                                <h2 className="fw-bold fs-7 fs-sm-9 text-linear">全臺最豐富的程式家教</h2>
                                <h2 className="fw-bold fs-7 fs-sm-9 text-white">在實踐中化理想為現實</h2>
                                <h3 className="mt-6 mb-2 fs-sm-2 text-white" style={{fontSize: "0.875rem"}}>全台最專業師資｜到府程式家教｜客製化課程</h3>
                                <div className="square-tiny top-0 start-0" style={{transform: "translate(-50%, -50%)"}}></div>
                                <div className="square-tiny top-0 end-0" style={{transform: "translate(50%, -50%)"}}></div>
                                <div className="square-tiny bottom-0 start-0" style={{transform: "translate(-50%, 50%)"}}></div>
                                <div className="square-tiny bottom-0 end-0" style={{transform: "translate(50%, 50%)"}}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container-fluid bg-third bg-opacity-10">
                <section className="section pb-md-12 pb-lg-20">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center">
                            <div className="col-12 col-lg-3 d-flex flex-column align-items-center align-items-lg-start pb-6 pb-lg-0">
                                <h3 className="title">手把手帶你</h3>
                                <h3 className="title">親自到家教到會</h3>
                                <div className="title-vr"></div>
                            </div>
                            <div className="section2-card">
                                <span className="material-symbols-outlined fs-10">
                                    code
                                </span>
                                <p className="mt-5 fw-bold fs-3 text-center">超過100種專業課程</p>
                                <p className="mt-4 text-center">學習標準化的電腦形式語言培養運算思維和邏輯素養</p>
                            </div>
                            <div className="section2-card mt-6 mt-md-0">
                                <span className="material-symbols-outlined fs-10 font-fill-1">
                                    rocket_launch
                                </span>
                                <p className="mt-5 fw-bold fs-3">高效學習</p>
                                <p className="mt-4 text-center">客製化專屬課表讓學習變簡單</p>
                            </div>
                            <div className="section2-card mt-6 mt-md-0">
                                <span className="material-symbols-outlined fs-10">
                                    location_on
                                </span>
                                <p className="mt-5 fw-bold fs-3">指定地點</p>
                                <p className="mt-4 text-center">專業老師到你指定的地點一對一高效學習</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container-fluid bg-fourth">
                <section className="section text-white d-flex flex-column align-items-center">
                    <div>
                        <h3 className="title">預約上課流程</h3>
                        <div className="title-vr mb-12 mb-md-18 mx-auto"></div>
                    </div>
                    <div className="row w-100">
                        <div className="col-12 d-flex justify-content-between flex-wrap">
                            <div className="section3-card">
                                <div>
                                    <h4>預約</h4>
                                    <p>線上預約課程與老師</p>
                                    <p>由老師安排專屬課程</p>
                                    <p className="top-md-n20">01</p>
                                </div>
                            </div>
                            <div className="section3-card mt-12 mt-sm-0">
                                <div>
                                    <h4>付款</h4>
                                    <p>支援各種支付方式</p>
                                    <p>提供12期分期付款</p>
                                    <p className="top-md-n20">02</p>
                                </div>
                            </div>
                            <div className="section3-card mt-12 mt-xl-0">
                                <div>
                                    <h4>上課</h4>
                                    <p>地點地點由您指定</p>
                                    <p>密集性一對一教學</p>
                                    <p className="top-md-n20">03</p>
                                </div>
                            </div>
                            <div className="section3-card mt-12 mt-xl-0">
                                <div>
                                    <h4>建議</h4>
                                    <p>重視學員的課程回饋</p>
                                    <p>讓我們持續成長進步</p>
                                    <p className="top-md-n20">04</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="section px-6 bg-third bg-opacity-10">
                <h3 className="title text-center">您想學習的程式，都在這裡</h3>
                <div className="title-vr mb-6 mb-md-18 mx-auto"></div>
                <div className="container-fluid">
                    <ul className="d-flex overflow-auto section4-ul">
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                        <li>Node.js</li>
                        <li>SQL</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>PHP</li>
                        <li className="word-break-keep-all">UI設計</li>
                    </ul>
                </div>
            </section>

            <div className="container-fluid bg-fourth">
                <section className="pt-10 pb-20 pb-md-30 py-lg-20" style={{background: `url(${banner}) center/100%`}}>
                    <h3 className="title text-center">專屬你的學習課程</h3>
                    <h3 className="fw-bold text-white fs-4 text-center">超過3000位學員得到了程式超能力</h3>
                    <div className="title-vr mb-6 mb-md-18 mx-auto"></div>
                    <div className="row mt-12">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="col-8 col-md-6 col-lg-8">
                                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators w-lg-60">
                                        <button className="me-2 active" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                                        <button className="me-2" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button className="me-lg-7" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div className="section5-card">
                                                <img src={share_1} alt="student's learning process"/>
                                                <div>
                                                    <h4>老師很有耐心</h4>
                                                    <p>老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！</p>
                                                    <img src={student_1} alt="a student" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div className="section5-card">
                                                <img src={share_2} alt="student's learning process" />
                                                <div>
                                                    <h4>老師很有耐心</h4>
                                                    <p>老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！</p>
                                                    <img src={student_2} alt="a student" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div className="section5-card">
                                                <img src={share_3} alt="student's learning process" />
                                                <div>
                                                    <h4>老師很有耐心</h4>
                                                    <p>老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！</p>
                                                    <img src={student_3} alt="a student" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    ) 
}

export default Homepage;