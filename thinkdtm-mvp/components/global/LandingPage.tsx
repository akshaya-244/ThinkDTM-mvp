"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "./text-generate-effect";

export function Landing() {
    const words2 =`Incubating dreams into reality`
  return (
    <div className="mt-20 h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        ThinkDTM
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <div className="relative w-full h-full">
  <SparklesCore
    background="transparent"
    minSize={0.4}
    maxSize={1}
    particleDensity={1200}
    className="w-full h-full z-0"
    particleColor="#FFFFFF"
  />
  <TextGenerateEffect
    className="absolute italic top-0 px-14 w-full h-full z-10 "
    duration={2}
    filter={false}
    words={words2}
  />
</div>


        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        
      </div>
      <p className="mt-4 font-normal text-3xl  text-neutral-300  text-center px-44">
        We are a group of Entrepreneurs and Executives who come from Technology, Engineering, Marketing, Sales, Product Development, Commerce and Investment backgrounds who have invested our careers into Growth, Learning Innovation & Disruption and have stellar track record of execution.
    </p>
    </div>
  );
}
