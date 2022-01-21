import React from "react";
import Login from "./screens/Login/Login"
import "./App.css";
import Account from "./components/Account/Account";
 import Dashboard from "./components/Dashboard/Dashboard";
import Contacts from "./Contacts/Contacts"

function App() {
  return (
    <div className="App">
      {/* <Login /> */} 
    

      <Dashboard />
       <Account 
      img ={Contacts[0].img}
      name ={Contacts[0].name}
      email ={Contacts[0].email}
      mob ={Contacts[0].mob}
      parentsMob={Contacts[0].parentsMob}
      course={Contacts[0].course}
      />
      { /* <Login /> */}
    </div>
  );
}

export default App;
