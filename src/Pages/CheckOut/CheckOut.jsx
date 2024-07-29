// @ts-nocheck
import React from "react";
import Navbar from "../../Components/Navbar";
import AddAddress from "../../Components/AddAddress";
import { FaDoorOpen } from "react-icons/fa";
import YourOrder from "../../Components/YourOrder";
import { yourOrder } from "../../Data";
import Payment from "../../Components/Payment";
import OrderPlaceModal from "../../Components/OrderPlaceModal";
import AddMessage from "../../Components/AddMessage";

export default function CheckOut() {
  return (
    <section className="relative">
      <Navbar bgColor="bg-white" />

      <div>
        <img src="/images/checkout.webp" alt="checkout" className="" />
      </div>

      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] mx-auto py-10 lg:py-20">
        <div className="lg:grid grid-cols-2 gap-20 space-y-6 lg:space-y-0">
          <div className="space-y-5 lg:space-y-10">
            <AddAddress />

            <div className="flex items-center gap-3">
              <FaDoorOpen className="text-black text-2xl" />
              <span className="text-xl font-semibold">Your Order</span>
            </div>

            <div className="p-5 shadow-large rounded-lg space-y-4 mt-6">
              {yourOrder?.map((data, index) => (
                <YourOrder
                  name={data?.name}
                  imgSrc={data?.img}
                  price={data?.price}
                  quantity={data?.quantity}
                  key={index + 1}
                  alt={index + 1}
                />
              ))}
            </div>

            <Payment />
          </div>

          <div className="space-y-6">
            <div className="px-5 py-10 shadow-large rounded-lg space-y-4">
              <AddMessage />
            </div>

            <div className="px-5 py-10 shadow-large rounded-lg space-y-4">
              <h4 className="text-xl font-semibold font-switzer">
                Prices in EUR, incl. taxes
              </h4>
              <div className="flex flex-col gap-20">
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <h4 className="text-paraColor font-semibold">Subtotal</h4>
                    <p className="text-paraColor font-semibold">€ 11.2</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-paraColor font-semibold">
                      Service fee
                    </h4>
                    <p className="text-paraColor font-semibold">€ 2.0</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-paraColor font-semibold">
                      Delivery fee
                    </h4>
                    <p className="text-paraColor font-semibold">€ 3.2</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-black font-semibold text-xl">Total</h4>
                    <p className="text-black  font-semibold text-xl">€ 11.6</p>
                  </div>
                  <div className="w-full h-[1px] bg-borderBottom my-2"></div>
                  <div className="relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Discount code"
                      className="bg-[#F4F4F4] w-full px-5 py-4 rounded-md outline-none"
                    />
                    <button
                      className="bg-black py-3 px-4 border border-black rounded-lg text-white text-sm hover:bg-transparent hover:text-black duration-300 
                absolute right-2 top-1"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="mt-10">
                  <OrderPlaceModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
