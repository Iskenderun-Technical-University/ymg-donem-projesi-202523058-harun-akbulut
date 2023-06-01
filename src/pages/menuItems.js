import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../styles/hovers.css'

export const menuItems = [
  {
    title: <Link style={{display:"flex",padding:0, justifyContent: "flex-start", alignItems: "flex-start"}}><h4 style={{textAlign:"start",fontFamily: 'Mont' ,color:"#353535;"}}>Products</h4></Link>,
    submenu: [
      {
        title: (
          <Link className="product" title="FMCG360" to="/empty" style={{fontFamily: 'Mont-bold' ,color: "#93338C" }}>
            <p>FMCG360</p>
          </Link>
        ),
      },
      {
        title: (
          <Link title="Load Optimizer" to="/empty" style={{ fontFamily: 'Mont-bold' ,color: "#93338C" }}>
            Load Optimizer
          </Link>
        ),
      },
      {
        title: (
          <Link
            title="Anti Fraud Solution"
            to="/empty"
            style={{fontFamily: 'Mont-bold' , color: "#93338C" }}
          >
            Anti Fraud Solution
          </Link>
        ),
      },
      {
        title: (
          <Link
            title="Manufacturing"
            to="/empty"
            style={{fontFamily: 'Mont-bold' , color: "#93338C" }}
          >
            Manufacturing
          </Link>
        ),
      },
      {
        title: (
          <Link title="Cocpit" to="/empty" style={{fontFamily: 'Mont-bold' , color: "#93338C" }}>
            Cocpit
          </Link>
        ),
      },
    ],
  },

  {
    title: (
      <Link to="/ourservices"  style={{display:"flex",padding:0, justifyContent: "flex-start", alignItems: "flex-start"}}>
        <h4>Services</h4>
      </Link>
    ),
    submenu: [
      {
        title: (
          <Link
            title="Data Strategy & Management"
            to="/DataSM"
            style={{fontFamily: 'Mont-bold' , fontFamily: 'Mont-bold' , color: "#F98E4A" }}
          >
            Data Strategy & Management
          </Link>
        ),
      },
      {
        title: (
          <Link
            title="Cognnitive & AI"
            to="/cognnitiveA"
            style={{ fontFamily: 'Mont-bold' ,color: "#F98E4A" }}
          >
            Cognnitive & AI
          </Link>
        ),
      },
      {
        title: (
          <Link
            title="Cloud & Digital Transformation"
            to="/cloudDigital"
            style={{ fontFamily: 'Mont-bold' , color: "#F98E4A" }}
          >
            Cloud & Digital Transformation
          </Link>
        ),
      },
      {
        title: (
          <Link
            title="Change Managment"
            to="/ChangeManagment"
            style={{fontFamily: 'Mont-bold' , color: "#F98E4A" }}
          >
            Change Managment
          </Link>
        ),
      },
    ],
  },

  {
    title: <Link  style={{display:"flex",padding:0, justifyContent: "flex-start", alignItems: "flex-start"}}><h4 style={{fontFamily: 'Mont' ,color:"#353535;"}}>Industry</h4></Link> ,
    submenu: [
      {
        title: (
          <Link
            title="Discovery Industry Solutions"
            to="/empty"
            style={{ fontFamily: 'Mont-bold' ,color: "#00B18A" }}
          >
            Discovery Industry Solutions
          </Link>
        ),
      },
      {
        title: (
          <Link title="Consumer Goods" to="/empty" style={{fontFamily: 'Mont-bold' , color: "#00B18A" }}>
            Consumer Goods
          </Link>
        ),
      },
      {
        title: (
          <Link title="Insurance" to="/empty" style={{ fontFamily: 'Mont-bold' ,color: "#00B18A" }}>
            Insurance
          </Link>
        ),
      },
      {
        title: (
          <Link title="Logistics" to="/empty" style={{ fontFamily: 'Mont-bold' ,color: "#00B18A" }}>
            Logistics
          </Link>
        ),
      },
      {
        title: (
          <Link title="Insurance" to="/empty" style={{ fontFamily: 'Mont-bold' ,color: "#00B18A" }}>
            Insurance
          </Link>
        ),
      },
    ],
  },

  {
    title: (
      <Link className="comp" to="/Company"  style={{display:"flex",padding:0, justifyContent: "flex-start", alignItems: "flex-start", marginTop:'3%'}}>
        <h4>Company</h4>
      </Link>
    ),
  },
];
