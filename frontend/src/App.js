import React, { useState } from "react";
import "./App.css";
import Account from "./components/Account/Account";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Contacts from "./Contacts/Contacts"
import Scanner from "./components/Scanner/Scanner";
import QrViewer from "./components/QrViewer/QrViewer";
import Verified from "./components/Verified/Verified";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const data = {
  "verified": 1,
  "user": {
    "name": "Abhinav Sinha",
    "image": "https://i.ibb.co/Gc5kwvH/abhinav.jpg",
    "enroll": 9920103085
  }
};

function App() {
  const [loginDetails, setLoginDetails] = useState(["","","",false]);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login setLoginDetails={setLoginDetails} loginDetails={loginDetails}/>}/>
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/qr" element={<QrViewer eroll={loginDetails[0]}/>} /> 
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

