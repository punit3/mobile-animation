import React from "react";
// import { Car11 } from "../../icons/Car11";
// import "./style.css";
import { BarsNavigationBar } from "./BarsNavigationBar";
// import { BarsStatusBar } from "./BarsStatusBar";
import { motion } from "framer-motion";
import { Group } from "./Group";
import { Card } from "./Cards";
import { FooterSlider } from "./FooterSlider";

export const SalaryCard = () => {
  return (
    <>
  
      <BarsNavigationBar
        className="design-component-instance-node"
        hasEllipse={false}
        text="Salary card"
      />
     
      <img
        className="arrow"
        alt="Arrow"
        src="https://c.animaapp.com/Hg1gzQz1/img/arrow-1.svg"
      />
      <Card />
    
      <div className="group-5">
        <div className="text-wrapper-14">Balance</div>
        <div className="text-wrapper-15">$2,748.00</div>
      </div>
      <div className="share-wrapper">
        <img
          className="share"
          alt="Share"
          src="https://c.animaapp.com/Hg1gzQz1/img/share-1-1.svg"
        />
      </div>
      <div className="img-wrapper">
        <img
          className="share"
          alt="Share"
          src="https://c.animaapp.com/Hg1gzQz1/img/share-1.svg"
        />
      </div>
      {/* <FooterSlider /> */}

      <div className="group-6">
        <div className="overlap-3">
          <div className={`group group-instance`}>
            <div className="text-wrapper">- $467.00</div>
            <div className="car-wrapper">
              {/* <Car11 className="car" color="white" /> */}
            </div>
            <div className="div">
              <div className="text-wrapper-2">Uber</div>
              <div className="text-wrapper-3">Service</div>
            </div>
            <img
              className="line"
              alt="Line"
              src="https://c.animaapp.com/Hg1gzQz1/img/line-1-5.svg"
            />
          </div>
          <div className="rectangle-2" />
          <div className="text-wrapper-16">Today</div>

          <div className={`group-wrapper group-2-instance`}>
            <div className="text-wrapper-4">+ $143.00</div>
            <div className="vector-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/Hg1gzQz1/img/vector-1.svg"
              />
            </div>
            <div className="group-2">
              <div className="text-wrapper-5">Card to card</div>
              <div className="text-wrapper-6">Maria</div>
            </div>
            <img
              className="img"
              alt="Line"
              src="https://c.animaapp.com/Hg1gzQz1/img/line-1-5.svg"
            />
          </div>
          {/* <DivWrapper className="group-3-instance" /> */}
        </div>
      </div>
      {/* //     </div>
  //   </div>
  // </div> */}
    </>
  );
};
