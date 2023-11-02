"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainSection from "../components/Main";
import AccordionSection from "../components/AccordioSection";
import { useDispatch, useSelector } from "react-redux";
import { getDummyData } from "../redux/slice/dummy.slice";

//get data of current tab
function getData(all, key) {
  if (key === "hris") {
    return all?.hris;
  } else if (key === "talentAcquisition") {
    return all?.talentAcquisition;
  } else if (key === "talentManagement") {
    return all?.talentManagement;
  } else if (key === "recruiters") {
    return all?.recruiters;
  } else if (key === "hiringManagers") {
    return all?.hiringManagers;
  } else {
    return all?.chro;
  }
}

const RolePage: React.FC = () => {
  const currTabs = useSelector((store) => store?.dummy?.currentTab);

  const dispatch=useDispatch();
  let mainData = useSelector((store) => store?.dummy?.allData);
  const changedData = getData(mainData, currTabs);          

 
  mainData = changedData?.data?.heroData;
  const accordionData = changedData?.data?.accordiumData;


  return (
    <section>
      <MainSection mainData={mainData}    />
      <AccordionSection accordionData={accordionData} />
    </section>
  );
};

export default RolePage;
