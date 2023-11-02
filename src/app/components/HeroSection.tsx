import React from 'react';
import ListOptions from './ListOptions';
import Image from 'next/image';
import bgImg from "../../../public/homepage/01-recruiters-frontal_1__1_.webp";
import strip1 from "../../../public/homepage/strip1.svg";
import strip2 from "../../../public/homepage/strip2.svg";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-cont">
      <div className="hero-left-box">
        <ListOptions />
        <div className="hero-heading">
          <p>Phenom for </p>
          <p>Talent</p>
          <p>Management</p>
        </div>
        <span className="sub-head">
          Facilitate productive and purposeful career paths — with precision.
        </span>
        <div className="btn-group">
          <button className="btn1">Book Demo</button>
        </div>
      </div>
      <div className="img-box">
        <Image
          src={strip2}
          width={100}
          height={20}
          alt="arr"
          className="bg-img-strip strip1"
        />
        <Image
          src={bgImg}
          width={100}
          height={100}
          alt="arr"
          className="bg-img"
        />
        <Image
          src={strip1}
          width={100}
          height={20}
          alt="arr"
          className="bg-img-strip strip2"
        />
      </div>
    </div>
  );
};

export default HeroSection;
