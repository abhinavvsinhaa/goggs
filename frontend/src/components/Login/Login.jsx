import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = ({ setLoginDetails, loginDetails }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (loginDetails[3] == true) {
            navigate('/qr');
        }
    }, []);
    
    const [msg, setMsg] = useState("");
    const handleEnroll = (e) => { 
        const newArr = [...loginDetails];
        newArr[0] = e.target.value;
        setLoginDetails(newArr);
    }
    const handlePassword = (e) => { 
        const newArr = [...loginDetails];
        newArr[1] = e.target.value;
        setLoginDetails(newArr);
    }
    const handleType = (e) => { 
        const newArr = [...loginDetails];
        newArr[2] = e.target.value;
        setLoginDetails(newArr);
    }
    const handleLogin = (e) => { 
        e.preventDefault();
        if (loginDetails[1] !== "123456789") {
            setMsg("Wrong Password");
        } else { 
            setMsg("");
            const newArr = [...loginDetails];
            newArr[3] = true;
            setLoginDetails(newArr);
            navigate('/qr');
        }
    }
    return (
        <div className="container-fluid loginContainer">
            <div className="row gx-5 gy-5">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-0 col-0 loginImage">
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 loginAccount">
                    <div className="login-box">
                        <h4> SIGN IN</h4>
                        <br />
                        <form>
                            <div className="Student">
                                <input type="radio" id="Student" name="AccountType" value="Student" onChange={handleType} />
                                &nbsp;
                                <label for="Student">Student</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="Admin" name="AccountType" value="Admin" onChange={handleType}/>
                                &nbsp;
                                <label for="Admin">Admin</label>
                            </div>
                            <br />
                            <input type="text" placeholder="  Enrollment" onChange={handleEnroll} value={loginDetails[0]}/><br/>
                            <input type="password" placeholder="  Password" onChange={handlePassword} value={loginDetails[1]}/>
                            <br />
                            <p style={{ color: "red" }}>{msg}</p>
                            <button className="btn btn-success" onClick={handleLogin}>
                                    Login       
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;