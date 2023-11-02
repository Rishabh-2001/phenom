"use client";
import { useState } from "react";
import Accordion from "./Accordion";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getDummyData } from "../redux/slice/dummy.slice";

const AccordionSection = ({ accordionData }) => {
  const dispath = useDispatch();

  const [currUrl, setCurrUrl] = useState("");

  const [openAccordion, setOpenAccordion] = useState(null);


  const handleAccordionClick = (title, img) => {
    if (openAccordion === title) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(title);
      setCurrUrl(img);
    }
  };

  return (
    <div className="accordion-cont">
      <h2>
        Empower your employees to grow, fill critical skill gaps, and feel
        connected.
      </h2>
      <div className="acc-oouter-box">
        <div className="accordion-box accordion-inner-box">
          {accordionData?.map(({ title, content, url, img }) => (
            <Accordion
              key={title}
              title={title}
              content={content}
              url={url}
              img={img}
              isExpanded={openAccordion === title}
              onAccordionClick={handleAccordionClick}
            />
          ))}
        </div>
        <div className="accordion-img-cont accordion-inner-box ">
          <Image
            src={currUrl || accordionData?.[0]?.img}
            width={100}
            height={100}
            alt="acc-img"
            className="acc-img"
          />
          {/* <Image
            src={mainData?.img }
            width="100%"
            height="100%"
            alt="arr"
            className="bg-img"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
