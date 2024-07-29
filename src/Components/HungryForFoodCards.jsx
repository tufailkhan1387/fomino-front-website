import React from "react";

export default function HungryForFoodCards(props) {
  return (
    <div className="bg-[#F8F8F8] shadow-large">
      <img src={props.imgSrc} alt={props.alt} />

      <div className="text-center px-4 py-5 lg:py-10 space-y-10">
        <h4 className="text-black font-switzer font-medium">
          {props.title}
        </h4>
        <button className="text-[#379465] text-sm font-switzer font-medium underline">
          Apply now
        </button>
      </div>
    </div>
  );
}
