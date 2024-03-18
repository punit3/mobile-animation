
import React from "react";
// import { Telephone } from "../Telephone";
// import "./style.css";
import { Telephone } from "../screens/Catalogue";

export const CatalogueGroup = ({
  className,
  override = <Telephone className="telephone-1" />,
  text = "Mobile",
  text1 = "$34.00",
  overlapGroupClassName,
  divClassName,
}) => {
  return (
    <div className={`group-cat ${className}`}>
      <div className="telephone-wrapper">{override}</div>
      <div className="div">
        <div className="mobile">{text}</div>
        <div className="overlap-group-wrapper">
          <div className={`div-wrapper ${overlapGroupClassName}`}>
            <div className={`text-wrapper-cat ${divClassName}`}>Pay</div>
          </div>
        </div>
        <p className="the-debt-is">
          <span className="span">The debt is </span>
          <span className="text-wrapper-2-catalogue">{text1}</span>
        </p>
      </div>
      <img className="line" alt="Line" src="https://c.animaapp.com/8xBMwLzx/img/line-1-5.svg" />
      <img className="img" alt="Line" src="https://c.animaapp.com/8xBMwLzx/img/line-2-5.svg" />
    </div>
  );
};
