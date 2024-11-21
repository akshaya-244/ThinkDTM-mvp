import React from "react";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="mb-16 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          About Us 
        </h1>
        <p className="mt-4 font-normal text-2xl  text-neutral-300 text-center mx-auto">
        We are a group of Entrepreneurs and Executives who come from Technology, Engineering, Marketing, Sales, Product Development, Commerce and Investment backgrounds who have invested our careers into Growth, Learning Innovation & Disruption and have stellar track record of execution.
        </p>
      </div>
    </div>
  );
}
