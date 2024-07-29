import { Button, Input, Select } from "@chakra-ui/react";
import GoogleMapComp from "../Components/GoogleMapComp";
import React from "react";

export default function AddressDetailsModal() {
  return (
    <div>
      <h4 className="text-2xl text-black font-switzer font-semibold mt-8 mb-4">
        Address details
      </h4>

      <GoogleMapComp />

      <div className="space-y-4 my-10">
        <Select placeholder="Pakistan" color="black" fontWeight="semibold">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="House" color="black" fontWeight="semibold">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Input placeholder="Enter street number" />
        <Input placeholder="Building name" />
        <Input placeholder="Falt/ Apt no." />

        <button
          className="flex justify-center w-full bg-redColor text-white font-semibold rounded-md border border-redColor py-2 hover:bg-white 
                hover:text-redColor duration-300"
        >
          Save address
        </button>
      </div>
    </div>
  );
}
