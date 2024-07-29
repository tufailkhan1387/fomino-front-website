import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import StoreAddToCartModal from "./StoreAddToCartModal";
import { storeCards } from "../Data";

export default function StoreCards() {
  return (
    <div className="col-span-4">
      <div className="bg-[#FFF6E2] px-4 py-2 rounded-lg">
        <h4 className="text-black font-switzer">
          This product offering is in German. Would you like to view a machine
          translation in another language?
        </h4>
        <p className="text-sm font-switzer">Translate</p>
      </div>

      <div className="mt-10">
        <h4 className="text-xl text-black font-switzer font-semibold">
          Schnelle Schnappchen
        </h4>
        <div className="grid grid-cols-4 gap-10 mt-10">
          {storeCards?.map((data, index) => (
            <div>
              <div className="bg-[#FFFFFF] shadow-large rounded-2xl relative">
                <img
                  src={`/images/store-details/card-${data?.img}.webp`}
                  alt={`card-${index + 1}`}
                  className=""
                />
                <button className="absolute top-4 right-5">
                  <AiOutlineHeart className="text-2xl" />
                </button>
                <StoreAddToCartModal />
              </div>
              <div className="mt-2">
                <h4 className="text-black font-switzer font-medium">
                 {data?.name}
                </h4>
                <p className="text-sm text-[#838383]">{data?.weight} </p>
                <div>
                  <span className="text-black font-medium">€ 52</span>
                  <span className="px-2 text-[#838383] font-medium">
                    <del>. € 72</del>
                  </span>
                  <span className="bg-[#DE2D35] px-2 py-1 rounded-full text-white font-medium text-sm">
                    $0.14 off
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
