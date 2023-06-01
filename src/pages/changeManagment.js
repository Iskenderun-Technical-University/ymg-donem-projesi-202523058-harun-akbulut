import "../styles/App.css";
import React from "react";
import Paragraph from "../components/paragraph";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import changeManagement from "../images/changeManagement.svg";

function ChangeManagment() {
  return (
    <main className="div1">
      <div style={{ margin: 100 }}></div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <h1 style={{ fontFamily: "Mont-Bold", color: "#F98E4A" }}>
              Change Management{" "}
            </h1>
            <br />
            <br />
            <p style={{ fontWeight: 600, fontSize: 20 }}>
              After years of change management experience and adoption of
              cutting-edge technologies, our team developed Datamind Framework
              to enable change and get ahead in the competition.
            </p>
            <br />
            <p
              style={{ fontWeight: 600, fontSize: 20, fontFamily: "Mont-Bold" }}
            >
              We collaborate with you to understand the nature of your business
              and unique challenges and bring your organization innovative
              solutions delivered across multiple technologies, platforms,
              devices and models.
            </p>
            <br />
            <p style={{ fontWeight: 600, fontSize: 20 }}>
              We help clients run smart organization across all business stages!
              Crafting an effective and sustainable data strategy, implement a
              data governance methodology, digital transformation and automation
              of business functions,
            </p>
            <br />
            <p>
              <a href="" target="_self">
                Organize a Data Sprint{" "}
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 d-flex">
            <img
              style={{
                marginLeft: "40%",
                marginTop: "15px",
                height: "80%",
                width: "70%s",
              }}
              src={changeManagement}
            />
          </div>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ marginRight: "6%", width: "100%", marginTop: 100 }}>
          <Paragraph
            float1="left"
            header="Ideation & Design Sprint 5-Days"
            text="Using data and machine learning algorithms, we simulate the consequences of risk before events happen, 
                 so you know the most efficient way to prepare and manage what the future might hold.
                "
            text0=" simulate the consequences of risk before events happen, so you know the most efficient way to prepare and 
                 manage what the future might hold."
            text1=" simulate the consequences of risk before events happen, so you know the most efficient way to prepare and 
                 manage what the future might hold. (NEED CONTENT)"
            width1="100%"
          />
        </div>
      </div>

      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ marginRight: "6%", width: "100%", marginTop: 100 }}>
          <Paragraph
            float1="left"
            header="Data Design Sprint 10-Days"
            text="Using data and machine learning algorithms, we simulate the consequences of risk before events happen, 
           so you know the most efficient way to prepare and manage what the future might hold.
          "
            text0=" simulate the consequences of risk before events happen, so you know the most efficient way to prepare and 
           manage what the future might hold."
            text1=" simulate the consequences of risk before events happen, so you know the most efficient way to prepare and 
           manage what the future might hold. (NEED CONTENT)"
            width1="100%"
          />
        </div>
      </div>

      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ marginRight: "6%", width: "100%", marginTop: 100 }}>
          <Paragraph
            float1="left"
            header="Analytics Factory 6 Months"
            text="Using data and machine learning algorithms, we simulate the consequences of risk before events happen, 
              so you know the most efficient way to prepare and manage what the future might hold.
             "
            text0=" simulate the consequences of risk before events happen, so you know the most efficient way to prepare and 
              manage what the future might hold."
            text1=" simulate the consequences of risk before events happen, so you know the most efficient way to prepare and 
              manage what the future might hold. (NEED CONTENT)"
            width1="100%"
          />
        </div>
      </div>
      <div style={{ margin: 200 }}></div>
    </main>
  );
}
export default ChangeManagment;
