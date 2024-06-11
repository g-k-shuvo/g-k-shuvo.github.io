"use client";
import { SkillProps } from "@/src/types/types";
import React from "react";

const Skill: React.FC<SkillProps> = ({ skillData }) => {
  return (
    <div className='w-9/10 mx-auto lg:w-[1024px]' id='skills'>
      <h3 className='text-lg md:text-xl font-bold text-left mt-12'>
        Stuffs I Know
      </h3>

      <div className='w-[90%] mx-auto text-center py-[60px] md:py-[90px] lg:py-[140px]'>
        {skillData.map((skill, index) => (
          <span
            className='py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base bg-secondaryColor inline-block m-2 cursor-pointer'
            key={index}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;
