import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { FiInfo } from "react-icons/fi";
import { chooseServing } from "../Data";

export default function ChooseServing(props) {
  return (
    <>
      {chooseServing?.map((data, index) => (
        <>
          <div className="flex justify-between">
            <div>
              <h4 className="text-black font-switzer font-semibold">
                Choose serving
              </h4>
              <p className="text-paraColor text-sm font-switzer">
                Your must select at last one item-
              </p>
            </div>
            <FiInfo className="text-[#838383] text-2xl cursor-pointer" />
          </div>

          {data?.person?.map((res, index) => (
            <div className="my-4 flex justify-between">
              <Checkbox
                colorScheme="green"
                color="black"
                fontSize="14px"
                fontWeight="600"
                size="md"
              >
                {res?.serving}
              </Checkbox>
              <p className="text-paraColor font-switzer font-semibold">
                {res?.price}
              </p>
            </div>
          ))}
          {data?.addOn?.map((res, index) => (
            <div className="my-4 flex justify-between">
              <Checkbox
                colorScheme="green"
                color="black"
                fontSize="14px"
                fontWeight="600"
                size="md"
              >
                {res?.name}
              </Checkbox>
              <p className="text-paraColor font-switzer font-semibold">
                {res?.price}
              </p>
            </div>
          ))}
        </>
      ))}
    </>
  );
}
