import "../styles/App.css";
import "../styles/fmcg.css";
import React from "react";
import Dynamic_dortgen from "../images/Dynamic_dortgen.svg";
import Daynamiclogo from "../images/Daynamiclogo.svg";
import RawLogo from "../images/RawLogo.svg";
import Predictivelogo from "../images/Predictivelogo.svg";
import Qualitylogo from "../images/Qualitylogo.svg";
import greendortgen from "../images/greendortgen.svg";

function Manufacturing() {
  return (
    <main className="div1">
      <div style={{ margin: 100 }}></div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <h1 style={{ fontFamily: "Mont-Bold", color: "#F35181" }}>
            Forecasting{" "}
          </h1>
          <br />
          <p style={{ fontWeight: 100, fontSize: 30, fontFamily: "Mont-bold" }}>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
          </p>
          <br />
          <p style={{ fontWeight: 600, fontSize: 22 }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <br /> Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="rgm d-flex   dp">
        <div className="row">
          <div className="col-4">
            <img
              style={{ float: "left", marginTop: 12 }}
              src={Dynamic_dortgen}
            />
          </div>
          <div className="fs col-8">
            <img
              style={{ float: "left", marginTop: 12, marginRight: "10px" }}
              src={Daynamiclogo}
            />
            <span className="pnk">Dynamic Demand Forecast</span>
            <ul className="ml-5" style={{ fontSize: "24px" }}>
              <li>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li>
                {" "}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </li>
              <li>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.{" "}
              </li>
              <li>
                {" "}
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rgm d-flex   dp">
        <div className="row">
          <div className="col-4">
            <img
              style={{ float: "left", marginTop: 12 }}
              src={Dynamic_dortgen}
            />
          </div>
          <div className="fs col-8">
            <img
              style={{ float: "left", marginTop: 12, marginRight: "10px" }}
              src={RawLogo}
            />
            <span className="pnk">Raw Material Maintenance </span>
            <ul className="ml-5" style={{ fontSize: "24px" }}>
              <li>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li>
                {" "}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </li>
              <li>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.{" "}
              </li>
              <li>
                {" "}
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ margin: 100 }}></div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <h1
            style={{
              fontFamily: "Mont-Bold",
              color: "#00B18A",
              fontSize: "48px",
            }}
          >
            PMQ - Predictive Maintenance & Quality{" "}
          </h1>
          <br />
          <p style={{ fontWeight: 100, fontSize: 30, fontFamily: "Mont-bold" }}>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
          </p>
          <br />
          <p style={{ fontWeight: 600, fontSize: 22 }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <br /> Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="rgm d-flex   dp">
        <div className="row">
          <div className="col-4">
            <img style={{ float: "left", marginTop: 12 }} src={greendortgen} />
          </div>
          <div className="fs col-8">
            <img
              style={{ float: "left", marginTop: 12, marginRight: "10px" }}
              src={Predictivelogo}
            />
            <span className="grn"> Predictive Maintenance </span>
            <ul className="ml-5" style={{ fontSize: "24px" }}>
              <li>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li>
                {" "}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </li>
              <li>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.{" "}
              </li>
              <li>
                {" "}
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rgm d-flex   dp">
        <div className="row">
          <div className="col-4">
            <img style={{ float: "left", marginTop: 12 }} src={greendortgen} />
          </div>
          <div className="fs col-8">
            <img
              style={{ float: "left", marginTop: 12, marginRight: "10px" }}
              src={Qualitylogo}
            />
            <span className="grn">Predictive Quality </span>
            <ul className="ml-5" style={{ fontSize: "24px" }}>
              <li>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li>
                {" "}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </li>
              <li>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.{" "}
              </li>
              <li>
                {" "}
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Manufacturing;
