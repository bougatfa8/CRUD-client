import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Navbar from "./Navbar";

import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "a",
      password: "a"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user Login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);


      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for Login form
  const renderForm = (
  
    
    <>
 
      
    
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    </>
  );

  return (
    <div className="Login">
      <div className="Login-form">
        {isSubmitted ? <div>

            <Header/>
            <img src={require("C:/Users/ASUS/Desktop/travail/cr/crud/client/src/pages/assets/1.png")}/>
            <img src={require("C:/Users/ASUS/Desktop/travail/cr/crud/client/src/pages/assets/2.png")}/>
            <img src={require("C:/Users/ASUS/Desktop/travail/cr/crud/client/src/pages/assets/3.png")}/>
            <img src={require("C:/Users/ASUS/Desktop/travail/cr/crud/client/src/pages/assets/4.png")}/>
            <img src={require("C:/Users/ASUS/Desktop/travail/cr/crud/client/src/pages/assets/5.png")}/>
            <img src={require("C:/Users/ASUS/Desktop/travail/cr/crud/client/src/pages/assets/6.png")}/>




        </div> : renderForm}
      </div>
    </div>
  );
}

export default Login;