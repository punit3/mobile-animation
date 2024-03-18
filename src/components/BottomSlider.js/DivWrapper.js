
import React from "react";
// import { Icon } from "../../icons/Icon";
// import "./style.css";

const Icon = ({ className }) => {
  return (
    <svg
      className={`icon ${className}`}
      fill="none"
      height="68"
      viewBox="0 0 68 68"
      width="68"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_di_1_305)">
        <circle className="circle" cx="34" cy="34" fill="url(#paint0_linear_1_305)" r="20" />
      </g>
      <g className="g" clipPath="url(#clip0_1_305)">
        <path
          className="path"
          d="M38.0634 35.9036C38.4985 35.1755 38.7872 34.2547 38.8432 33.3435C38.8787 32.7587 38.7484 32.1448 38.4662 31.5675C38.0235 30.6606 37.2632 30.1512 36.5286 29.659C35.9804 29.2918 35.4624 28.945 35.0962 28.4495L35.0305 28.3612C34.814 28.0704 34.5695 27.7408 34.5308 27.464C34.492 27.184 34.2378 26.9848 33.96 27.0009C33.6778 27.0203 33.4591 27.254 33.4591 27.5373V37.1335C33.0079 36.86 32.4521 36.6919 31.8436 36.6919C30.3595 36.6919 29.1511 37.658 29.1511 38.846C29.1511 40.0339 30.3595 41 31.8436 41C33.3277 41 34.5362 40.0339 34.5362 38.846V32.5691C35.345 32.8782 36.6687 33.6655 37.0327 35.504C36.9648 35.6042 36.9002 35.7119 36.8248 35.798C36.6277 36.021 36.6493 36.3613 36.8733 36.5573C37.0952 36.7555 37.4355 36.7318 37.6326 36.5089C37.7769 36.3451 37.9051 36.1534 38.0279 35.9531C38.0408 35.938 38.0527 35.9219 38.0634 35.9036Z"
          fill="white"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="68"
          id="filter0_di_1_305"
          width="68"
          x="0"
          y="0"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="7" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.996078 0 0 0 0 0.788235 0 0 0 0 0.27451 0 0 0 0.28 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_305" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_305"
            mode="normal"
            result="shape"
          />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="2" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="1" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.754167 0 0 0 0 0.440592 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect2_innerShadow_1_305" />
        </filter>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_305"
          x1="34"
          x2="34"
          y1="14"
          y2="54"
        >
          <stop className="stop" stopColor="#FEC946" />
          <stop className="stop" offset="1" stopColor="#E9912A" />
        </linearGradient>
        <clipPath className="clip-path" id="clip0_1_305">
          <rect className="rect" fill="white" height="14" transform="translate(27 27)" width="14" />
        </clipPath>
      </defs>
    </svg>
  );
};


export const DivWrapper = ({ className, icon = <Icon className="icon-instance" /> }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="text-wrapper-4">- $467.00</div>
      <Icon className="icon-instance" />
      <div className="group-3">
        <div className="text-wrapper-5">Apple Music</div>
        <div className="text-wrapper-6">Online</div>
      </div>
      <img className="line-2" alt="Line" src="https://c.animaapp.com/Ayccic91/img/line-1-10.svg" />
    </div>
  );
};