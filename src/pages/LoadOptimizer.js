import "../styles/App.css";
import React from "react";
import Basliklar from "../components/basliklar";
import loadlogo from "../images/loadlogo.svg";
import group_load from "../images/group_load.svg";
import phone from "../images/phone.svg";

function LoadOptimizer() {
  return (
    <main>
      <div style={{ margin: 200 }}></div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "60%", float: "left" }}>
          <h2 style={{ fontFamily: "Mont-bold", color: "#285EA4" }}>Company</h2>
          <br></br>
          <h4 style={{ fontFamily: "Mont", color: "#285EA4" }}>
            Cargo loading plans are created manually, which prevents efficient
            use of aircraft capacity.
          </h4>
          <ul style={{ fontSize: "25px", fontFamily: "Mont" }}>
            <li>
              Presenting a report inluding techical information about aircraft
              after loading process.
            </li>
            <li>Adding/Deleting pallet information on one screen.</li>
            <li>Manually assigning a pallet to a desired location/region.</li>
            <li>Changing pallet positions.</li>
            <li>Stating special cases to pallets.</li>
            <li>Compatible with different aircraft types.</li>
            <li>Visualization of loading process outputs.</li>
            <li>Accessibility to previous loadings.</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "25%",
            float: "right",
            marginTop: "125px",
          }}
        >
          <img style={{ float: "left", marginTop: 12 }} src={loadlogo} />
        </div>
      </div>

      <div style={{ height: "75px", width: "100%" }}>
        <img
          style={{ marginTop: "125px", marginLeft: "220px" }}
          src={group_load}
        />
      </div>

      <div>
        <img style={{ marginTop: "470px", marginLeft: "120px" }} src={phone} />
      </div>

      <div style={{ margin: 200 }}></div>
      <Basliklar text="Sustainability Impact - Social" width={1400} />
      <div style={{ margin: 40 }}></div>
      <p style={{ fontSize: 20 }}>
        The proposed DSS optimizes the total load of the flight, allowing more
        load to be transported in a more balanced way. Better load balance leads
        to lower fuel consumption and decreased transportation costs.
      </p>
      <div style={{ margin: 40 }}></div>
      {/* <div className="ücl">
                <div className="row">
                        <div className="col-4">
                    </div>
                        <div className="col-4">
                    </div>
                        <div className="col-4">
                    </div>
                </div>
            </div> */}

      <div style={{ margin: 200 }}></div>
    </main>
  );
}
export default LoadOptimizer;
