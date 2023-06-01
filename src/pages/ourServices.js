import "../styles/App.css";
import React from "react";
import Basliklar from "../components/basliklar"; // altı mor başlıkların componentsi
import Items from "../components/yanTablo"; // yan yana durann itemlerin componotsi
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import arabaEl from "../images/elVeAraba.png";
import UstImage from "../components/ustimage";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import guvenlik from "../images/Guvenlik.png";
import harita from "../images/Harita.png";
import canta from "../images/Canta.png";
import smartOrganization from "../images/smartorganization.svg";
import car from "../images/car.svg";
import { Row } from "react-bootstrap";
import ourservices from "../images/ourservices.png";
import ikiInsan from "../images/Vector.png";
import insanYuzu from "../images/insanYuzu.svg";
import piyon from "../images/piyon.svg";
import karsilikliBesgen from "../images/karsilikliBesgen.svg";
import transformation from "../images/transformation.svg";
import Datasm from "../images/DataSM.svg";
import CognitiveAI from "../images/CognitiveAI.svg";
import DigitalTransform from "../images/DigitalTransform.svg";
import changeManagement from "../images/changeManagement.svg";

function OurServices() {
  return (
    <main className="div1">
      <div style={{ margin: 100 }}></div>
      <div className="container d-flex justify-content-center" 
      style={{ width: "100%" }}>
        <div className="row">
        <div className="col-lg-9">
          <p
            style={{
              fontWeight: 700,
              fontSize: 28,
              fontFamily: "Mont-bold",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 36,
            }}
          >
            Our Services
          </p>
          <br />
          <p style={{ fontWeight: 600, fontSize: 24 }}>
            From cloud tranformation, cognitive analytics to artificial
            intelligence, leveraging all your data resources and business
            know-how, we drive insights that leads to smart decisions and high
            return on investments.
          </p>
          <br />
          <br />
        </div>
        <div className="col-lg-3">
          <img src={ourservices} />
 
      </div>
      </div>
      </div>
      <div style={{ margin: '2%' }}></div>
      <br />
      <br />
      
      <div  className="container d-flex justify-content-center" 
      style={{ width: "100%" }}>
        <div className="row">
        <div className="col-lg-3"
          style={{
            display: "flex",
            alignItems: "center",
          

          }}
        >
          <img src={ikiInsan} />
        </div>
        <div className="col-lg-9 text-wrap">


          <p style={{ fontWeight: 600, fontSize: 24, fontFamily: "Mont-Bold" }}>
            We collaborate with you to understand the nature of your business
            and unique challenges and bring your organization innovative
            solutions delivered across multiple technologies, platforms, devices
            and models. We help you to leverage cloud based technologies in your
            organization.
          </p>
          <br />
          <p style={{ fontWeight: 600, fontSize: 24 }}>
            We help clients run smart organization across all business stages!
            Crafting an effective and sustainable data strategy, implement a
            data governance methodology, digital transformation and automation
            of business functions, solutions driven by machine learning, IoT and
            overcoming the hurdles of managing the change in your organization,
            we design end-to-end tailored solutions.{" "}
          </p>
          <br />
          <p>
            <a href="" target="_self">
              See How We Helped
            </a>
          </p>
        </div>
        </div>
        
      
      </div>

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
      <div className="mainDiv" style={{ textAlign: "center" }}>
        <h3 style={{ fontWeight: 200 }}>HOLISTIC SOLUTIONS</h3>
        <br />
        <h3 style={{ fontFamily: "Mont-Bold" }}>
          Four pillars of transformation
        </h3>
        <p>
          We drive end-to-end digital transformation in organizations with four
          interconnected digital themes
        </p>
      </div>

      <div style={{ margin: 80 }}></div>

      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "40%",
            marginRight: "5%",
            float: "left",
            display: "inline-block",
          }}
        >
          <h2 style={{ fontWeight: 700, fontFamily: "Mont-Bold" }}>
            Data Strategy & Management
          </h2>
          <br />
          <p style={{ fontSize: 20 }}>
            We assess the current status of analytics maturity, outline the
            roadmap and help you execute while managing change effectively.
          </p>
          <br />

          <p>
            <a href="../DataSM" target="_self">
              Learn more
            </a>
          </p>
        </div>

        <div
          style={{ width: "40%", float: "left", textAlign: "left" }}
          className="container"
        >
          <div className="row">
            {/*Column1*/}
            <div className="col-lg-4 px-0 col-sm-12" style={{ width: "100%" }}>
              <ul className="list" style={{ width: "100%", fontSize: 20 }}>
                <li>Data Strategy & Transformation Master</li>
                <li>Master Data Management</li>
                <li>Data Governance</li>
                <li>Data Quality</li>
                <li>Data Modelling </li>
                <li>Change Data Capture (CDC)</li>
                <li>Data Centralization</li>
                <li>Data Migration</li>
                <li>Data Lake & DWH</li>
                <li>ETL/ELT</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ width: "10%", float: "left", display: "inline-block" }}>
          <img style={{ maxWidth: "90%" }} src={Datasm} />
        </div>
      </div>

      <div style={{ margin: 80 }}></div>

      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "40%",
            marginRight: "5%",
            float: "left",
            display: "inline-block",
          }}
        >
          <h2
            style={{ fontWeight: 700, fontSize: 28, fontFamily: "Mont-Bold" }}
          >
            Cognitive Analytics & AI
          </h2>
          <br />
          <p style={{ fontSize: 20 }}>
            We guide you to conduct deep-dive analysis and develop solutions
            from data validation to insight extraction with a combination of
            artificial intelligence and advanced analytics.
          </p>
          <br />

          <p>
            <a href="../cognnitiveA">Learn more</a>
          </p>
        </div>

        <div
          style={{ width: "40%", float: "left", textAlign: "left" }}
          className="container"
        >
          <div className="row">
            {/*Column1*/}
            <div className="col-lg-4 px-0 col-sm-12" style={{ width: "100%" }}>
              <ul className="list" style={{ width: "100%", fontSize: 20 }}>
                <li>Predictive Modelling</li>
                <li>Prescriptive Modelling</li>
                <li>Optimization & Simulations</li>
                <li>Cognitive Modelling</li>
                <li>Data Migration Data Lake & DWH</li>
                <li>Text Mining</li>
                <li>Nature Language Processing</li>
                <li>Model Inspection & Root Cause Inferences</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>MLOps</li>
                <li>Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ width: "10%", float: "left", display: "inline-block" }}>
          <img style={{ maxWidth: "90%" }} src={CognitiveAI} />
        </div>
      </div>

      <div style={{ margin: 80 }}></div>

      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "40%",
            marginRight: "5%",
            float: "left",
            display: "inline-block",
          }}
        >
          <h2
            style={{ fontWeight: 700, fontSize: 28, fontFamily: "Mont-Bold" }}
          >
            Cloud & Digital Transformation
          </h2>
          <br />
          <p style={{ fontSize: 20 }}>
            We help you to enable cloud technologies thru the best architectural
            principles. Our approach involves end-to-end cloud migration of your
            enterprise. We adopt your applications, data, analytics processes to
            be run on cloud.
          </p>
          <br />
          <p>
            <a href="../cloudDigital">Learn more</a>
          </p>
        </div>

        <div
          style={{ width: "40%", float: "left", textAlign: "left" }}
          className="container"
        >
          <div className="row">
            {/*Column1*/}
            <div className="col-lg-4 px-0 col-sm-12" style={{ width: "100%" }}>
              <ul className="list" style={{ width: "100%", fontSize: 20 }}>
                <li>Cloud assesment and readiness analysis</li>
                <li>Cloud transformation and migration</li>
                <li>Application Containerization</li>
                <li>Integration Services</li>
                <li>API and Business Process Management</li>
                <li>Agile Software Development</li>
                <li>Image Processing</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ width: "10%", float: "left", display: "inline-block" }}>
          <img style={{ maxWidth: "110%" }} src={DigitalTransform} />
        </div>
      </div>

      <div style={{ margin: 80 }}></div>

      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "40%",
            marginRight: "5%",
            float: "left",
            display: "inline-block",
          }}
        >
          <h2
            style={{ fontWeight: 700, fontSize: 28, fontFamily: "Mont-Bold" }}
          >
            Change Management
          </h2>
          <br />
          <p style={{ fontSize: 20 }}>
            After years of change management experience and adoption of
            cutting-edge technologies, our team developed Datamind Framework to
            enable change and get ahead in the competition.
          </p>
          <br />

          <p>
            <a href="../ChangeManagment">Learn more</a>
          </p>
        </div>

        <div
          style={{ width: "40%", float: "left", textAlign: "left" }}
          className="container"
        >
          <div className="row">
            {/*Column1*/}
            <div
              className="col-lg-4 px-0 col-sm-12"
              style={{ width: "100%", fontSize: 20 }}
            >
              <ul className="list" style={{ width: "100%" }}>
                <li>Cloud assesment and readiness analysis</li>
                <li>Cloud transformation and migration</li>
                <li>Application Containerization</li>
                <li>Integration Services</li>
                <li>API and Business Process Management</li>
                <li>Agile Software Development</li>
                <li>Image Processing</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ width: "10%", float: "left", display: "inline-block" }}>
          <img style={{ maxWidth: "110%" }} src={changeManagement} />
        </div>
      </div>
    </main>
  );
}

export default OurServices;
