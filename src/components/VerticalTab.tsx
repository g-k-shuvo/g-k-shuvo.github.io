"use client";
import React, { useState } from "react";
import VerticalTabList from "./VerticalTabList";
import VerticalTabContent from "./VerticalTabContent";
import { VerticalTabProps } from "@/src/types/types";

const VerticalTab: React.FC<VerticalTabProps> = ({ data }) => {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id: number) {
    setActiveTabId(id);
  }
  return (
    <div className='relative w-[90%] mx-auto'>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='basis-1/10'>
          {data.map((item, index) => (
            <VerticalTabList
              key={index}
              onClick={btnClick}
              title={item.title}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
        </div>
        <div className='basis-9/10'>
          {data.map((item, index) => (
            <VerticalTabContent
              key={index}
              title={item.heading}
              date={item.date}
              index={index}
              activeTabId={activeTabId}
              other={item.other}
            />
          ))}
        </div>
      </div>
      <span
        className={`absolute top-0 left-0 inline-block w-0.5 h-12 transition-transform duration-500 border-l-2 border-teal-400 transform ${
          activeTabId === 0
            ? "transform translate-y-0"
            : activeTabId === 1
              ? "transform translate-y-12"
              : activeTabId === 2
                ? "transform translate-y-24"
                : "transform translate-y-36"
        } z-10 `}
      >
        &nbsp;
      </span>
    </div>
  );
};

export default VerticalTab;
