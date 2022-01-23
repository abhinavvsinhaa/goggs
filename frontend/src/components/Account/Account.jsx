import React from "react";
import "./Account.css"
import UserImage from "../../assets/userImage.jpg";
import Dashboard from "../Dashboard/Dashboard"

function Account(props){
    return (
        <>
        <Dashboard/>
        <div className="account-container"> 
            <table className="table table-bordered table-responsive">
                <tr>
                <td style={{width: '200px'}} className="imageRoww">
                        <img src={UserImage} alt="image" width='200px' className="image"/>
                    </td>
                </tr>
                <tr>
                <td style={{backgroundColor: 'whitesmoke'}} className="user-detailss">Abhinav Sinha</td>
                </tr>
                <tr>
                    <td className="user-details">9920103085</td>
                </tr>
                <tr>
                    <td className="user-details" style={{backgroundColor: 'whitesmoke'}}>F3</td>
                </tr>
                <tr>
                    <td className="user-details">CSE</td>
                </tr>
                <tr>
                    <td className="user-details" style={{backgroundColor: 'whitesmoke'}}>Semester 4</td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default Account;
