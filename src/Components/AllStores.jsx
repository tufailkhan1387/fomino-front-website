import React from "react";
import AllResturantCards from "./AllResturantCards";
import { storeCardData } from "../Data";

export default function AllStores() {
  return (
    <div>
      <h4 className="text-2xl lg:text-4xl text-white font-switzer font-semibold">
        All stores
      </h4>

      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pt-10 pb-10 md:pb-20 space-y-5 md:space-y-0">
        {storeCardData?.map((data, index) => (
          <AllResturantCards
            imgSrc={`/images/resturants/store-card-${data?.img}.webp`}
            alt={`store-card-${index + 1}`}
            link={data?.link}
          />
        ))}
      </div>
    </div>
  );
}
