import React, {useState} from 'react';
import QrReader from 'react-qr-scanner'
import "./scanner.css"

const Scanner = () => {
    
    const [qrText, setQrText] = useState("");
    const handleScan = (data) => {
        if (data) { 
            if (data.text !== qrText) { 
                setQrText(data.text);
            }
        }
     }
    const handleError = ()=>{ }
    
    return (<div>
        <div className='qr-scanner'>
            <QrReader
                onError={handleError}
                onScan={handleScan}
                style={{ width: '500px', border:"5px solid #08335c" }}
            />
            <h1>{qrText}</h1>
        </div>
    </div>);
};

export default Scanner;