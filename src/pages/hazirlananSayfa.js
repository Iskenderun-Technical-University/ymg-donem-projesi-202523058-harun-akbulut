import React from "react";
import "../styles/App.css";
import logo from "../images/logo.png";
import animate from "../images/animation.gif";
import Switcher from "../components/switcher";

function YapimAsamasi() {
  return (
    <div >
      <div style={{ margin: 100 }}></div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 d-flex justify-content-center">
             <img style={{ maxWidth: "40%" }} src={animate} alt="" />
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
             <h1 style={{ maxWidth: "100%" }}>BU SAYFA YAPIM AŞAMASINDADIR...</h1>
          </div>
        </div>
      </div>
      

       
       

      <div style={{ margin: 200 }}></div>
    </div>
  );
}

export default YapimAsamasi;
