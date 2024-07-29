// @ts-nocheck
import React from "react";
import FominoSpecialCards from "./FominoSpecialCards";
import { fominoSpecial } from "../Data";
import ResturantAddressDetails from "./ResturantAddressDetails";

export default function CutlearyData() {
  return (
    <div className="pt-10 space-y-10">
      <div className="space-y-2">
        <h4 className="text-xl text-black font-switzer font-semibold uppercase">
          Cutleary
        </h4>
        <p className="text-sm text-black font-switzer max-w-sm">
          Help us to reduce waste - only request cutlery when you need it
        </p>
      </div>

      <div className="bg-white shadow-large rounded-2xl py-4 px-8 max-w-sm space-y-4">
        <div className="flex gap-5">
          <img src="/images/resturant-details/fork-and-knife.webp" alt="fork" className="w-24 h-24 bg-[#F5F8F7] rounded-2xl p-2"/>
          <div className="space-y-2">
            <h4 className="text-black font-switzer font-semibold ">
              Do you need cutlery?
            </h4>
            <p className="text-sm text-paraColor font-switzer">
              Swipe right to add cutlery the restaurant will add it, if
              available
            </p>
            <span className="text-greenColor font-switzer font-semibold">
              0.00 €
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xl text-black font-switzer font-semibold uppercase">
          Fomino Special
        </h4>
        <p className="text-sm text-black font-switzer max-w-sm">
          Help us to reduce waste - only request cutlery when you need it
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {fominoSpecial?.map((data, index) => (
          <FominoSpecialCards
            imgSrc={`/images/resturant-details/fominospecial-card-${data?.img}.webp`}
            alt={`fomino-card-${index + 1}`}
            title={data?.name}
            detail={data?.detail}
            price={data?.price}
          />
        ))}
      </div>

      <ResturantAddressDetails />
    </div>
  );
}
