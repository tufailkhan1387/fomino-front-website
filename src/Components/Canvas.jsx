// @ts-nocheck
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { canvasCard } from "../Data";
import AddMessage from "./AddMessage";
import { TfiComment } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Canvas() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="none"
        onClick={onOpen}
        position="relative"
      >
        <FaShoppingCart className="text-3xl text-white" />
        <div className="w-5 h-5 flex justify-center items-center text-black bg-white rounded-full text-sm absolute top-0 left-10">
          3
        </div>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <h4 className="text-2xl text-black font-semibold font-switzer">
              Your order
            </h4>
          </DrawerHeader>

          <DrawerBody padding="10px 0px">
            <div>
              <h4 className="px-6 text-xl text-black font-switzer font-semibold">
                Order items
              </h4>
              {canvasCard?.map((data, index) => (
                <div className="pt-6 px-6 flex items-center gap-8">
                  <div>
                    <img
                      src={`/images/store-details/canvas-${data?.img}.webp`}
                      alt={`canvas-card-${index + 1}`}
                      className="w-20"
                    />
                  </div>
                  <div>
                    <h4 className="font-switzer font-semibold text-black">
                      {data?.name}
                    </h4>
                    <p className="text-sm text-paraColor font-switzer">
                      {data?.serving}
                    </p>
                    <span className="text-sm text-[#E13743] font-semibold font-switzer">
                      {data?.price}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <div
                      className="w-8 h-8 rounded-md border-2 border-redColor text-redColor flex justify-center items-center cursor-pointer hover:bg-redColor
                 hover:text-white duration-300"
                    >
                      <RiSubtractFill />
                    </div>
                    <div>01</div>
                    <div
                      className="w-8 h-8 rounded-md border-2 border-[#E13743] text-white bg-[#E13743] flex justify-center items-center cursor-pointer 
                 hover:bg-white hover:text-redColor duration-300"
                    >
                      <AiOutlinePlus />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-4 w-full h-[1px] bg-borderBottom"></div>
            {/* <div className="flex gap-3">
              <TfiComment className="text-2xl text-redColor" />
              <div>
                <h4 className="text-black font-switzer font-semibold">
                  Add a message for the restaurant
                </h4>
                <p className="text-sm text-tabColor">
                  Special requests, allergies, dietary instructions?
                </p>
              </div>
            </div> */}
          </DrawerBody>

          <DrawerFooter display="flex" justifyContent="center">
            <Link to="/checkout" className="bg-black py-4 px-10 rounded-full space-x-6">
                <span className="bg-white p-1 text-[#222222] font-switzer font-semibold rounded-full">01</span>
                <span className="text-white font-semibold">Go to checkout</span>
                <span className="text-white text-xl font-semibold">2,19 €</span>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
