import React from "react";
import "./gender.css";
const Gender = () => {
  return (
    <div className="gender">
      <div
        className="women"
        style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg")`,
        }}
      >
        <h1 style={{textAlign:"center"}}>WOMEN'S</h1>
      </div>
      <div
        className="accessories"
        style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg")`,
        }}
      >
        <h1 style={{textAlign:"center"}}>ACCESSORIES'S</h1>
      </div>
      <div
        className="men"
        style={{
          backgroundImage: `url("	https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg")`,
        }}
      >
        <h1 style={{textAlign:"center"}}>MEN'S</h1>
      </div>
    </div>
  );
};

export default Gender;
