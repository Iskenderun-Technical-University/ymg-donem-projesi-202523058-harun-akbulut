//altı mor olan başlıkların componentsi
import React, { useState } from "react";
import "../styles/basliklar.css";


function Basliklar(props) {
  const text = props.text;
  const width = props.width;
  const [size, setSize]  = useState(48);

  const ayar = (text) =>{
    //11 altı olmalı!!! => 
    var count= 0;
    const arr = text.split(' ');
    for (let index = 0; index <= arr.length; index++) {
      var  a = arr[index];
      if(a.length<=11){
        setSize(0);
      }
    }

  }

// 11 tane gelebiliyor max
  return (
    <div className="container-fluid"
      style={{
        wordWrap:"break-word" ,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: '4%',
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <div className="row deneme">
        
        
        <div className="col-sm-12 d-flex justify-content-center text-wrap" style={{marginLeft: '1%'}}> <h2
          className="col-sm-12 text-wrap"
          style={{
            wordBreak:"inherit",
            margin: 10,
            fontSize: size,
            width: width,
            maxWidth: "100%",
            fontFamily: "Mont-bold",
          }}
        >
          {text}
        </h2>{" "}</div>
          <div className="col-sm-12 d-flex justify-content-center " style={{marginLeft: '1%'}}>{/*buraya başlık gelecek*/}
        <hr className="col-sm-12 line" style={{ width: width, maxWidth: "100%" }} />{" "}
        {/* başlığın altındaki çizgi */}</div>
        
      </div>
    </div>
  );
}

export default Basliklar;
