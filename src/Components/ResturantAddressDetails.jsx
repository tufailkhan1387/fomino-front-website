import React from "react";

export default function ResturantAddressDetails() {
  return (
    <div className="bg-addressBg bg-cover bg-center lg:h-[550px] w-full pt-6 grid md:grid-cols-2 lg:grid-cols-6">
      <div className="space-y-4 md:border-r lg:col-span-2 mt-5 md:mt-10 mb:5 md:mb-10 lg:mb-20 px-12">
        <h4 className="text-paraColor font-switzer max-w-xs">
          McDonald´s Am Ostbahnhof 9 Systemgastronomie Oliver Mix Ostbahnhof
          e.K. Am Ostbahnhof 9 10243 Berlin Legal representative: Oliver Mix
          91079@restaurant.de.mcd.com Company register no: HRA554777B VAT
          number: DE292397471
        </h4>
        <h6 className="text-sm text-black font-switzer font-semibold">
          See similar venues
        </h6>
        <p className="text-sm text-greenColor font-switzer font-semibold">
          Burger, American
        </p>
      </div>

      <div className="space-y-4 lg:border-r  mt-5 lg:mt-10 mb:5 md:mb-10 lg:mb-20 px-12">
        <h4 className="text-black font-switzer font-semibold">Address</h4>
        <ul className="space-y-2">
          <li className="text-xs font-switzer">Am Ostbahnhof 9</li>
          <li className="text-xs font-switzer text-paraColor">10243 Berlin</li>
          <li className="text-xs font-switzer text-greenColor font-semibold">
            See map
          </li>
        </ul>
      </div>

      <div className="space-y-4 md:border-r lg:col-span-2  mt-5 lg:mt-10 mb:5 md:mb-10 lg:mb-20 px-12">
        <h4 className="text-black font-switzer font-semibold">
          Delivery times
        </h4>
        <div className="flex justify-between">
          <ul className="space-y-4">
            <li className="text-xs font-switzer">Monday</li>
            <li className="text-xs font-switzer">Tuesday</li>
            <li className="text-xs font-switzer">Wednesday</li>
            <li className="text-xs font-switzer">Thursday</li>
            <li className="text-xs font-switzer">Friday</li>
            <li className="text-xs font-switzer">Saturday</li>
            <li className="text-xs font-switzer">Sunday</li>
          </ul>
          <ul className="space-y-4">
            <li className="text-xs font-switzer text-paraColor">
              9:00 AM–12:00 AM
            </li>
            <li className="text-xs font-switzer text-paraColor">
              9:00 AM–12:00 AM
            </li>
            <li className="text-xs font-switzer text-paraColor">
              9:00 AM–12:00 AM
            </li>
            <li className="text-xs font-switzer text-paraColor">
              9:00 AM–12:00 AM
            </li>
            <li className="text-xs font-switzer text-paraColor">
              9:00 AM–12:00 AM
            </li>
            <li className="text-xs font-switzer text-paraColor">
              9:00 AM–12:00 AM
            </li>
            <li className="text-xs font-switzer text-paraColor">
              9:00 AM–12:00 AM
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-2 mt-5 lg:mt-10 mb-20 px-12">
        <h4 className="font-semibold font-switzer">More information</h4>
        <div className="text-sm text-greenColor font-switzer font-semibold">
          +92 123456789
        </div>
        <div className="text-sm text-greenColor font-switzer font-semibold">
          Visit website
        </div>
        <p className="text-xs font-switzer text-paraColor">
          Prices include VAT (excluding additional shipping costs that may
          apply).
        </p>
      </div>
    </div>
  );
}
