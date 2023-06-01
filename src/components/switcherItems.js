import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";

function SwitcherItems(props) {
  const image = props.image;
  const text = props.text;
  const headItem = props.headItem;

  {
    /*
      font-family: Mont;
font-size: 16px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
      */
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "90%",
        float: "left",
        marginRight: "10%",
      }}
    >
      <div style={{ float: "left", width: "25%", marginRight: "5%" }}>
        <img style={{ width: "100%" }} src={image} />
      </div>
      <div style={{ float: "left", width: "70%" }}>
        <h4
          className=""
          style={{
            width: "100%",
            marginRight: "25%",
            fontFamily: "Mont-bold",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 0,
            textAlign: "left",
          }}
        >
          {headItem}
        </h4>
        <p style={{ width: "100%" }}>{text}</p>
      </div>
    </div>
  );
}
export default SwitcherItems;
