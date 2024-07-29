// @ts-nocheck
import React from "react";
import HungryForFoodCards from "../../Components/HungryForFoodCards";
import { foodCardData } from "../../Data";

export default function HungryForFood() {
  return (
    <section className="py-10 lg:py-20 w-[90%] md:w-[85%] lg:w-[70%] 2xl:w-[65%] m-auto">
      <div>
        <h4 className="text-black text-2xl lg:text-4xl font-switzer font-extrabold text-center">
          Hungry for more than food?
        </h4>
      </div>

      <div className="pt-10 md:grid grid-cols-3 gap-x-3 lg:gap-x-6 space-y-6 md:space-y-0">
        {foodCardData?.map((data, index) => (
          <HungryForFoodCards
            title={data?.title}
            imgSrc={`/images/food-card-${data?.img}.webp`}
            alt={`food-card-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
