// @ts-nocheck
import React from "react";
import AllResturantCards from "./AllResturantCards";
import resturantCardData from "../Data";
import { BASE_URL } from "../Utils/urls";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { FaBicycle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AllResturants(props) {
  console.log(props)
  return (
    <div>
      <h4 className="text-2xl lg:text-4xl text-white font-switzer font-semibold">
        All restaurants
      </h4>

      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pt-10 pb-10 md:pb-20 space-y-5 md:space-y-0">
        {props.data?.map((res, index) => (
          <div className="shadow-xl rounded-2xl relative ">
            <Link to={props.link}>
              <img src={BASE_URL + res.image} alt={props.alt} className="rounded-t-2xl" />
              <img
                src={BASE_URL + res.logo}
                alt="Meme-bank"
                className="w-12 h-12 absolute top-1/2 right-5 outline outline-white rounded-md"
              />
              <div className="bg-white rounded-b-2xl">
                <div className="border-b border-gray-400 border-dashed py-6 px-5 lg:px-8">
                  <h4 className="text-black font-switzer font-semibold">
                    {res.businessName}
                  </h4>
                  <p className="text-paraColor font-switzer text-sm">
                    {res.address} {res.city} {res.zipCode}
                  </p>
                </div>

                <div className="py-4 px-5 lg:px-8 flex items-center gap-5">
                  <FaBicycle className="text-xl text-paraColor" />
                  <span className="text-paraColor font-switzer font-semibold tracking-wider">
                    {res.deliveryFee} € • {res.deliveryTime} min •{" "}
                  </span>
                  <BsFillEmojiLaughingFill className="text-2xl text-[#FFCB29]" />
                  <span className="text-paraColor font-switzer font-semibold">
                    {res.rating}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
