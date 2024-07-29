import React from "react";
import { FaStar } from "react-icons/fa";
import AddtoCartModal from "./AddtoCartModal";

export default function FominoSpecialCards(props) {
  return (
    <div className="bg-white shadow-large rounded-2xl p-5 grid grid-cols-3 gap-5">
      <img
        src={props.imgSrc}
        alt={props.alt}
        className="w-28 h-28 bg-[#F5F8F7] rounded-2xl p-2"
      />

      <div className="space-y-2  col-span-2">
        <h4 className="text-black font-switzer font-medium">{props.title}</h4>
        <p className="text-xs text-[#838383] font-switzer max-w-[220px]">
          {props.detail}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <h6 className="text-black font-switzer font-medium">
              {props.price}
            </h6>
            <p className="bg-[#DE2D35] uppercase p-1 rounded-3xl text-[10px] text-white font-switzer font-semibold flex items-center gap-1">
              <FaStar />
              <span> Popular</span>
            </p>
          </div>

          <AddtoCartModal />
        </div>
      </div>
    </div>
  );
}
