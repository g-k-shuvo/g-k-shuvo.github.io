"use client";
import { ExperienceProps } from "@/src/types/types";
import React from "react";
import VerticalTab from "./VerticalTab";

const Experience: React.FC<ExperienceProps> = ({ experienceData }) => {
  const experienceDataSorted = experienceData.sort((a, b) => b.order - a.order);

  const experienceDataMapped = experienceDataSorted.map((item) => ({
    title: item.companyName,
    heading: `${item.position} @${item.companyName}`,
    date: `${item.from} - ${item.to ? item.to : "Present"}`,
    other: item.details,
  }));
  return (
    <div className='w-9/10 mx-auto lg:w-[1024px]' id='experience'>
      <h3 className='text-lg md:text-xl font-bold text-left mt-12'>
        Where I&apos;ve Worked
      </h3>
      <div className='py-[60px] md:py-[90px] lg:py-[140px]'>
        <VerticalTab data={experienceDataMapped} />
      </div>
    </div>
  );
};

export default Experience;
