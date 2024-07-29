// @ts-nocheck
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import GoogleMapComp from "./GoogleMapComp";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { PiMapPinBold, PiPersonSimpleBike } from "react-icons/pi";
import { BiTime } from "react-icons/bi";
import ContactInfo from "./ContactInfo";

export default function SeeMoreInfoModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        width="full"
        bgColor="white"
        // _hover={{ bgColor: "none" }}
        display="flex"
        justifyContent="space-between"
      >
        <h4 className="text-sm font-switzer font-semibold text-black">
          See more info
        </h4>
        <FaAngleRight className="cursor-pointer" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent height="828px">
          <ModalHeader display="flex" justifyContent="space-between">
            <button
              className="bg-[#F4F5FA] rounded-full w-10 h-10 flex justify-center items-center"
              onClick={onClose}
            >
              <FaArrowLeft />
            </button>

            <h4 className="text-xl text-black font-switzer font-semibold">
              See More Info
            </h4>
            <button
              className="bg-[#F4F5FA] rounded-full w-10 h-10 flex justify-center items-center"
              onClick={onClose}
            >
              <RxCross2 />
            </button>
          </ModalHeader>
          <ModalBody padding="0px" marginTop="10px">
            <GoogleMapComp />

            <div className="p-3 flex justify-between mt-4">
              <div className="flex gap-3 items-center">
                <BsFillEmojiSmileFill className="text-yellow-500 text-2xl" />
                <span className="font-switzer text-paraColor">Ratings</span>
              </div>

              <div className="font-switzer">
                4.9
                <span> (256)</span>
              </div>
            </div>
            <div className="my-2 w-full h-[1px] bg-borderBottom"></div>
            <div className="p-3 flex justify-between">
              <div className="flex gap-3 items-center">
                <PiMapPinBold className="text-black text-2xl" />
                <span className="font-switzer text-paraColor">Location</span>
              </div>

              <div className="font-switzer">Lahore</div>
            </div>
            <div className="my-2 w-full h-[1px] bg-borderBottom"></div>
            <div className="p-3 flex justify-between">
              <div className="flex gap-3 items-center">
                <PiPersonSimpleBike className="text-black text-2xl" />
                <span className="font-switzer text-paraColor">
                  Estd. delivery time
                </span>
              </div>

              <div className="font-switzer">20-35 mins</div>
            </div>
            <div className="my-2 w-full h-[1px] bg-borderBottom"></div>
            <div className="p-3 flex justify-between">
              <div className="flex gap-3 items-center">
                <BiTime className="text-black text-2xl" />
                <span className="font-switzer text-paraColor">
                  Opening hours
                </span>
              </div>

              <div className="font-switzer">20-35 mins</div>
            </div>
            <div className="my-2 w-full h-[1px] bg-borderBottom"></div>
            <ContactInfo />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
