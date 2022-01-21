import React from "react";
import "./Account.css"

function Account(props){
    return <div>
        <div className="user-profile">
        <img src={props.img} alt="User image" /><br />
        <h3>Name:  {props.name}</h3>
        <p>Email Id:  {props.email}</p>
        <p>Mobile No.:  {props.mob} </p>
        <p>Parent's Mobile no.: {props.parentsMob} </p>
        <p>Course enrolled: {props.course}</p>
        </div>
    </div>
}

export default Account;
