"use client";
import { VerticalTabContentProps } from "@/types/types";
import React from "react";

const VerticalTabContent: React.FC<VerticalTabContentProps> = (props) => {
  return (
    <div
      key={props.index}
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4 className='text-base sm:text-lg md:text-xl mb-2 font-bold'>
        {props.title}
      </h4>
      <p className='text-base mb-4'>{props.date}</p>
      <ul className='ml-4'>
        {props.other?.map((item, index) => (
          <li key={index} className='text-sm list-disc mb-2'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalTabContent;
