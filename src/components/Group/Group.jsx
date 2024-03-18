import React, { useState } from "react";
import "./group.css";
import { AnimatePresence, motion, useScroll } from "framer-motion";

export const Group = (props) => {
  const [cardNumber, setCardNumber] = useState(1);
  const [cardSelected, setCardSelected] = useState(false);
  const handleCardSlide = (value) => {
    setCardNumber(value);
  };

  const handleSelectCard = () => {
    setCardSelected(true);
    props.handleSelectCard();
  };

  return (
    <>
      <motion.div
        onClick={handleSelectCard}
        // animate={{rotate:90}}
        animate={cardNumber == 1 ? { x: 0 } : { x: -250 }}
        transition={{ ease: "easeInOut" }}
      >
        {/* <AnimatePresence> */}
          <motion.div
            key="card"
            // exit={{ opacity: 1 }}
            animate={
              cardSelected
                ? { rotate: 0, y: -150, scale: 1, x: 20, opacity: 1 }
                : ""
            }
            initial={{ rotate: -90, y: 0, scale: 1 }}
            // // transition={{ ease: "easeInOut" }}
            transition={{
              // y: {  type: "tween", stiffness: 100 },
              ease: "easeInOut",
              duration: 0.5,
              // delay: 0.2,
            }}
            className="group group-8"
          >
            <div className="overlap">
              <div className="div">
                <img
                  className="mask-group"
                  alt="Mask group"
                  src="/img/mask-group.png"
                />
                <div className="text-wrapper">CB</div>
                <div className="text-wrapper-2">Universal Bank</div>
                <img className="line" alt="Line" src="/img/line-2.svg" />
                <div className="rectangle" />
                <div className="text-wrapper-3">5489 7452 5726 9827</div>
                <div className="text-wrapper-4">04/24</div>
                <img
                  className="mc-vrt-rev"
                  alt="Mc vrt rev"
                  src="/img/mc-vrt-rev-1.svg"
                />
              </div>
              <div className="union-wrapper">
                <img className="union" alt="Union" src="/img/union.svg" />
              </div>
            </div>
          </motion.div>
        {/* </AnimatePresence> */}
        <div className="group group-2">
          <div className="overlap">
            <div className="div">
              <img
                className="mask-group"
                alt="Mask group"
                src="https://c.animaapp.com/WEulXItF/img/mask-group-1@2x.png"
              />
              <div className="text-wrapper">CB</div>
              <div className="text-wrapper-2">Universal Bank</div>
              <img className="line" alt="Line" src="/img/line-2.svg" />
              <div className="rectangle" />
              <div className="text-wrapper-3">5489 7452 5726 9827</div>
              <div className="text-wrapper-4">04/24</div>
              <img
                className="mc-vrt-rev"
                alt="Mc vrt rev"
                src="/img/mc-vrt-rev-1.svg"
              />
            </div>
            <div className="union-wrapper">
              <img className="union" alt="Union" src="/img/union.svg" />
            </div>
          </div>
        </div>
        {/* <Group2
          className="group-8"
          maskGroup="https://c.animaapp.com/WEulXItF/img/mask-group-1@2x.png"
          mcVrtRev="https://c.animaapp.com/WEulXItF/img/mc-vrt-rev-1.svg"
          union="https://c.animaapp.com/WEulXItF/img/union-1.svg"
        /> */}
      </motion.div>

      <div onClick={() => handleCardSlide(1)} className="rectangle-3-home" />
      <div onClick={() => handleCardSlide(2)} className="rectangle-4-home" />
    </>
  );
};
