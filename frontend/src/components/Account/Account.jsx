import React from "react";
import "./Account.css"
import {Contacts} from "../../Contacts/Contacts";
import UserImage from "../../assets/userImage.jpg";
import UserImage2 from "../../assets/user-image.png";
import Dashboard from "../Dashboard/Dashboard"

function Account(props){
    return (
        <div className="account-container"> 
            <table className="table table-bordered table-responsive">
                {/* <tr >
                    <td rowspan={5} style={{width: '200px'}} className="imageRow">
                        <img src={UserImage} alt="image" width='200px' className="image"/>
                    </td>
                    <td style={{backgroundColor: 'whitesmoke'}} className="user-details">Abhinav Sinha</td>
                </tr> */}
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



        // <div>
        //     <div className="user-profile">
        //     <img src={props.img} alt="User image" /><br />
        //     <h3>Name:  {props.name}</h3>
        //     <p>Email Id:  {props.email}</p>
        //     <p>Mobile No.:  {props.mob} </p>
        //     <p>Parent's Mobile no.: {props.parentsMob} </p>
        //     <p>Course enrolled: {props.course}</p>
        //     </div>
        // </div>
    )
}

export default Account;
