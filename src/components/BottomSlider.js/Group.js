import PropTypes from "prop-types";
import React from "react";
// import { Car13 } from "../../icons/Car13";
// import "./style.css";

export const Group = ({
  className,
  divClassName,
  text = "- $467.00",
  iconClassName,
//   icon = <Car13 className="car" color="white" />,
  groupClassName,
  text1 = "Uber",
  lineClassName,
  line = "https://c.animaapp.com/Ayccic91/img/line-1-10.svg",
}) => {
  return (
    <div className={`group-slider ${className}`}>
      <div className={`element ${divClassName}`}>{text}</div>
      <div className={`car-wrapper`}>
        <img className="car" src="/img/car.svg"/>
      </div>
      <div className={`div ${groupClassName}`}>
        <div className="uber">{text1}</div>
        <div className="text-wrapper">Service</div>
      </div>
      <img className={`line ${lineClassName}`} alt="Line" src={line} />
    </div>
  );
};