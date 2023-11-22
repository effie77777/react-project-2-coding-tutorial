import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loading from "./pages/Loading";
import newAuthService from "./services/auth-service";
import "bootstrap/dist/js/bootstrap";
const Homepage = lazy(() => import("./pages/Homepage.js"));
const Class = lazy(() => import("./pages/Class.js"));
const Detail = lazy(() => import("./pages/Detail.js"));
const Login = lazy(() => import("./pages/Login.js"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder.js"));
const CheckOut = lazy(() => import("./pages/CheckOut.js"));
const Finished = lazy(() => import("./pages/Finished.js"));

const App = () => {
    //不可以寫成 useState(null)，因為子 components 有變動時，App 就又會再把 currentUser 設成 null
    const [ currentUser, setCurrentUser ] = useState(newAuthService.getCurrentUser());
    //如果 allCourses 也寫成向上面這樣呢?
    const [ allCourses, setAllCourses ] = useState([]);
    const [ currentSearch, setCurrentSearch ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const [ purchase, setPurchase ] = useState(null);
    const [ orderFromCustomer, setOrderFromCustomer ] = useState([{"name": currentUser.data.username, "tel": "", "email": currentUser.data.email, "date": "", "address": "" }]);
    const [ orderFromECPAY, setOrderFromECPAY ] = useState(null);

    return (
        <div>
            <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} setCurrentSearch={setCurrentSearch} setAllCourses={setAllCourses} setProfile={setProfile} />
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route exact path="/" element={<Homepage />}></Route>
                    <Route exact path="/class" element={<Class allCourses={allCourses} setAllCourses={setAllCourses} currentSearch={currentSearch} setCurrentSearch={setCurrentSearch} />}></Route>
                    <Route exact path="/detail" element={<Detail currentUser={currentUser} allCourses={allCourses} setAllCourses={setAllCourses} currentSearch={currentSearch} setCurrentSearch={setCurrentSearch} purchase={purchase} setPurchase={setPurchase} />}></Route>
                    <Route exact path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} profile={profile} setProfile={setProfile} />}></Route>
                    <Route exact path="/register" element={<Register />}></Route>
                    <Route exact path="/profile" element={<Profile currentUser={currentUser} setAllCourses={setAllCourses} profile={profile} />}></Route>
                    <Route exact path="/placeOrder" element={<PlaceOrder currentUser={currentUser} setCurrentUser={setCurrentUser} orderFromECPAY={orderFromECPAY} setOrderFromECPAY={setOrderFromECPAY} orderFromCustomer={orderFromCustomer} setOrderFromCustomer={setOrderFromCustomer} currentSearch={currentSearch} setCurrentSearch={setCurrentSearch} purchase={purchase} setPurchase={setPurchase} />}></Route>
                    <Route exact path="/checkOut" element={<CheckOut purchase={purchase} setPurchase={setPurchase} currentSearch={currentSearch} setCurrentSearch={setCurrentSearch} orderFromCustomer={orderFromCustomer} setOrderFromCustomer={setOrderFromCustomer} orderFromECPAY={orderFromECPAY} setOrderFromECPAY={setOrderFromECPAY} />}></Route>
                    <Route exact path="/finished" element={<Finished />}></Route>
                </Routes>
            </Suspense>
            {/* <Footer /> */}
        </div>
    )
}

export default App;