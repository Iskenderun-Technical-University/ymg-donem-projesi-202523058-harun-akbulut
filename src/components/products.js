import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import brain from "../images/brain.svg";
import SwitcherItems from "./switcherItems";
import predictive from "../images/predictive.svg";
import Predivtive from "../images/Predivtive.svg";
import Strategic from "../images/Strategic.svg";
import Dynamic from "../images/Dynamic.svg";
import Load from "../images/Load.svg";
import Crew from "../images/Crew.svg";
import Anti from "../images/Anti.svg";

function Products() {
  return (
    <>
      <div style={{ marginTop: '2%' }}></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
       <div className="row">
          <div className="col-12">
            <div className="row"> 
            <div className="col-lg-3" style={{marginTop:'4%'}}>
          {" "}
          <SwitcherItems
            headItem="Predictive Order"
            text="Sales & Marketing Detail"
            image={brain}
          />{" "}
        </div>
        <div  className="col-lg-3"  style={{marginTop:'2%'}}>
          {" "}
          <SwitcherItems
            headItem="Revenue Growth Management "
            text="Sales & Marketing Detail"
            image={predictive}
          />{" "}
        </div>
        <div  className="col-lg-3"  style={{marginTop:'2%'}}>
          {" "}
          <SwitcherItems
            headItem="Predictive Maintenance"
            text="Sales & Marketing Detail"
            image={Predivtive}
          />{" "}
        </div>
        <div  className="col-lg-3"  style={{marginTop:'2%'}}>
          {" "}
          <SwitcherItems
            headItem="Strategic Pricing "
            text="Sales & Marketing Detail"
            image={Strategic}
          />{" "}
        </div>
            </div>
        <div style={{margin:20}}></div>
        </div>
        <div className="col-12"  style={{marginTop:'4%'}}>
            <div className="row">
            <div className="col-lg-3">
          {" "}
          <SwitcherItems
            headItem="Dynamic Demand Forceasting"
            text=" Sales & Marketing Detail"
            image={Dynamic}
          />{" "}
        </div>
        <div  className="col-lg-3"  style={{marginTop:'0%'}}>
          {" "}
          <SwitcherItems
            headItem="Load Optimization"
            text="Product & Operations
            Detail"
            image={Load}
          />{" "}
        </div>
        <div  className="col-lg-3"  style={{marginTop:'0%'}}>
          {" "}
          <SwitcherItems
            headItem="Crew Planning"
            text="Product & Operations Detail"
            image={Crew}
          />{" "}
        </div>
        <div  className="col-lg-3"  style={{marginTop:'0%'}}>
          {" "}
          <SwitcherItems
            headItem="Anti Fraud Solution"
            text="Product & Operations Detail"
            image={Anti}
          />{" "}
        </div>
            </div>
 
        </div>
        </div>
        
        </div>


     
      
     
 
    </>
  );
}
export default Products;
