import React from "react";

export const Quote = () => {
  return (
    <div className="bg-slate-300 h-screen flex flex-col justify-center items-center text:xs lg:text-xl">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className=" max-w-md text-wrap text-xl font-bold ">
            "The customer support I received was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
        </div>
        <div className="mt-3">
          <div className="font-bold">Julius Winfield</div>
          <div className="text-slate-500">CEO, Acme Inc </div>
        </div>
      </div>
    </div>
  );
};
