import { useState } from "react";
import { DivWrapper } from "./DivWrapper";
import { Group as GroupSlider } from "./Group";
import { GroupWrapper } from "./GroupWrapper";
import { Vector4 } from "./Vector4";
import "./slider.css";
import { motion } from "framer-motion";

export const BottomSlider = (props) => {
  const [scrollheight, setScrollValue] = useState(410);
  const [moveup, setMove] = useState(true);

  const handleScroll = () => {
    // 340
    // 410
    // 0
    if (scrollheight === 410 && moveup) {
      setScrollValue(340);
      setMove(true);
      props.handleMenu(340)
    } else if (scrollheight === 340 && moveup) {
      setScrollValue(0);
      setMove(false);
      props.handleMenu(0)
    } else if (scrollheight === 340 && !moveup) {
      setScrollValue(410);
      setMove(true);
      props.handleMenu(410)
    } else if (scrollheight === 0) {
      setScrollValue(410);
      props.handleMenu(410)
      setMove(true)
    }
    // props.handleMenu(scrollheight)
  };
  return (
    <>
      <motion.div
        // initial={{ opacity: 0, scale: 0.5 }}
        animate={{ y: scrollheight }}
        transition={{ duration: 0.5 }}
        initial={{ y: 600 }}
        className="group-6"
        onClick={handleScroll}
      >
        <div className="overlap-4">
          <div className="rectangle-2" />
          <GroupSlider className="group-instance" />
          <GroupSlider
            className="group-7"
            divClassName="group-6-instance"
            text="- $43.00"
          />
          <GroupSlider
            className="group-8-slider"
            divClassName="group-6-instance"
            text="- $43.00"
          />
          <GroupSlider
            className="group-11"
            divClassName="group-12"
            groupClassName="group-10"
            icon={<Vector4 className="vector-4" />}
            iconClassName="group-9"
            text="- $2467.00"
            text1="Card to card"
          />
          <GroupSlider
            className="group-14"
            divClassName="group-15"
            groupClassName="group-10"
            icon={<Vector4 className="vector-4" />}
            iconClassName="group-9"
            line="https://c.animaapp.com/Ayccic91/img/line-1-6@2x.png"
            lineClassName="group-13"
            text="- $12.00"
            text1="Card to card"
          />
          <GroupWrapper
            className="group-2-instance"
            divClassName="group-16"
            text="+ $1443.00"
          />
          <div className="rectangle-3" />
          <div className="text-wrapper-slider-20">Today</div>
          <div className="text-wrapper-slider-30">12 Mach</div>
          <GroupWrapper className="group-17" text="+ $143.00" />
          <DivWrapper className="group-3-instance" icon={""} />
        </div>
      </motion.div>
    </>
  );
};
