// @ts-nocheck
import SpecialForYouCards from "./SpecialForYouCards";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function SpecialForYou() {
  return (
    <div className="py-10">
      <h4 className="text-2xl lg:text-4xl text-white font-switzer font-semibold">
        Special for you
      </h4>

      <div className="mt-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <SpecialForYouCards
              title="Spring has sprung!"
              para="Get colourful flowers & more with delivery from $25 when ordering from BLUEME20000!"
              imgSrc="/images/resturants/special-card-1.webp"
              bgImg="bg-specialForYouBgOne"
              cardBadge="Free Delivery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SpecialForYouCards
              title="The best bang for your buck"
              para="Get colourful flowers & more with delivery from $25 when ordering from BLUEME20000!"
              imgSrc="/images/resturants/special-card-2.webp"
              bgImg="bg-specialForYouBgTwo"
              cardBadge="Save Now"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SpecialForYouCards
              title="Spring has sprung!"
              para="Get colourful flowers & more with delivery from $25 when ordering from BLUEME20000!"
              imgSrc="/images/resturants/special-card-1.webp"
              bgImg="bg-specialForYouBgOne"
              cardBadge="Free Delivery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SpecialForYouCards
              title="The best bang for your buck"
              para="Get colourful flowers & more with delivery from $25 when ordering from BLUEME20000!"
              imgSrc="/images/resturants/special-card-2.webp"
              bgImg="bg-specialForYouBgTwo"
              cardBadge="Save Now"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SpecialForYouCards
              title="Spring has sprung!"
              para="Get colourful flowers & more with delivery from $25 when ordering from BLUEME20000!"
              imgSrc="/images/resturants/special-card-1.webp"
              bgImg="bg-specialForYouBgOne"
              cardBadge="Free Delivery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SpecialForYouCards
              title="The best bang for your buck"
              para="Get colourful flowers & more with delivery from $25 when ordering from BLUEME20000!"
              imgSrc="/images/resturants/special-card-2.webp"
              bgImg="bg-specialForYouBgTwo"
              cardBadge="Save Now"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
