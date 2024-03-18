import React from "react";
import "./salary.css";
import { motion } from "framer-motion";

export const SalaryNavigationBar = ({
  className,
  text = "Bank Cards",
  hasEllipse = true,
  scrollValue
}) => {
  console.log("from nav",scrollValue)
  return (
    <div
      
      className={`bars-navigation-bar ${className}`}
    >
<motion.div
      initial="hidden"
      // whileInView="visible"
      // hidden={{opacity:1}}

      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1 },
      }}
      animate={scrollValue==0?"visible":"hidden"}>
      <div className="large-title">{text}</div>
      {hasEllipse && (
        <img
          className="ellipse"
          alt="Ellipse"
          src="https://c.animaapp.com/Hg1gzQz1/img/ellipse-1@2x.png"
        />
      )}
      </motion.div>
      
      
      <motion.div
        initial="hidden"
        // whileInView="visible"
        // hidden={{opacity:1}}

        transition={{ duration: 1, ease: "easeInOut" }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1 },
        }}
        animate={scrollValue!=0?"visible":"hidden"}
        className="title"
      >
        Salary card
      </motion.div>
      {/* </div> */}
    </div>
  );
};
