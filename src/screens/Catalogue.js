import React from "react";
// import { BarsNavigationBar } from "../../components/BarsNavigationBar";
// import { BarsStatusBar } from "../../components/BarsStatusBar";
// import { Group } from "../../components/Group";
// import { Telephone } from "../../components/Telephone";
// import { Car111 } from "../../icons/Car111";
// import { Flash1 } from "../../icons/Flash1";
// import { Wifi11 } from "../../icons/Wifi11";
import "../styles/catalogue.css";
import { BarsNavigationBar } from "../components/BarsNavigationBar";
import { BankStatusBar } from "../components/BarsStatusBar";
// import { Group } from "../components/BottomSlider.js/Group";
import { CatalogueNavigationBar } from "../components/BarsNavigationBar/catalogueNavigationBar";
import { CatalogueGroup as Group } from "../components/CatalogueGroup";
import { Footer } from "../components/Footer";

export const Catalogue = (props) => {
  const handleMenu = (value) => {

    props.handleMenu(value)
  };
  return (
    <div className="catalogue">
      <div className="div-2">
        <div className="overlap">
          <CatalogueNavigationBar
            className="design-component-instance-node"
            text="Catalogue"
          />
          <BankStatusBar className="design-component-instance-node" />
        </div>
        <footer className="footer">
          <div className="footer-menu-wrapper">
            <div className="footer-menu">
              <div className="menu-c">
                <img
                  className="union-3"
                  alt="Union"
                  src="https://c.animaapp.com/WEulXItF/img/union.svg"
                />
              </div>
              <div className="history-c" onClick={()=>handleMenu("history")}>
                <img
                  className="img-2"
                  alt="Path"
                  src="https://c.animaapp.com/WEulXItF/img/path-14.svg"
                />
              </div>
              <div className="scan-c" >
                <img
                  className="img-2-"
                  alt="Vector stroke"
                  src="/img/scan.svg"
                />
              </div>
              <div className="home-c" onClick={()=>handleMenu("home")}>
                <img
                  className="path"
                  alt="Path"
                  src="/img/home.svg"
                />
              </div>
            </div>
          </div>
        </footer>
        {/* <Footer/> */}
        <Group className="group-2" />
        <Group
          className="group-instance"
          override={<Wifi11 className="icon-instance-node" color="white" />}
          text="Internet and TV"
          text1="$21.00"
        />
        <Group
          className="group-2-instance"
          override={<Car111 className="icon-instance-node" color="white" />}
          text="Traffic fines"
          text1="$1,221.00"
        />
        <Group
          className="group-5"
          divClassName="group-4"
          overlapGroupClassName="group-3"
          override={<Telephone className="telephone-instance" />}
          text="Housing services"
          text1="$0.00"
        />
        <Group
          className="group-6"
          override={<Flash1 className="icon-instance-node" color="white" />}
          text="Utility payment"
          text1="$442.00"
        />
      </div>
    </div>
  );
};

export const Telephone = ({ className }) => {
  return <div className={`telephone ${className}`} />;
};

export const Car111 = ({ color = "black", className }) => {
  return (
    <svg
      className={`car-1-1-1 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.9029 5.1451C13.8696 5.04822 13.7516 4.97287 13.6532 4.97287C13.2267 4.97287 12.8003 4.97287 12.3739 4.97287C12.2755 4.97287 12.1575 5.04822 12.1242 5.1451C12.0916 5.23992 12.0673 5.32453 12.0511 5.4041L11.1966 3.04003C11.0556 2.6502 10.6824 2.38829 10.2679 2.38829H3.73228C3.31776 2.38829 2.94457 2.6502 2.80356 3.0401L1.94901 5.40438C1.9328 5.32474 1.90846 5.24003 1.87586 5.1451C1.84258 5.04822 1.72459 4.97287 1.62615 4.97287C1.19975 4.97287 0.773342 4.97287 0.346901 4.97287C0.248459 4.97287 0.13047 5.04822 0.0971951 5.1451C-0.0323584 5.5223 -0.0322874 5.73823 0.0972305 6.11547C0.130506 6.21235 0.248494 6.2877 0.346937 6.2877C0.773377 6.2877 1.19978 6.2877 1.62619 6.2877C1.62739 6.2877 1.62867 6.28738 1.62991 6.28734L1.61061 6.34081C1.34977 6.42747 1.16143 6.67303 1.16143 6.963V8.94266V9.10581V11.2964C1.16143 11.4706 1.30255 11.6117 1.4767 11.6117H3.06337C3.23748 11.6117 3.37864 11.4706 3.37864 11.2964V9.76173H10.6215V11.2964C10.6215 11.4706 10.7626 11.6117 10.9368 11.6117H12.5234C12.6976 11.6117 12.8387 11.4706 12.8387 11.2964V9.10581V8.94266V6.963C12.8387 6.6731 12.6504 6.42758 12.3897 6.34084L12.3704 6.28734C12.3715 6.28738 12.3728 6.28766 12.3739 6.28766C12.8004 6.28766 13.2268 6.28766 13.6532 6.28766C13.7517 6.28766 13.8696 6.21232 13.9029 6.11543C14.0324 5.73823 14.0323 5.5223 13.9029 5.1451ZM3.853 3.54845H10.1463L11.1434 6.30703H2.85592L3.853 3.54845ZM4.02853 8.25037H2.70114C2.41635 8.25037 2.18552 8.01954 2.18552 7.73475C2.18552 7.44999 2.41631 7.21912 2.70114 7.21912H4.02853C4.31329 7.21912 4.54416 7.44996 4.54416 7.73475C4.54419 8.01954 4.31329 8.25037 4.02853 8.25037ZM11.2989 8.25037H9.97149C9.68674 8.25037 9.45587 8.01954 9.45587 7.73475C9.45587 7.44999 9.68674 7.21912 9.97149 7.21912H11.2989C11.5837 7.21912 11.8145 7.44996 11.8145 7.73475C11.8145 8.01954 11.5837 8.25037 11.2989 8.25037Z"
        fill={color}
      />
    </svg>
  );
};

export const Flash1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`flash-1 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1385_289)">
        <path
          className="path"
          d="M11.1015 5.76951H7.70698L10.6373 0.613627C10.7099 0.486629 10.7094 0.330791 10.6362 0.20422C10.5625 0.0777555 10.4275 -3.09944e-06 10.2812 -3.09944e-06H5.35937C5.18281 -3.09944e-06 5.02612 0.113003 4.97047 0.280376L2.50954 7.69051C2.46746 7.81548 2.48871 7.95327 2.56562 8.06019C2.64295 8.16721 2.76674 8.23044 2.89844 8.23044H6.37803L4.16223 13.4284C4.08287 13.6131 4.14942 13.8282 4.31925 13.9359C4.4863 14.0427 4.71071 14.0146 4.8455 13.8623L11.408 6.45214C11.5153 6.33155 11.5418 6.15884 11.4757 6.01187C11.4096 5.86447 11.263 5.76951 11.1015 5.76951Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1385_289">
          <rect className="rect" fill="white" height="14" width="14" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Wifi11 = ({ color = "black", className }) => {
  return (
    <svg
      className={`wifi-1-1 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1385_497)">
        <path
          className="path"
          d="M6.99706 9.9066C6.32793 9.9066 5.78357 10.4492 5.78357 11.1158C5.78357 11.7826 6.32793 12.3254 6.99706 12.3254C7.66641 12.3254 8.21077 11.7826 8.21077 11.1158C8.21077 10.4492 7.6663 9.9066 6.99706 9.9066Z"
          fill={color}
        />
        <path
          className="path"
          d="M9.95775 8.2591C9.16771 7.46951 8.1161 7.03447 6.99702 7.03447C5.88225 7.03447 4.83351 7.46664 4.0437 8.25126C3.7247 8.56871 3.72415 9.0859 4.04237 9.40391C4.19696 9.55871 4.40277 9.64373 4.62184 9.64373C4.83991 9.64373 5.04496 9.55915 5.19932 9.40567C5.67997 8.92801 6.3184 8.66489 6.99702 8.66489C7.67819 8.66489 8.31838 8.92966 8.79936 9.4102C8.95395 9.56456 9.15965 9.6498 9.3785 9.6498C9.59679 9.6498 9.80173 9.56522 9.9562 9.41175C10.2756 9.09427 10.2762 8.57732 9.95775 8.2591Z"
          fill={color}
        />
        <path
          className="path"
          d="M13.761 4.46835C11.9548 2.66659 9.55249 1.67461 6.997 1.67461C4.44494 1.67461 2.04503 2.66427 0.239384 4.46175C-0.0796105 4.7792 -0.0798313 5.29639 0.238942 5.61439C0.393415 5.76842 0.598901 5.85311 0.817526 5.85311C1.03604 5.85311 1.24131 5.76875 1.39578 5.61483C2.89248 4.12509 4.88164 3.30447 6.997 3.30447C9.11546 3.30447 11.1066 4.12674 12.6036 5.62046C12.7581 5.7746 12.9639 5.85963 13.1824 5.85963C13.4009 5.85963 13.6061 5.77482 13.7605 5.62112C14.0796 5.30343 14.0799 4.78604 13.761 4.46835Z"
          fill={color}
        />
        <path
          className="path"
          d="M11.8111 6.41124C10.5254 5.12853 8.81575 4.4222 6.99696 4.4222C5.18149 4.4222 3.47433 5.12632 2.18974 6.40451C2.03505 6.55832 1.94992 6.76292 1.94958 6.98077C1.94958 7.19841 2.03439 7.40323 2.18886 7.55726C2.34333 7.7114 2.54893 7.79642 2.76755 7.79642C2.98585 7.79642 3.19111 7.71162 3.34581 7.55814C4.32167 6.58725 5.61841 6.05239 6.99696 6.05239C8.37838 6.05239 9.67689 6.58913 10.6534 7.56333C10.8081 7.7177 11.0136 7.80272 11.2323 7.80272C11.4507 7.80272 11.6561 7.71792 11.8104 7.56422C11.9648 7.41041 12.0502 7.2058 12.0503 6.98795C12.0505 6.7701 11.9655 6.5655 11.8111 6.41124Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1385_497">
          <rect className="rect" fill="white" height="14" width="14" />
        </clipPath>
      </defs>
    </svg>
  );
};
