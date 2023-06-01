import React from "react";
import "../styles/App.css";
import "../styles/Ustimage.css";

function UstImage(props) {
  const text = props.text;
  const image = props.image;

  return (
    <div className="divS">
      <img className="Image" src={image} alt="" />
      <p className="Text">{text}</p>
    </div>
  );
}
export default UstImage;
