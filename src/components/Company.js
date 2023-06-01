import React from "react";
import "../styles/Company.css";
function Company() {
  return (
    <div className="container d-flex align-items-center">
      <div className="row">
        <div className="solyazi col-sm-12 col-lg-8 ">
          <h2 className="mb-4" style={{ fontFamily: "Mont-bold" }}>
            Company
          </h2>
          <h5 style={{ fontFamily: "Mont" }}>
            End to end services provider for all your digital, cloud
            transformation, data science and data engineering needs.
          </h5>
          <ul style={{ fontSize: "20px", fontFamily: "Mont", Weight: "600px" }}>
            <li>
              DATAMIND is a full-service digital and cloud transformation,data
              science and data engineering company.
            </li>
            <li>
              For over 15 years we've been bringing our down-to-earth,
              professional approach to creating sustainable transformative
              change to organisations.
            </li>
            <li>
              By combining our operational experience with the incredible
              possibilities offered by advanced analytics, we bring leading-edge
              thinking to uncover valuable insight from data, solve real-world
              problems and drive cultural change.
            </li>
          </ul>
        </div>
        <div className="resim col-sm-12 col-lg-4  d-flex justify-content-center">
          <svg
            style={{ marginTop: 70 }}
            width="278"
            height="235"
            viewBox="0 0 278 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_66_2398)">
              <path
                d="M138.521 216.407C189.058 216.407 236.036 221.603 275.041 230.501C236.036 212.587 189.058 202.029 138.521 202.029C87.9838 202.029 41.0059 212.492 2 230.501C41.0059 221.674 87.9601 216.407 138.521 216.407Z"
                fill="#F35181"
              />
              <path
                d="M183.601 198.161C192.269 199.221 200.827 200.613 209.273 202.337V0.5L138.521 30.1575V41.4036L183.601 22.4228V198.161Z"
                fill="#93338C"
              />
              <path
                d="M148.129 195.504C156.812 195.741 165.417 196.271 173.943 197.094V36.8721L103.215 66.5533V77.7283L148.129 58.8898V195.504Z"
                fill="#F98E4A"
              />
              <path
                d="M138.519 195.385V73.2676L67.791 102.925V202.337C91.0788 197.685 114.771 195.356 138.519 195.385Z"
                fill="#F35181"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_66_2398"
                x="0"
                y="0.5"
                width="277.041"
                height="234.001"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_66_2398"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_66_2398"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Company;
