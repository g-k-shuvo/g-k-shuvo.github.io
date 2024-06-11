"use client";
import React, { useEffect, useRef, useState } from "react";

import { items } from "@/src/data/navbar";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const linksRef = useRef<HTMLDivElement>(null);
  const themeSwitcherParentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (linksRef.current && themeSwitcherParentRef.current) {
      themeSwitcherParentRef.current.style.height = `${
        linksRef.current.getBoundingClientRect().height
      }px`;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => {
      let selector;
      if (item.to === "/") {
        // Use "#home" as the selector for the "Home" link
        selector = "#home";
      } else {
        // Prepend "#" to other items' `to` values to form the selector
        selector = `#${item.to}`;
      }

      const section = document.querySelector(selector);
      if (section) observer.observe(section);
    });
    return () => {
      items.forEach((item) => {
        let selector;
        if (item.to === "/") {
          // Use "#home" as the selector for the "Home" link
          selector = "#home";
        } else {
          // Prepend "#" to other items' `to` values to form the selector
          selector = `#${item.to}`;
        }

        const section = document.querySelector(selector);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (activeSection) {
      const path = activeSection === "home" ? "/" : `#${activeSection}`;
      history.replaceState(null, "", path);
    }
  }, [activeSection]);

  return (
    <header className='bg-[var(--background-color)] border-b border-b-secondaryColor sticky top-0 z-50'>
      <nav className='w-9/10 lg:w-[1024px] mx-auto flex flex-col sm:flex-row justify-between items-center'>
        <div className='w-full sm:w-auto flex justify-between items-center'>
          <Link
            href='/'
            className='inline-block px-3 py-2 sm:px-4 sm:py-3 cursor-pointer hover:bg-secondaryColor'
          >
            gk
          </Link>

          <div className='sm:hidden'>
            <ThemeSwitcher />
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div ref={linksRef} className='links text-center'>
            {items.map((item) => (
              <Link
                key={item.to}
                href={item.to !== "/" ? `#${item.to}` : "/"}
                className={`inline-block text-xs sm:text-base px-3 py-2 sm:px-4 sm:py-3 cursor-pointer hover:bg-secondaryColor
                   ${
                     (item.to === "/" && activeSection === "home") ||
                     activeSection === item.to
                       ? "bg-secondaryColor"
                       : ""
                   }
                  `}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div
            ref={themeSwitcherParentRef}
            className='hidden sm:flex sm:items-center'
          >
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
