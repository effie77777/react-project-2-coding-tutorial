import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newAuthService from "../services/auth-service";

const Register = () => {
    const Navigate = useNavigate();
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ successMsg, setSuccessMsg ] = useState(null); 

    const changeUsername = (e) => {
        setUsername(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const changePswVisibility = () => {
        let psw = document.querySelector("#password");
        if (psw.type === "password") {
            psw.type = "text";
        } else if (psw.type === "text") {
            psw.type = "password";
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();
        newAuthService.register(username, email, password)
        .then((d) => {
            console.log(d);
            setErrorMsg(null);
            setSuccessMsg(`${d.data} 將為您導向登入頁面`);
            setTimeout(() => {
                setSuccessMsg(null);
                Navigate("/login");
            }, 2000);
        })
        .catch((e) => {
            console.log(e);
            setErrorMsg(e.response.data);
        })
    }

    return (
        <div className="container-fluid">
          
            {errorMsg && (
            <div className="error_msg">{errorMsg}</div>
            )}

            {successMsg && (
            <div className="success_msg">{successMsg}</div>
            )}

            <section className="my-11">
                <form>
                    <div className="mb-6">
                        <label htmlFor="username" className="form-label">姓名</label>
                        <input type="text" className="form-control px-3 py-2" id="username" name="username" required onChange={changeUsername} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="form-label">信箱</label>
                        <input type="email" className="form-control px-3 py-2" id="email" name="email" placeholder="example@gmail.com" required onChange={changeEmail} />
                    </div>
                    <div className="mb-11">
                        <div className="position-relative">
                            <label htmlFor="password" className="form-label">密碼</label>
                            <input type="password" className="form-control py-2 ps-3" id="password" name="password" minLength="8" required style={{paddingRight: "3.5rem"}} onChange={changePassword}
                            pattern="\w*[A-Z]+\w*\d+\w*[!?@#%&=_]+\w*|\w*[A-Z]+\w*[!?@#%&=_]+\w*\d+\w*|\w*\d+\w*[A-Z]+\w*[!?@#%&=_]+\w*|\w*\d+\w*[!?@#%&=_]+\w*[A-Z]+\w*|\w*[!?@#%&=_]+\w*[A-Z]+\w*\d+\w*|\w*[!?@#%&=_]+\w*\d+\w*[A-Z]+\w*" />
                            <button className="btn p-0 position-absolute end-0 ms-2 me-2 me-sm-4" style={{top: "46%"}} >
                                <span class="material-symbols-outlined font-fill-1 p-2" onClick={changePswVisibility} >
                                    visibility
                                </span>
                            </button>
                        </div>
                        <p className="mt-3">8位數以上，至少一個大寫英文字母、一個數字、一個特殊符號(僅限<span className="text-warning">!@#%&=_?</span>)且<span className="text-warning">不可有空格</span></p>
                    </div>
                    <button type="submit" className="btn bg-linear text-white px-6 w-100 w-sm-40 w-md-30 w-lg-25 border-0 px-3 py-2" style={{paddingTop: "0.625rem", paddingBottom: "0.625rem"}} onClick={handleRegister}>註冊</button>
                </form>
            </section>
        </div>
    )
}

export default Register;