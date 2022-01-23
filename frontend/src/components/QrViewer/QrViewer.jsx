import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import './qrviewer.css'
import Dashboard from '../Dashboard/Dashboard';


const QrViewer = ({ eroll }) => {

    const [token, setToken] = useState("");
    const [type, setType] = useState("general");

    const fetchUsers = async () => {
        const apiUrl = `http://localhost:8000/api/v1/generate/${type}`
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "enroll": eroll
            })
        })
        .then(res => res.json())
        .then(result => {
            setToken(result)
        })
        .catch(console.log)
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleChange = (event) =>{
        setType(event.target.value);
        fetchUsers();
    }

    return (
    <>
        <Dashboard />
        <div className='qr-view'>
            <select class="form-control" value={type} onChange={handleChange}>
                <option value="general">General</option>
                <option value="hostel">Hostel</option>
                <option value="mess">Mess</option>
            </select>
            <br/>
            <QRCode className="svgDownlode" value={token} />
            <br />
            <h3 style={{textTransform: 'uppercase'}}>{type} QR</h3>
        </div>
    </>
    );
};

export default QrViewer;
