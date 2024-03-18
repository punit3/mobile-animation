import React from "react";
// import "./style.css";



export const GroupWrapper = ({ className, divClassName, text = "+ $143.00" }) => {
  return (
    <div className={`group-wrapper ${className}`}>
      <div className={`element-2 ${divClassName}`}>{text}</div>
      <div className="vector-wrapper">
        <img className="vector" alt="Vector" src="https://c.animaapp.com/Ayccic91/img/vector-3.svg" />
      </div>
      <div className="group-2-slider">
        <div className="text-wrapper-2">Card to card</div>
        <div className="text-wrapper-3">Maria</div>
      </div>
      <img className="img" alt="Line" src="https://c.animaapp.com/Ayccic91/img/line-1-10.svg" />
    </div>
  );
};