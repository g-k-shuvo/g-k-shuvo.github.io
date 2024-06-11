"use client";
import { EducationProps } from "@/src/types/types";
import React from "react";
import VerticalTab from "./VerticalTab";

const Education: React.FC<EducationProps> = ({ educationData }) => {
  const educationDataSorted = educationData.sort((a, b) => b.order - a.order);

  const educationDataMapped = educationDataSorted.map((item) => ({
    title: item.examNameShort,
    heading: item.institution,
    date: item.passingYear ? item.passingYear : "Present",
    other: [item.exam, item.location],
  }));

  return (
    <div className='w-9/10 mx-auto lg:w-[1024px]' id='education'>
      <h3 className='text-lg md:text-xl font-bold text-left mt-12'>
        Where I&apos;ve Studied
      </h3>
      <div className='py-[60px] md:py-[90px] lg:py-[140px]'>
        <VerticalTab data={educationDataMapped} />
      </div>
    </div>
  );
};

export default Education;
