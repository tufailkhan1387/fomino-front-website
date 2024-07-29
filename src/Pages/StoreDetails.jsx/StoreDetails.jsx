import React from "react";
import Navbar from "../../Components/Navbar";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { MdInfo } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Footer from "../../Components/Footer";
import StoreItemList from "../../Components/StoreItemList";

export default function StoreDetails() {
  return (
    <section>
      <Navbar />

      <div className="relative flex items-end bg-resturantDetailBg bg-no-repeat bg-cover bg-center pt-40 h-[500px] before:absolute before:bg-paraColor before:w-full before:h-[500px] before:top-0 before:left-0">
        <div className="w-[90%] lg:w-[85%] mx-auto relative z-50 pb-16 flex items-center gap-5">
          <img
            src="/images/resturants/memebank-img.webp"
            alt="Meme-bank"
            className="w-28 h-28 outline outline-white rounded-sm"
          />
          <div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-white font-switzer font-semibold">
              Flink Karl Liebknecht
            </h4>
            <p className="text-lg md:text-xl text-white font-switzer">
              Fruhstuck, Kaffee
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 w-[90%] lg:w-[85%] mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <MdOutlineWatchLater className="text-3xl" />
              <h4 className="text-black text-sm font-switzer font-semibold">
                Open until 9:45 PM
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <BsFillEmojiLaughingFill className="text-2xl text-[#FFCB29]" />
              <h4 className="text-black text-sm font-switzer font-semibold">
                9.8
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <MdInfo className="text-2xl text-greenColor" />
              <h4 className="text-greenColor text-sm font-switzer font-semibold">
                See more information
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaUsers className="text-2xl text-greenColor" />
            <h4 className="text-greenColor text-sm font-switzer font-semibold">
              Order together
            </h4>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-borderBottom"></div>
      <StoreItemList />
      <Footer />
    </section>
  );
}
