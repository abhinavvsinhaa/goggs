import React from "react";
import "./App.css";
import Account from "./components/Account/Account";
import Login from "./screens/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Contacts from "./Contacts/Contacts"
import Scanner from "./components/Scanner/Scanner";
import QrViewer from "./components/QrViewer/QrViewer";
import Verified from "./components/Verified/Verified";

const data = {
  "verified": 1,
  "user": {
    "name": "Abhinav Sinha",
    "image": "https://i.ibb.co/Gc5kwvH/abhinav.jpg",
    "enroll": 9920103085
  }
};

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Scanner />
    </div>
  );
}

export default App;

