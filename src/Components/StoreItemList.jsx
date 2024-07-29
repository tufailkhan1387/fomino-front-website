import React from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { storeItems } from "../Data";
import StoreCards from "./StoreCards";

export default function StoreItemList() {
  return (
    <div className="py-10 lg:py-20 w-[90%] lg:w-[85%] m-auto">
      <div className="grid grid-cols-5 gap-12">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in Flink Karl liebknecht"
              className="bg-[#E4E4E4] w-full h-12 font-switzer text-tabColor rounded-3xl border-none outline-none px-14"
            />
            <HiSearch className="absolute top-4 left-6 text-lg" />
          </div>

          <div className="bg-[#FFF6E2] flex items-center rounded-lg px-6 py-3 gap-3">
            <AiOutlinePercentage className="text-2xl text-black" />
            <span className="text-black font-switzer font-medium">Angbote</span>
          </div>

          <div className="bg-[#FFF6E2] flex justify-center py-2 rounded-lg text-black font-switzer font-medium">
            Schnelle Schnappchen
          </div>

          <div className="pt-4">
            {storeItems?.map((data, index) => (
              <div className="flex items-center gap-5 px-2 py-2 hover:bg-black hover:text-white duration-300 hover:cursor-pointer">
                <img
                  src={`/images/store-details/item-${data?.img}.webp`}
                  alt={`item-${index + 1}`}
                  className="w-10 h-10"
                />
                <h4 className="font-switzer font-medium">{data?.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <StoreCards />
      </div>
    </div>
  );
}
