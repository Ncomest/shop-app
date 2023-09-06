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
     Close
    </button>
    <button onClick={() => setLoginMode(!loginMode)}>
     {loginMode ? "Registration" : "Login"}
    </button>
   </div>
  </div>
 ) : (
  ""
 );
}

export default Popup;
