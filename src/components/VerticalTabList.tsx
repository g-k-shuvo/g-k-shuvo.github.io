"use client";
import { VerticalTabListProps } from "@/types/types";
import React from "react";

const VerticalTabList: React.FC<VerticalTabListProps> = (props) => {
  const Clicked = () => {
    props.onClick(props.index);
  };
  return (
    <li className='list-none text-left '>
      <button
        className={`w-full text-left text-sm sm:text-base py-0 px-5 h-12 hover:bg-secondaryColor ${
          props.activeTabId === props.index ? "bg-secondaryColor" : ""
        } border-l-2 border-l-secondaryColor `}
        onClick={Clicked}
      >
        {props.title}
      </button>
    </li>
  );
};

export default VerticalTabList;
