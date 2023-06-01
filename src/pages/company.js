import "../styles/App.css";
import React from "react";
import Basliklar from "../components/basliklar"; // altı mor başlıkların componentsi
import smartOrganization from "../images/smartorganization.svg";
import Company from "../components/Company";
import ibm from "../images/ibm.png";
import hp from "../images/hp.png";
import hewlett from "../images/Hewlett.png";
import microsoft from "../images/microsoft.png";
import osi from "../images/osi-soft.png";
import Celonis from "../images/Celonis.png";
import storediq from "../images/storediq.png";
import { domMax } from "framer-motion";

function Company1() {
  return (
    <main className="div1">
      <div style={{ margin: 100 }}></div>
      <Company />
      <br />

      <div style={{ margin: 100 }}></div>
      <Basliklar
        text="We help our clients run smart organizations!"
        width={1100}
      />
      <div style={{ margin: 40 }}></div>
      <p style={{ fontSize: 20, fontFamily: "Mont", color: "#353535" }}>
        Organizations choose us because we design innovative analytics solutions
        leveraging the latest technology, implement the solution with flexible
        partnership options and collaborate with organizations to implement
        strategic change management with data sprints.
      </p>
      <div style={{ margin: 40 }}></div>
      <div>
        <div></div>
      </div>
      <div className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        
      >
        <div className="row" style={{width:'100%'}}>
        <div className="col-lg-3">
          <img
            style={{ float: "left", marginTop: 25 }}
            src={smartOrganization}
          />
          <div
            style={{
              float: "left",
              fontFamily: "Mont-bold",
              marginTop: "5%",
              marginLeft: "5%",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Launching <br />
            Data Teams
          </div>
        </div>
        <div  className="col-lg-3">
          <img
            style={{ float: "left", marginTop: 12 }}
            src={smartOrganization}
          />
          <div
            style={{
              float: "left",
              fontFamily: "Mont-bold",
              marginTop: "5%",
              marginLeft: "5%",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 20,
              width: "60%",
            }}
          >
            Becoming a Strategic Partner
          </div>
        </div>
        <div className="col-lg-3">
          <img
            style={{ float: "left", marginTop: 12 }}
            src={smartOrganization}
          />
          <div
            style={{
              float: "left",
              fontFamily: "Mont-bold",
              marginTop: "5%",
              marginLeft: "5%",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Developing
            <br />
            Data Products
          </div>
        </div>
        <div className="col-lg-3">
          <img
            style={{ float: "left", marginTop: 12 }}
            src={smartOrganization}
          />
          <div
            style={{
              float: "left",
              fontFamily: "Mont-bold",
              marginTop: "5%",
              marginLeft: "5%",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Execute Cloud
            <br />
            Transformation
          </div>
        </div>

      </div>

      </div>

      <div style={{ margin:'5%' }}></div>
      <Basliklar text="Our Partners" width={400} />
      <div className="container"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
            <div className="col-lg-3" style={{marginTop: '5%' ,display: "flex", justifyContent: "center"}}>
          <img style={{ marginTop: '5%' }} src={ibm} />
        </div>
        <div  className="col-lg-3"  style={{marginTop: '5%'  ,display: "flex", justifyContent: "center"}}>
          <img style={{ marginTop: '5%' }} src={microsoft} />
        </div>
        <div  className="col-lg-3"  style={{marginTop: '5%' ,display: "flex", justifyContent: "center"}}>
          <img style={{  marginTop: '5%'}} src={Celonis} />
        </div>
        <div  className="col-lg-3"  style={{marginTop: '5%' ,display: "flex", justifyContent: "center"}}>
          <img style={{ marginTop: '5%' }} src={hewlett} />
        </div>
            </div>
          </div>
          <br />
          <div className="col-lg-12 d-flex justify-content-center" style={{width:'100%'}}>
            <div className="row d-flex justify-content-center" style={{width:'100%'}}>
            <div className="col-lg-4"  style={{marginTop: '5%' ,display: "flex", justifyContent: "center"}}> 
          <img style={{ maxWidth: '100%'}} src={osi} />
        </div>
        <div className="col-lg-4"  style={{marginTop: '5%' ,display: "flex", justifyContent: "center"}} >
          <img style={{ maxWidth: '100%' }} src={storediq} />
        </div>
        <div className="col-lg-4"  style={{marginTop: '5%' ,display: "flex", justifyContent: "center"}}>
          <img style={{maxWidth: '100%'}} src={hp} />
        </div>

            </div>
          </div>
        </div>
        </div>
      <div style={{ margin: 100 }}></div>
      <div className="container We-are">
        <div className="row we-are-inner">
          <div className="col-sm-12"
          style={{alignItems: "center", justifyContent: "center", display: "block"}}
          >
          <p
            style={{

              margin: 45,
              fontSize: "25px",
              color: "#353535",
              fontFamily: "Mont-book",
            }}
          >
            Do you want to be part of Datamind?
          </p>
          <p
            style={{

              margin: 45,
              fontFamily: "Mont-bold",
              color: "#F35181",
              fontSize: "46px",
            }}
          >
            We are hiring
          </p>
          <p
            style={{

              margin: 45,
              fontSize: "25px",
              color: "#353535",
              fontFamily: "Mont-book",
            }}
          >
            We are looking for data scientist, data engineers, software
            developers and B2B marketing specialist to join our diverse and
            dynamic team.
          </p>
          </div>
         
        </div>
      </div>
      <div style={{ margin: 35 }}></div>
    </main>
  );
}
export default Company1;
