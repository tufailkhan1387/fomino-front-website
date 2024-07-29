import React from "react";
import {MdTune} from "react-icons/md"
export default function StoresNearMe() {
  return (
    <div className="pt-10">
      <div className="flex flex-wrap justify-between">
        <h4 className="text-2xl md:text-3xl lg:text-[40px] text-white font-switzer font-extrabold">
          Stores near me
        </h4>
        <div className="flex items-center gap-5">
          <p className="text-white text-xl font-switzer">
            Sorted by <span className="font-semibold">Recommended</span>
          </p>
          <button className="w-10 h-10 bg-white rounded-full p-2">
            <MdTune className="text-2xl"/>
          </button>
        </div>
      </div>
    </div>
  );
}
