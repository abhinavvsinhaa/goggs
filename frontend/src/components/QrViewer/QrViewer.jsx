import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import './qrviewer.css'


const QrViewer = ({ type, eroll}) => {
    
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJoaW5hdiBTaW5oYSIsInR5cGUiOiJob3N0ZWwiLCJlbnJvbGwiOjk5MjAxMDMwODUsInBhc3N3b3JkIjoiNjIyOTY1NzUzMjYiLCJpYXQiOjE1MTYyMzkwMjJ9.n3-VaLE_OOM188omS9Gh5DgeeapdURcQl3pPI5foOYo");
    
    useEffect(() => {
        const fetchUsers = async () => {
            const apiUrl = `http://localhost:8000/api/v1/generate/${token}`
        }
        fetchUsers();
    }, []);
    
    return <div className='qr-view'>
        <h1>{type} QR</h1>
        <QRCode value={token} />
    </div>;
};

export default QrViewer;
