import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import './qrviewer.css'


const QrViewer = ({ eroll }) => {

    const [token, setToken] = useState("");
    const [type, setType] = useState("GENERAL");

    const fetchUsers = async () => {
        const apiUrl = `http://localhost:8000/api/v1/generate/${type.toLowerCase()}`
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "enroll": eroll
            })
        });
        console.log(res);
        setToken(res.data);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleChange = (event) =>{
        setType(event.target.value);
        fetchUsers();
    }

    return <div className='qr-view'>
        <select class="form-control" value={type} onChange={handleChange}>
            <option>GENERAL</option>
            <option>HOSTEL</option>
            <option>PARKING</option>
        </select>
        <br/>
        <QRCode value={token} />
        <h1>{type} QR</h1>
    </div>;
};

export default QrViewer;
