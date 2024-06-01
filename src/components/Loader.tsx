"use client";
import { LoaderProps } from "@/types/types";
import React, { useEffect, useRef } from "react";

const Loader: React.FC<LoaderProps> = ({ setLoading }) => {
  const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let iteration = 0;

    const h1Element = h1Ref.current;
    const originalText = "GOLAM KIBRIA";

    interval = setInterval(() => {
      if (h1Element) {
        h1Element.innerText = h1Element.innerText
          .split("")
          .map((letter, index) => {
            if (index < Math.floor(iteration)) {
              return originalText![index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      }

      if (Math.floor(iteration) >= originalText?.length!) {
        clearInterval(interval!);
        h1Element!.innerText = originalText!; // Restore the original text
        setTimeout(() => setLoading(false), 1000);
      }

      iteration += 1 / 3;
    }, 40);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [setLoading]);

  return (
    <div className='h-screen w-full bg-[var(--background-color)] flex justify-center items-center transition-opacity duration-300'>
      <h1 className='text-4xl sm:text-6xl' ref={h1Ref}>
        0XFSB 1XDRFG
      </h1>
    </div>
  );
};

export default Loader;
