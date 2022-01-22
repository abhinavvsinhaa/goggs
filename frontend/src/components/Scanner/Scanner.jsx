import React, {useState} from 'react';
import QrReader from 'react-qr-scanner'
import isJWT from 'is-jwt';

import "./scanner.css"

const Scanner = () => {
    
    const [qrText, setQrText] = useState("");
    const handleScan = (data) => {
        if (data) { 
            if (data.text !== qrText) { 
                setQrText(data.text);
                if (isJWT(data.text)) {
                    
                }
            }
        }
     }
    const handleError = () => {
        alert("ERROR!");
    }

    const handleClick = () => {
        // send token and type to verification route
    }

    return (<div>
        <div className='qr-scanner'>
            <QrReader
                onError={handleError}
                onScan={handleScan}
                style={{ width: '500px', border:"5px solid #08335c" }}
            />
            <p>{qrText}</p>
            <select class="form-control">
            <option>MESS</option>
            <option>HOSTEL</option>
            <option>PARKING</option>
            </select>

            <button className='btn btn-primary' onClick={handleClick}>VERIFY?</button>
        </div>
    </div>);
};

export default Scanner;