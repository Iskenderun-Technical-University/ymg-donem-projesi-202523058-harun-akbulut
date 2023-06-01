import React from "react";
import "../styles/footer.css";
import letsTalk from "../images/letsTalk.svg";
function Footer(props) {
  const phoneVisib = props.phoneVisib;
  {
    /*
  
  GET IN TOUCH
Let’s talk
With our expert team in data and business in outstanding research and execution skills, we help you transform your business with tailored analytics services and products. Get in touch with us! We will contact you in 24 hours!
  */
  }
  return (
    <>
      <div style={{ margin: 100 }}></div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-sm-3 d-flex">
            <img src={letsTalk} alt="" />
          </div>
          <div className="col-sm-9">
            <p style={{ width: "100%", fontSize: "22px" }}>GET IN TOUCH</p>
            <h2 style={{ width: "100%", fontFamily: "Mont-bold" }}>
              Let’s talk
            </h2>
            <p style={{ width: "100%", fontSize: "20px" }}>
              With our expert team in data and business in outstanding research
              and execution skills, we help you transform your business with
              tailored analytics services and products. Get in touch with us! We
              will contact you in 24 hours!
            </p>
          </div>
        </div>
      </div>
      <div style={{ margin: 40 }}></div>

      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/*Column1*/}
            <div className="col-lg-4 px-0 col-sm-12">
              <h4 className="fhc" style={{ fontFamily: "Mont-bold" }}>
                Services
              </h4>

              <ul className="list-unstyled">
                <li>Data Strategy & Management</li>
                <li>Cognitive Analytics & Al</li>
                <li>Digital Transformation</li>
                <li>Change Management</li>
              </ul>
            </div>
            {/*Column2*/}
            <div className="col-lg-3 px-0 col-sm-12">
              <h4 className="fhc" style={{ fontFamily: "Mont-bold" }}>
                Industries
              </h4>

              <ul className="list-unstyled">
                <li>Consumer Goods</li>
                <li>Insurance</li>
                <li>Logistic</li>
                <li>Manufacturing</li>
              </ul>
            </div>

            {/*Column3*/}
            <div className="col-lg-3 px-0 col-sm-12">
              <h4 className="fhc" style={{ fontFamily: "Mont-bold" }}>
                Product
              </h4>
              <ul className="list-unstyled">
                <li>Sales & Marketing Analytic</li>
                <li>Production & Operation</li>
                <li>Risk & Operation</li>
              </ul>
            </div>
            {/*Column4*/}
            <div className="col-lg-2 px-0 col-sm-12">
              <h4 className="fhc" style={{ fontFamily: "Mont-bold" }}>
                About
              </h4>

              <ul className="list-unstyled">
                <li>Company & Team</li>
                <li>Case Studies</li>
                <li>Featured Insights</li>
                <li>Term & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div style={{ margin: 30 }}></div>
            <div className="container d-flex justify-content-center align-items-center">
              <ul className="row  d-flex w-100 justify-content-center align-items-center list-unstyled ">
                <li
                  className="col-sm-4"
                  style={{
                    marginTop: "2%",
                    paddingLeft: "0.05%",
                    alignItems: "center",
                  }}
                >
                  <a className="footer" href="" style={{ color: "#285EA4" }}>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.8983 40.8989H33.7862V29.7609C33.7862 27.1049 33.7388 23.6859 30.0872 23.6859C26.3829 23.6859 25.8161 26.5797 25.8161 29.5676V40.8982H18.7043V17.9939H25.5317V21.1241H25.6273C26.3106 19.9557 27.2979 18.9946 28.4842 18.3431C29.6705 17.6915 31.0113 17.3739 32.3638 17.4241C39.5723 17.4241 40.9013 22.1656 40.9013 28.334L40.8983 40.8989ZM10.6793 14.8632C8.39981 14.8636 6.55162 13.016 6.55125 10.7366C6.55087 8.45712 8.39831 6.60893 10.6777 6.60856C12.9572 6.60799 14.8054 8.45562 14.8057 10.7351C14.8059 11.8297 14.3713 12.8796 13.5974 13.6537C12.8236 14.4279 11.7739 14.863 10.6793 14.8632ZM14.2354 40.8991H7.11581V17.9939H14.2352V40.8989L14.2354 40.8991ZM44.4439 0.00349348H3.54206C1.60894 -0.0182565 0.023625 1.53031 0 3.46343V44.5359C0.022875 46.4699 1.608 48.02 3.54187 47.9997H44.4439C46.3819 48.0237 47.9732 46.4737 48 44.5359V3.46024C47.9724 1.52337 46.3809 -0.0250065 44.4439 0.00030598"
                        fill="#285EA4"
                      />
                    </svg>
                    <a
                      href="https://www.linkedin.com/in/harun-akbulut-947663247/"
                      style={{ color: "#285EA4" }}
                      target="_blank"
                    >
                      <span style={{ padding: "2%" }}>LinkedIn</span>
                    </a>
                  </a>
                </li>
                <li
                  className="col-sm-4 d-inline-block justify-content-center"
                  style={{ marginTop: "2%", paddingLeft: "0.05%" }}
                >
                  ©️ 2022 Datamind
                </li>
                <li
                  className="col-sm-4 d-inline-block justify-content-center"
                  style={{ marginTop: "2%", paddingLeft: "0.05%" }}
                >
                  <a href="" style={{ color: "#285EA4" }}>
                    <svg
                      width="44"
                      height="48"
                      viewBox="0 0 44 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.4 4.8H36V0H31.2V4.8H12V0H7.2V4.8H4.8C3.52696 4.8 2.30606 5.30571 1.40589 6.20589C0.505713 7.10606 0 8.32696 0 9.6V43.2C0 44.473 0.505713 45.6939 1.40589 46.5941C2.30606 47.4943 3.52696 48 4.8 48H38.4C41.04 48 43.2 45.84 43.2 43.2V9.6C43.2 6.96 41.04 4.8 38.4 4.8ZM21.6 12C25.584 12 28.8 15.216 28.8 19.2C28.8 23.184 25.584 26.4 21.6 26.4C17.616 26.4 14.4 23.184 14.4 19.2C14.4 15.216 17.616 12 21.6 12ZM36 40.8H7.2V38.4C7.2 33.6 16.8 30.96 21.6 30.96C26.4 30.96 36 33.6 36 38.4V40.8Z"
                        fill="#285EA4"
                      />
                    </svg>
                    <span style={{ padding: "2%" }}>Contact US</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: 40 }}></div>
    </>
  );
}

export default Footer;
