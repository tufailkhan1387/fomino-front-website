import React from "react";


export default function YourOrder(props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="bg-white rounded-md shadow-large p-2">
          <img
            src={`/images/store-details/card-${props.imgSrc}.webp`}
            alt={`card-${props.alt}`}
            className="w-16 h-12"
          />
        </div>
        <div className="flex gap-3 items-center text-black font-semibold">
          <span className="text-greenColor">{props.quantity}</span>{props.name}
        </div>
      </div>
      <div className="text-greenColor font-semibold">{props.price}</div>
    </div>
  );
}
