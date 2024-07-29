import React from "react";

export default function ContactInfo() {
  return (
    <div>
      <div className="p-5 space-y-2">
        <h4 className="text-xl lg:text-2xl font-switzer font-semibold">Contact info</h4>
        <p className="text-sm font-switzer text-paraColor">
          If you have allergies or dietary restrictions, please contact the
          restaurant for dish-specific information .
        </p>
      </div>
      <div className="px-5 py-2 flex justify-between">
        <h4 className="text-paraColor font-switzer">Restaurant contact</h4>
        <p className="text-[#E13743] font-switzer font-medium">+92 312 34567890</p>
      </div>
      <div className="my-2 w-full h-[1px] bg-borderBottom"></div>
      <div className="px-5 py-2 flex justify-between">
        <h4 className="text-paraColor font-switzer">Email</h4>
        <p className="text-[#E13743] font-switzer font-medium">fomino@email.com</p>
      </div>
      <div className="my-2 w-full h-[1px] bg-borderBottom"></div>
    </div>
  );
}
