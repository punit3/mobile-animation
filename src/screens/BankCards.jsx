import React from "react";
import {
  BarsNavigationBar,
  SalaryNavigationBar,
} from "../components/BarsNavigationBar";
import { BankStatusBar } from "../components/BarsStatusBar";
import { motion } from "framer-motion";
import { Group } from "../components/Group";
import "./style.css";
// import { SalaryStatusBar } from "../../components/BarsStatusBar/SalaryStatusBar";
// import {motion } from "framer-motion"

export const BankCards = (props) => {
  const handleSelectCard = () => {};
  return (
    <>
      {/* <BankStatusBar className="design-component-instance-node" /> */}
      <BarsNavigationBar
        className="design-component-instance-node"
        hasEllipse={false}
        text="Salary card"
      />

      <div className="text-wrapper-5">Balance</div>
      <div className="text-wrapper-6">$2,748.00</div>

      <Group handleSelectCard={()=>props.handleSelectCard()} className="group-8" />
    </>
  );
};
