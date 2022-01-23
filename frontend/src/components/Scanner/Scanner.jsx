import React, {useState} from 'react';
import QrReader from 'react-qr-scanner'

import "./scanner.css"

const Scanner = () => {
    
    const [qrText, setQrText] = useState("");
    const [type, setType] = useState("general")
    const [session, setSession] = useState("breakfast");
    const [verified, setVerified] = useState(null)
    const [message, setMessage] = useState(null);

    const [user, setUser] = useState(null);
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [enroll, setEnroll] = useState(null);

    const [processed, setProcessed] = useState(0);

    const handleScan = (data) => {
        if (data) { 
            if (data.text !== qrText) { 
                setQrText(data.text);
            }
        }
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleSessionChange = (e) => {
        setSession(e.target.value)
    }

    const handleError = () => {
        alert("ERROR!");
    }

    const handleClick = () => {
        // send token and type to verification route
        if (!qrText) {
            alert("Please scan QR first!");
        } 

        if (type === 'general' || type === 'hostel') {
            fetch('http://localhost:8000/api/v1/user/verifyGeneralAndHostel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    JWT: qrText,
                    type: type
                })
            })
            .then(res => res.json())
            .then(result => {
                if (result.verified === 1) {
                    setVerified(1);
                    setEnroll(result.user.enroll)
                    setName(result.user.name)
                    setImage(result.user.image)
                    setProcessed(1);
                } else {
                    setVerified(0);
                    setMessage(result.message);
                    setProcessed(1);
                }
            })
            .catch(console.log)
        } else {
            fetch('http://localhost:8000/api/v1/user/verifyMess', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    JWT: qrText,
                    type: type,
                    session: session
                })
            })
            .then(res => res.json())
            .then(result => {
                if (result.verified === 1) {
                    setVerified(1);
                    setEnroll(result.user.enroll)
                    setName(result.user.name)
                    setImage(result.user.image)
                    setProcessed(1);
                } else {
                    setVerified(0);
                    setMessage(result.message);
                    setProcessed(1);
                }
            })
            .catch(console.log)
        }
    }

    return (
    <div className='scanner-container'>
        <div className="col1">     
            <div className='qr-scanner'>
                <QrReader
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '500px'}}
                />

                <p>
                    {
                    (qrText) ? <>
                    <br/>
                    Snapped ✅
                    </> 
                    : <></>
                    }
                </p>

                <select class="form-control" value={type} onChange={handleTypeChange} style={{backgroundColor: 'whitesmoke'}}>
                    <option value="general">General</option>
                    <option value="mess">Mess</option>
                    <option value="hostel">Hostel</option>
                </select>
                <br/>

                {
                    (type === 'mess') ? 
                    <select class="form-control" value={session} onChange={handleSessionChange} style={{backgroundColor: 'whitesmoke'}}>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    : <></>
                }

                <button className='btn btn-success processBtn' onClick={handleClick}>Process</button>
            </div>
        </div>
        <div className='col2'>
            {
                (processed === 1) ? 
                (verified === 0) ?
                    <h3 style={{color: '#D0342C'}}>{message}</h3>
                :
                <div className='inside-col'>
                    <img src={image} alt='' width="300px"/>
                    <br/><br/>
                    <p>{name}</p>
                    <p>{enroll}</p>
                </div>
                : 
                <></>
            }
        </div>

        
    </div>
    );
};

export default Scanner;

{/* <Verified verified={verified} message={message} name={name} image={image} enroll={enroll}/> */}