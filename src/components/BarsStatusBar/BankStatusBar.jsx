

import React from "react";
import "./style.css";

export const BankStatusBar = ({ className }) => {
  return (
    <div className={`bars-status-bar ${className}`}>
       <img className="battery" alt="Wifi" src="/img/Battery.svg" />
      <img className="wifi" alt="Wifi" src="/img/wifi.svg" />
      <img className="cellular-connection" alt="Cellular connection" src="/img/cellular-connection.svg" />
      <div className="time-style">
        <div className="time">9:41</div>
      </div>
    </div>
  );
};
