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
import Paragraph from "../components/paragraph";
import { FlatTree } from "framer-motion";
import DataSM from "../images/DataSM.svg";

function DataSm() {
  return (
    <main className="div1">
      <div style={{ margin: 100 }}></div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <h1 style={{ fontFamily: "Mont-Bold", color: "#F98E4A" }}>
              Data Strategy & Management{" "}
            </h1>
            <br />
            <br />
            <p style={{ fontWeight: 600, fontSize: 20 }}>
              We assess the current status of analytics maturity, outline the
              roadmap and help you execute while managing change effectively
            </p>
            <br />
            <p
              style={{ fontWeight: 600, fontSize: 20, fontFamily: "Mont-Bold" }}
            >
              Accelerated technology and decreasing costs in storage and
              processing forced companies to realize their data assets and embed
              advanced analytics in products, processes and operations.
              Awareness and ambitious data transformation projects are not
              enough to stay ahead of the competition but to to embrace the
              disruptive future of data with an explicit roadmap and leading
              partner.
            </p>
            <br />
            <p style={{ fontWeight: 600, fontSize: 20 }}>
              In 2030, Chief Data Scientist's role will expand to generate value
              while being responsible for the governance and management of data
              today. We guide our clients to develop a data strategy that
              embraces the challenges of the future, choosing the best
              technologies and infrastructure that align with business goals and
              scaling the pilot projects through agile data sprints.
            </p>
            <br />
            <p>
              <a href="" target="_self">
                Assess Your Organization’s Data Maturity
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 d-flex">
            <img
              style={{
                marginLeft: "40%",
                marginTop: "15px",
                height: "70%",
                width: "70%s",
              }}
              src={DataSM}
            />
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="row">
          <div
            className="col-sm-12 col-lg-6 text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Data Strategy & Transformation"
              text="While it may seem a common sense, most of the organization starts 
                ambitious analytics projects such as a new data warehouse without having a 
                clear data strategy at an organizational level. Our team simply tha whole the process 
                and help you deliver value from data assets from right start. We don't only map business 
                goals the data strategy but help you with each step from figuring out the most efficient 
                data architecture to creating a data model that leads to succesful data transformation. "
              width1="100%"
            />{" "}
          </div>
          <div
            className="col-sm-12 col-lg-6 d-flex text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Master Data Management (MDM)"
              text="Multiple and confliction sources of information can be costly for an organization. 
                MDM along with data governance can create a consistent and reliable single source of truth and 
                reduce the time to respond data requests across organization. We help you to access and navigate 
                the cricitical business information regarding the entities such as suppliers, customers and employees. "
              width1="100%"
            />
          </div>

          <div
            className="col-sm-12 col-lg-6 text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Data Quality"
              text="Data Quality

          Data quality may have significant consequences from fines for improper regulatory compliance reporting to lost opportunities in sales. As a branch of overall data management and data governance, data quality assessments ensures that data is up-to-date, consistent, accurate, compliant and in comformity with organization's data models.   "
              width1="100%"
            />{" "}
          </div>
          <div
            className="col-sm-12 col-lg-6 d-flex text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Data Modelling"
              text="

                Data model of an organization can be centralized, decentralized or hybrid. A mismatch between the organization's needs and data model is one of the common obstacles to execute the data strategy and realize value from data assets. Our team assess and develop a tailored data model based on your organization's needs.  "
              width1="100%"
            />
          </div>

          <div
            className="col-sm-12 col-lg-6 text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Data Centralization"
              text="

          It's been over a decade where different business-units leveraged data based on different use case which led to discrepancies between the business units and data redundancy in the organization. Centralization of data creates a blueprint of available data sources across the organization.  "
              width1="100%"
            />{" "}
          </div>
          <div
            className="col-sm-12 col-lg-6 d-flex text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Data Migration"
              text="

                As new tehcnologies, frameworks and policies are introduced, need for data migration is inevitable. Data migration strategy aligned with overall data strategy, we help you implement steps of selection, preperation and transformation, securely backup and migrate to new sources.  "
              width1="100%"
            />
          </div>

          <div
            className="col-sm-12 col-lg-6 text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="ETL/ELT"
              text="

          Having an explicit data strategy and building an efficient architecture aligned with the priorities of the organization, what comes next is ETL/ELT processes to replicate data to the cloud warehouse for analysis.  "
              width1="100%"
            />{" "}
          </div>
          <div
            className="col-sm-12 col-lg-6 d-flex text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Data Lake & Data Warehouse (DWH)"
              text="

                Should you use a data lake or data warehouse? Storage of big data requires an architecture serves the need of the organization based on the business model. So, the answer may change if your organization rely on big data for operational users or predictive/statistical analysis.  "
              width1="100%"
            />
          </div>

          <div
            className="col-sm-12 col-lg-6 text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Data Governance"
              text="

          Beyond informing the decision making bodies, digital transformation accelarated data to be embedded in products, services and production lineages, completely transforming the way organizations do business. Data governance ensures consistent, accurate high quality data through secure and documented data lifecycle. Our team helps you set, execute and communicate data governance principles and best practices.  "
              width1="100%"
            />{" "}
          </div>
          <div
            className="col-sm-12 col-lg-6 d-flex text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Change Data Capture (CDC)"
              text="

                CDC is the process of detecting, capturing and real-time delivery of changes made to database and often used for replication and processing data from several sources. CDC enables organizations to make quickier decisions with the most recent data.  "
              width1="100%"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default DataSm;
