import React from "react";
import QRimg from "../../assets/QRpayment.jpeg";
import "../QR/QR.css"

function QR(){
    return  <div>
        <div className="QrPage">
            <div className="QrText">
                <p>Click on the button to create QR!</p><br />
                <div className="QrLinks">
                <a href="something" className="Button1"><span >Academics</span></a>
                <a href="something" className="Button1" ><span>Hostel</span></a>
                <a href="something" className="Button1"><span>  Mess   </span></a>
                </div></div>
            <div className="QrImage">
                <img src={QRimg} alt="QR" />
            </div>
        </div>
    </div>
}
export default QR;