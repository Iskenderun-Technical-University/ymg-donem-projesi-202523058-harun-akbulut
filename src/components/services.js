import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import SwitcherItems from "./switcherItems";
import brain from "../images/brain.svg";
import DataStrategy from "../images/DataStrategy.svg";
import DigitalTransform from "../images/DigitalTransform.svg";
import Cognitive from "../images/Cognitive.svg";
import changeManagement from "../images/changeManagement.svg";
import morCizgi from "../images/morCizgi.png";

function Services() {
  return (
    <>
      <div style={{ margin: '2%' }}></div>
      <div className="container d-flex justify-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      > 
        <div className="row">
           <div className="col-lg-3" >
          {" "}
          <SwitcherItems
            headItem="Data Strategy & Management"
            text="Detail"
            image={DataStrategy}
          />{" "}
        </div>
        <div className="col-lg-3">
          {" "}
          <SwitcherItems
            headItem="Digital Transformation"
            text="Detail"
            image={DigitalTransform}
          />{" "}
        </div>
        <div className="col-lg-3">
          {" "}
          <SwitcherItems
            headItem="Cognitive Analytics & Decision Science"
            text="Detail"
            image={Cognitive}
          />{" "}
        </div>
        <div className="col-lg-3 d-flex " >
          {" "}
          <SwitcherItems
            headItem="Change Management"
            text="Detail"
            image={changeManagement}
          />{" "}
        </div>
        </div>
       
      </div>
    </>
  );
}

export default Services;
