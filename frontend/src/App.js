import React from "react";
import "./App.css";
import Account from "./components/Account/Account";
import Login from "./screens/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Contacts from "./Contacts/Contacts"
import QR from "./components/QR/QR"

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Login />
      {/* <Account 
        img ={Contacts[0].img}
        name ={Contacts[0].name}
        email ={Contacts[0].email}
        mob ={Contacts[0].mob}
        parentsMob={Contacts[0].parentsMob}
        course={Contacts[0].course}
      /> */}
      {/* <QR /> */}

    </div>
  );
}

export default App;
