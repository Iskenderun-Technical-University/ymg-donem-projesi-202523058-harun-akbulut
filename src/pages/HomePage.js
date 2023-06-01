import "../styles/App.css";
import React from "react";
import Basliklar from "../components/basliklar"; // altı mor başlıkların componentsi
import Items from "../components/yanTablo"; // yan yana durann itemlerin componotsi
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import arabaEl from "../images/elVeAraba.png";
import animate from "../images/animation.gif";
import UstImage from "../components/ustimage";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import guvenlik from "../images/Guvenlik.png";
import harita from "../images/Harita.png";
import canta from "../images/Canta.png";
import smartOrganization from "../images/smartorganization.svg";
import car from "../images/car.svg";
import ibm from "../images/ibm.png";
import hp from "../images/hp.png";
import hewlett from "../images/Hewlett.png";
import microsoft from "../images/microsoft.png";
import osi from "../images/osi-soft.png";
import Celonis from "../images/Celonis.png";
import storediq from "../images/storediq.png";
import Switcher from "../components/switcher";

function HomePage() {
  return (
    <main className="div1">
      {/* <Items image={animate} text="Accelerating 
        Competitive Advantage with 
        End-to-End Data Products & Services "
          paragraph={"Tailored Solutions for all your AI, data science and data engineering needs"}
          styleT={{
            fontFamily: 'Mont',
            fontWeight: 800,
            fontSize: 48,
            color: '#353535',
          }}

        /> */}
      <div style={{ margin: 100 }}></div>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="div1 col-sm-12 col-lg-8">
            <div>
              <h3
                className="basliklar"
                style={{
                  fontFamily: "Mont-bold",
                  textAlign: "left",
                  alignContent: "center",
                  fontWeight: "bold",
                  fontSize: 28,
                  color: "#353535",
                  width: "100%",
                }}
              >
                Accelerating <br />
                Competitive Advantage with
                <br />
                End-to-End Data Products & Services
                <br />
              </h3>
              <br />{" "}
              <p
                style={{
                  textAlign: "left",
                  fontFamily: "Mont",
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#353535",
                  width: "100%",
                }}
              >
                Tailored Solutions for all your AI, data science and data
                engineering needs
              </p>{" "}
            </div>{" "}
          </div>

          <div className="col-sm-12 col-lg-4 d-flex justify-content-center align-items-center">
            {" "}
            <img
              style={{ maxHeight: "%100", maxWidth: "100%" }}
              src={animate}
              alt=""
            />{" "}
          </div>
        </div>{" "}
      </div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ width: "90%" }}
      >
        <Basliklar text="Industries we serve" width={600} maxWidth={"90%"} />
      </div>
      <div style={{ margin: 40 }}></div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-3 p-3">
            <UstImage text="Consumer Goods" image={canta} />
          </div>

          <div className="col-lg-3 p-3 ">
            <UstImage text="Logistic" image={harita} />
          </div>

          <div className="col-lg-3 p-3 ">
            <UstImage text="Insurance" image={guvenlik} />
          </div>

          <div className="col-lg-3 p-3 ">
            <UstImage text="Manufacturing" image={guvenlik} />
          </div>
        </div>
      </div>
      <div style={{ margin: 90 }}></div>
      <div className=""></div> <Switcher />
      <div style={{ margin: 200 }}></div>
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
      
      <div style={{ margin: 100 }}></div>
      {/* 
      <Basliklar text="What Our Customers Say About Us" width={1100} />
      <div style={{ margin: 40 }}></div>
      <p
        style={{
          fontFamily: "Mont",
          marginTop: "5%",
          marginLeft: "5%",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 24,
        }}
      >
        Organizations choose us because we design innovative analytics solutions
        leveraging the latest technology, implement the solution with flexible
        partnership options and collaborate with organizations to implement
        strategic change management with data sprints.
      </p>*/}
      <div style={{ margin: 150 }}></div>
      <Basliklar text="Spotlight Case Study" width={650} />
      <div style={{ margin: 40 }}>
      <div className="container d-flex justify-content-center">
        <div className="row">
        <div className="col-lg-6">
          <p style={{ fontWeight: 700, fontSize: 28, fontFamily: "Mont-bold" }}>
            Fraud Prevention
          </p>
          <p style={{ fontWeight: 600, fontSize: 24 }}>
            Leveraging AI aganist instantly evolving fraud methods.
          </p>
          <br />
          <p style={{ fontSize: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <br />
          <br />
          <p>
            <a href="" style={{ color: "#285EA4" }}>
              View All the Case Studies
            </a>
          </p>
        </div>
        <div className="col-lg-6" style={{marginTop: '2%'}}>
          <img src={car} style={{ maxWidth: "100%" }} />
        </div>
        </div>
        </div>
      </div>
      <div style={{ margin: '10%' }}></div>
      {/* <Basliklar text="Our Partners" width={400} />*/}
      <Basliklar text="Our Partners" width={400} />
      <div style={{ margin: '1%' }}></div>
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
      
      
        
      <div style={{ margin: 30 }}></div>
    </main>
  );
}

export default HomePage;
