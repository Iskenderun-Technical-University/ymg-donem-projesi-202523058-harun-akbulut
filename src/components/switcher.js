import React, { useState } from "react";
import { ReactDOM } from "react";
import Products from "./products";
import Services from "./services";
import "../styles/switcher.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import servicesWhite from "../images/sevicesWhite.svg";
import servicesDark from "../images/servicesDark.svg";
import productDark from "../images/productDark.svg";
import productWhite from "../images/productWhite.svg";

function Switcher() {
  const [whiteS, setWhiteS] = useState(servicesDark);
  const [WhiteP, setWhiteP] = useState(productWhite);
  const [show, setShow] = useState(true);
  const [showP, setShowP] = useState(false);
  const [btnStyle, setBtnStyle] = useState("akBtn");
  const [btn2Style, setBtn2Style] = useState("karaBtn");

  const changeStyle = () => {
    setWhiteP(productDark);
    setWhiteS(servicesWhite);
    setShowP(true);
    setShow(false);
    setBtnStyle("karaBtn");
    setBtn2Style("akBtn");
  };

  const changeStyle1 = () => {
    setWhiteP(productWhite);
    setWhiteS(servicesDark);
    setShowP(false);
    setShow(true);
    setBtnStyle("akBtn");
    setBtn2Style("karaBtn");
  };

  return (
    <>
      <div
        className="anaBolum"
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className={btnStyle} onClick={changeStyle}>
          <img style={{ margin: 5 }} />
          <img src={whiteS} /> Products
        </button>
        <button className={btn2Style} onClick={changeStyle1}>
          <img style={{ margin: 5 }} />
          <img src={WhiteP} /> Services
        </button>
      </div>
      <div style={{ margin: 20 }}></div>

      {show ? <Services /> : null}
      {showP ? <Products /> : null}
    </>
  );
}

export default Switcher;
