import React from "react";

export default function CookingTonight() {
  return (
    <section className="bg-[#F2F3F5;]">
      <div className="w-[95%] md:w-[92%] lg:w-[85%] pt-10 lg:pt-20 ml-auto lg:grid grid-cols-3 space-y-10 lg:space-y-0">
        <div className="flex flex-col justify-center space-y-5 md:space-y-10">
          <h4 className="text-2xl lg:text-4xl text-black font-switzer font-extrabold max-w-sm leading-normal">Honey, we’re not cooking tonight</h4>
          <p className="text-sm font-switzer font-normal text-paraColor max-w-sm">
            Get the Apple-awarded Wolt app and choose from 40,000 restaurants
            and hundreds of stores in 20+ countries. Discover and get what you
            want - our courier partners bring it to you.
          </p>

          <div className="flex flex-col gap-y-2">
            <button>
                <img src="/images/google-play-img.webp" alt="google" className="w-36"/>
            </button>
            <button>
                <img src="/images/app-store-img.webp" alt="google" className="w-36"/>
            </button>
          </div>
        </div>

        <div className="col-span-2"> 
            <img src="/images/cooking-tonight-img.webp" alt="cooking-tonight" />
        </div>
      </div>
    </section>
  );
}
