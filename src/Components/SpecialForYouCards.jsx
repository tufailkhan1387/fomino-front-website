import React from "react";

export default function SpecialForYouCards(props) {
  return (
    <div
      className={`${props.bgImg} relative bg-cover bg-center bg-no-repeat h-[400px] p-6 flex flex-col justify-end rounded-2xl before:absolute before:bg-black before:opacity-20 before:top-0 before:left-0 before:w-full before:h-[400px] before:rounded-2xl`}
    >
      <div className="bg-greenColor w-36 h-10 absolute top-0 right-10 flex justify-center items-center text-white font-switzer">{props.cardBadge}</div>
      <div className="relative space-y-2">
        <h4 className="text-white text-2xl font-switzer font-semibold">
          {props.title}
        </h4>
        <p className="text-white font-switzer font-normal max-w-md">
          {props.para}
        </p>
      </div>
    </div>
  );
}
