import React from "react";
import { Link } from "react-router-dom"
import "./login.css";

const Login = () => {
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
                                <input type="radio" id="Student" name="AccountType" value="Student" />
                                &nbsp;
                                <label for="Student">Student</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="Admin" name="AccountType" value="Admin" />
                                &nbsp;
                                <label for="Admin">Admin</label>
                            </div>
                            <br />
                            <input type="text" placeholder="  Enrollment"/><br/>
                            <input type="password" placeholder="  Password" />
                            <br />
                            <button className="btn btn-success">
                                <Link to='/qr' style={{color: 'inherit', textDecoration: 'none'}}>
                                    Login                                
                                </Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;