"use client";
import React, { useEffect, useState } from "react";
import bgImg from "../../../public/homepage/01-recruiters-frontal_1__1_.webp";
import Image from "next/image";
import strip1 from "../../../public/homepage/strip1.svg";
import strip2 from "../../../public/homepage/strip2.svg";

import ListOptions from "./ListOptions";

import { useDispatch } from "react-redux";

function MainSection({ mainData }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  console.log("GM:", mainData);



  return (
    <div className="main-cont">
      {/* HERO CONTAINER  */}
      <div className="hero-cont">
        <div className="hero-left-box">
          <ListOptions  />

          <div className="hero-heading">
            <p>Phenom for </p>
            <p>{mainData?.heroTitle}</p>
          </div>

          <span className="sub-head">{mainData?.subHeading}</span>
          <div className="btn-group">
            <button className="btn1">Book Demo</button>
          </div>
        </div>
        <div className="img-box">
          <Image
            src={strip2}
            width="100%"
            height="20%"
            alt="arr"
            className="bg-img-strip strip1"
          />
          <Image
            src={mainData?.img}
            width="100%"
            height="100%"
            alt="arr"
            className="bg-img"
          />
          <Image
            src={strip1}
            width="100%"
            height="20%"
            alt="arr"
            className="bg-img-strip strip2"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
