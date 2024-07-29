// @ts-nocheck
import { Textarea } from "@chakra-ui/react";
import React from "react";
import { TfiComment } from "react-icons/tfi";
export default function AddMessage() {
  return (
    <>
      <div className="space-y-6">
        <h4 className="text-black text-xl font-switzer font-semibold">
          Add a message
        </h4>
        <p className="text-sm text-black">
          Please note that your message to the venue may also be seen by the
          courier partner delivering your order 😊
        </p>

        <Textarea placeholder="Write your message.." />

        <button
          className="flex justify-center w-full bg-redColor text-white font-semibold rounded-md border border-redColor py-2 hover:bg-white 
                hover:text-redColor duration-300"
        >
          Done
        </button>
      </div>
    </>
  );
}
