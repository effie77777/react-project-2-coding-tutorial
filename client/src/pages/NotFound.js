import React from "react";
import banner from "../assets/images/homepage_banner.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container-fluid" style={{height: "calc(100vh - 91.6px)"}}>
            <div className="h-100 position-relative" style={{background: `url(${banner}) center 25%/110%`}}>      
                <div className="text-center position-absolute start-50 top-50" style={{transform: "translate(-50%, -80%)"}}>
                    <h3 className=" fs-10 text-linear">Page Not Found</h3>
                    <Link className="btn text-white mt-2 border-bottom rounded-0" to="/">帶我回首頁</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;