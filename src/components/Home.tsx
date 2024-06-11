"use client";
import { HomeProps } from "@/src/types/types";
import Image from "next/image";

import React from "react";

const Home: React.FC<HomeProps> = ({ homeData }) => {
  return (
    <div
      className='w-9/10 mx-auto lg:w-[1024px] py-[60px] lg:h-screen flex items-center'
      id='home'
    >
      <div className='flex flex-col-reverse lg:flex-row gap-10 justify-between items-center'>
        <div className='basis-8/10 lg:basis-7/10 '>
          <h1 className='text-4xl sm:text-6xl font-bold'>{homeData.name}</h1>
          <p className='text-base sm:text-lg md:text-lg my-5 uppercase italic'>
            {homeData.heading}
          </p>
          <p className='text-base'>{homeData.subHeading}</p>
        </div>
        <div className='basis-2/10 lg:basis-3/10 lg:my-0 my-[40px]'>
          <Image
            src={homeData.imageUrl}
            alt={homeData.name}
            placeholder='blur'
            width={300}
            height={300}
            blurDataURL={homeData.imageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
