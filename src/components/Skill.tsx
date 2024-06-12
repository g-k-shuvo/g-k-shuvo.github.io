import React, { useEffect, useRef } from "react";
import { SkillProps } from "@/src/types/types";

const Skill: React.FC<SkillProps> = ({ skillData }) => {
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!skillsContainerRef.current) return;

      const skills = (
        skillsContainerRef.current as HTMLElement
      ).querySelectorAll(".skill") as NodeListOf<HTMLElement>;
      for (const skill of skills) {
        const rect = skill.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        skill.style.setProperty("--mouse-x", `${x}px`);
        skill.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const container = skillsContainerRef.current as unknown as HTMLElement;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      container && container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='w-9/10 mx-auto lg:w-[1024px]' id='skills'>
      <h3 className='text-lg md:text-xl font-bold text-left mt-12'>
        Stuffs I Know
      </h3>

      <div
        ref={skillsContainerRef}
        className='skills w-[90%] mx-auto text-center py-[60px] md:py-[90px] lg:py-[140px]'
      >
        {skillData.map((skill, index) => (
          <div className='skill' key={index}>
            <div className='skill-content text-sm  sm:text-base'>
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
