import React from "react";
import "../css/popup.css";
import { useState } from "react";

function Popup(props) {
 const [loginMode, setLoginMode] = useState(true);

 return props.trigger ? (
  <div className="popup">
   <div className="popup-inner">
    {/* {props.children} */}
    {loginMode ? (
     <div className="loginIn __popupWindow">
      <p>Email</p>
      <input type="text" className="inputLogAndPass" />
      <p>Password</p>
      <input type="text" className="inputLogAndPass" />
      <br />
      <button className="btnLoginPopup">Login In</button>
     </div>
    ) : (
     <div className="createAccount __popupWindow">
      <p>Email</p>
      <input type="text" className="inputLogAndPass" />
      <p>Password</p>
      <input type="text" className="inputLogAndPass" />
      <p>Confirm Password</p>
      <input type="text" className="inputLogAndPass" />
      <br />
      <button className="btnLoginPopup">Create account</button>
     </div>
    )}
    <br />
    <button onClick={() => props.setTrigger(false)} className="close-btn-popup">
     X
    </button>
    <p onClick={() => setLoginMode(!loginMode)} className="changeRegistration">
     {" "}
     {loginMode ? (
      <span>
       If you don't have an account, you can{" "}
       <span className="registration-text">Registration</span>
      </span>
     ) : (
      <span>
       If you have account <span className="registration-text">Login</span>
      </span>
     )}
    </p>
   </div>
  </div>
 ) : (
  ""
 );
}

export default Popup;
