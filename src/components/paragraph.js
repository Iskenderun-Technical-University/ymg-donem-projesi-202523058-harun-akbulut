import React from "react";
import "../styles/paragraph.css";

function Paragraph(props) {
  const text = props.text;
  const header = props.header;
  const width1 = props.width1;
  const float1 = props.float1;
  const text0 = props.text0;
  const text1 = props.text1;

  return (
    <div className="divMain4" style={{ width: width1, float: float1 }}>
      <div>
        <h1
          className="header8 "
          style={{ margin: 20, fontFamily: "Mont-bold" }}
        >
          {header}
        </h1>
        <p
          style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
          className="text"
        >
          {text}
        </p>
        <p
          style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
          className="text"
        >
          {text0}
        </p>
        <p
          style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
          className="text"
        >
          {text1}
        </p>
      </div>
    </div>
  );
}

export default Paragraph;
