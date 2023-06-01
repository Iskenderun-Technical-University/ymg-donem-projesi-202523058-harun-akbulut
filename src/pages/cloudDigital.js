import "../styles/App.css";
import React from "react";
import ikiInsan from "../images/Vector.png";
import Paragraph from "../components/paragraph";
import CloudDT from "../images/CloudDT.svg";

function CloudDigital() {
  return (
    <main className="div1">
      <div style={{ margin: 100 }}></div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <h1 style={{ fontFamily: "Mont-Bold", color: "#F98E4A" }}>
              Cloud&DigitalTransformation{" "}
            </h1>
            <br />
            <br />
            <br />
            <p
              style={{ fontWeight: 600, fontSize: 20, fontFamily: "Mont-Bold" }}
            >
              We help you adopt the latest technologies to deliver value across
              your organization. Our tailored solutions cover end-to-end needs
              in cloud transformation, including digital strategy, migrating
              applications development of algorithms and adoption of IoT, AI
              applications in organization.
            </p>
            <br />
            <p style={{ fontWeight: 600, fontSize: 20 }}>
              Our team developed a unique and validated framework to manage
              change while carrying out transformation activities in your
              organisation across all stages of transformation including cloud,
              processes, business model, domain and cultural/ organization
              transformation. Let's start by assessing your organization's
              maturity and readiness for digital transformation and adaptability
              of AI services at scale to design a custom roadmap.
            </p>
            <br />
            <p>
              <a href="" target="_self">
                Deploy Advanced Analytics at Scale
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 d-flex">
            <img
              style={{
                marginLeft: "40%",
                marginTop: "15px",
                height: "60%",
                width: "70%s",
              }}
              src={CloudDT}
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
              header="Business Process Management (BPM) Cloud"
              text="

          BPM is the standardization and management of business processes instead of tasks or functions and helps the management team to execute processes to align with customer demands and make the best use of company resources by monitoring, deploying and measuring. Organizations which can adopt a culture of continuous improvement and high productivity and efficiency in the organization. "
              width1="100%"
            />{" "}
          </div>
          <div
            className="col-sm-12 col-lg-6 d-flex text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Application Containerization"
              text="

                Containerization supports DevOps and drives efficiency in the utilization of computing resources. It enables rapid deployment, easy transfer and communication between different systems such as cloud and local servers, maintaining security, performance and sustainability. "
              width1="100%"
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
              header="Integration Services"
              text="

          Integration of services allows organizations to simplify their data architecture and utilize their existing resources and infrastructure. We offer tailored and customized integration services with professional technical support to help you make the most out of your current infrastructure.  "
              width1="100%"
            />{" "}
          </div>
          <div
            className="col-sm-12 col-lg-6 d-flex text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="API Management"
              text="

                Leveraging technologies like Azure, our team offers multi-cloud API management to secure, distribute and maintain APIs that connect different applications.  "
              width1="100%"
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
              header="Agile Software Development"
              text="

          In digital transformation, it is often necessary to develop analytics software, deploy analytics solutions and distribute them via devices such as tablets and mobile phones. We offer tailored software development services to support end-to-end digital transformation and analytics products with an agile team of software developers and scrum masters to handle complexity and vague scope without compromising quality.  "
              width1="100%"
            />{" "}
          </div>
          <div
            className="col-sm-12 col-lg-6 d-flex text-wrap"
            style={{ marginTop: 100 }}
          >
            <Paragraph
              float1="left"
              header="Image Process"
              text="

                Increasing performance and availability of advanced deep learning algorithms enabled image processing to deploy and increase workplace safety to automate quality control. From quality control in production to maintaining workplace safety and monitoring productivity at a mining site, image processing is invaluable to businesses. "
              width1="100%"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default CloudDigital;
