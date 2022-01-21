import React from "react";
import Login from "./screens/Login/Login"
import "./App.css";
import Account from "./components/Account/Account";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Account 
      img ="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      name ="xyz"
      email ="xyz.com"
      mob ="jhh"
      parentsMob="hjj"
      course="2yr"
      /> */}

      <Dashboard />
      {/* <Login /> */}
    </div>
  );
}

export default App;
