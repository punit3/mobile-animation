import { React, useEffect, useState } from "react";
import {
  BarsNavigationBar,
  SalaryNavigationBar,
} from "../components/BarsNavigationBar";
import { BankStatusBar } from "../components/BarsStatusBar";
import { motion } from "framer-motion";
import { Group } from "../components/Group";
import "./style.css";
import { FooterSlider } from "../components/FooterSlider";
import { GroupWrapper } from "../components/BottomSlider.js/GroupWrapper";
import { DivWrapper } from "../components/BottomSlider.js/DivWrapper";
// import { SalaryStatusBar } from "../../components/BarsStatusBar/SalaryStatusBar";
// import {motion } from "framer-motion"

export const SalaryCard = (props) => {
  // console.log("props",props)
  const [showCard, setShowCard] = useState(true);
  const [scrollValue,setScrollValue]=useState(0)
  const handleOnTouchStart = () => {
    // debugger
    setShowCard(false);
    // console.log("touch")
  };

  useEffect(()=>{
    handleScrollValue(props.scrollValue)

  },[props.scrollValue])

  const handleScrollValue=(value)=>{
    // console.log("handle---",value)
    if(value==340){
      setScrollValue(-80)
    }else if(value==410){
      setScrollValue(0)
    }
  }

  const handleOnTouchEnd = () => {
    setShowCard(true);
    // console.log("end")
  };
// console.log("scroll value",scrollValue)
  return (
    <>
      <BankStatusBar className="design-component-instance-node" />
      <SalaryNavigationBar
        className="design-component-instance-node"
        hasEllipse={false}
        text="Salary card"
        scrollValue={scrollValue}
      />
      <img
        className="arrow"
        alt="Arrow"
        src="https://c.animaapp.com/Hg1gzQz1/img/arrow-1.svg"
      />
      <motion.div
          animate={{ rotate: 0, y: scrollValue, scale: 1 }}
          // initial={{ rotate: -45, y: 80, x: 0, scale: 1 }}
          // transition={{ ease: "easeInOut" }}
          transition={{
            // y: {  type: "tween", stiffness: 100 },
            ease: "easeInOut",
            duration: 1,
            // delay: 0.2,
          }}
          >
        <motion.div
          animate={{ rotate: 0, y: 0, scale: 1 }}
          initial={{ rotate: -45, y: 80, x: 0, scale: 1 }}
          // transition={{ ease: "easeInOut" }}
          transition={{
            // y: {  type: "tween", stiffness: 100 },
            ease: "easeInOut",
            duration: 1,
            // delay: 0.2,
          }}
          className="overlap-group-wrapper"
        >
          {showCard ? (
            <div
              className="overlap-3"
              onMouseDown={handleOnTouchStart}
              onMouseUp={handleOnTouchEnd}
            >
              <div className="text-wrapper-10">CB</div>
              <div className="text-wrapper-11">Universal Bank</div>
              <img
                className="line-3"
                alt="Line"
                src="https://c.animaapp.com/Hg1gzQz1/img/line-2.svg"
              />
              <div className="rectangle" />
              <div className="group-4" />
              <div className="text-wrapper-12">5489 7452 5726 9827</div>
              <div className="text-wrapper-13">04/24</div>
              <img
                className="mc-vrt-rev"
                alt="Mc vrt rev"
                src="https://c.animaapp.com/Hg1gzQz1/img/mc-vrt-rev-1.svg"
              />
            </div>
          ) : (
            <div
              onMouseDown={handleOnTouchStart}
              onMouseUp={handleOnTouchEnd}
              className="overlap-2-back"
            >
              <div className="rectangle-back" />
              <div className="overlap-group-3">
                <div className="text-wrapper-10-back">123</div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="share-wrapper">
          <img
            className="share"
            alt="Share"
            src="https://c.animaapp.com/8LSmVXgi/img/share-1-1.svg"
          />
        </div>
        <div className="img-wrapper">
          <img
            className="share"
            alt="Share"
            src="https://c.animaapp.com/8LSmVXgi/img/share-1.svg"
          />
        </div>
        <div className="group-5">
          <div className="text-wrapper-14">Balance</div>
          <div className="text-wrapper-15">$2,748.00</div>
        </div>
      </motion.div>
      {/* <FooterSlider/> */}
    </>
  );
};
