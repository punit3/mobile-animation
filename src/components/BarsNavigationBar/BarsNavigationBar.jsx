/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { AnimatePresence, motion, useScroll } from "framer-motion";

export const BarsNavigationBar = ({ className }) => {
  return (
    <motion.div initial="hidden"
    // whileInView="visible"
    // hidden={{opacity:1}}
    
    transition={{ duration: 0.2 }}
    // variants={{
    //   visible: { opacity: 1, scale: 1 },
    //   hidden: { opacity: 0, scale: 0 }
    // }} 
     animate="visible" className={`bars-navigation-bar ${className}`}>
      <div className="large-title">Bank Cards</div>
      <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.png" />
    </motion.div>
  );
};
