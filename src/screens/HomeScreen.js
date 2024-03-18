import React, { useState } from "react";
import {
  BarsNavigationBar,
  SalaryNavigationBar,
} from "../components/BarsNavigationBar";
import { BankStatusBar } from "../components/BarsStatusBar";
import { motion } from "framer-motion";
import { Group } from "../components/Group";
import "./style.css";
import { Footer } from "../components/Footer";
import { BankCards } from "./BankCards";
// import { SalaryCard } from "../components/SalaryCard";
import { SalaryCard } from "./SalaryCard";
import { FooterSlider } from "../components/FooterSlider";
import { BottomSlider } from "../components/BottomSlider.js";
import { History } from "./History";
// import { SalaryStatusBar } from "../../components/BarsStatusBar/SalaryStatusBar";
// import {motion } from "framer-motion"

export const HomeScreen = (props) => {
  const [salaryCard, setSalaryCard] = useState(true);
  const [scrollValue,setScrollValue]=useState(0)
  const handleSelectCard = () => {
    setTimeout(() => {
      setSalaryCard(true);
    }, 200);
  };

  const handleMenu=(value)=>{
    console.log("values",value)
    setScrollValue(value)
  }
  return (
    <>
      <div className="bank-cards">
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="BG">
              <div className="overlap-group-2">
                <div className="ellipse-2" />
                <div className="ellipse-3" />
              </div>
              <div className="ellipse-4" />
            </div>

            <BankStatusBar className="design-component-instance-node" />
            {!salaryCard ? (
            <BankCards handleSelectCard={handleSelectCard} />
          ) : (
            <SalaryCard scrollValue={scrollValue}/>
          )}
          {salaryCard ? <BottomSlider handleMenu={handleMenu}/> : <Footer handleMenu={(value)=>props.handleMenu(value)}/>}
         
          </div>
        </div>
      </div>
    </>
  );
};
