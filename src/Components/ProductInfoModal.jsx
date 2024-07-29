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

export default function ProductInfoModal() {
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
          Product info
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
              Product Info
            </h4>
            <button
              className="bg-[#F4F5FA] rounded-full w-10 h-10 flex justify-center items-center"
              onClick={onClose}
            >
              <RxCross2 />
            </button>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-3 my-6">
              <h4 className="text-2xl text-black font-switzer font-semibold">
                Fish & Chips
              </h4>
              <p className="text-paraColor font-switzer ">
                with sour cream, smoked salmon, Spanish potato chips, dill,
                salmon caviar, amalfi lemon
              </p>
            </div>
            <div className="space-y-3 my-6">
              <h4 className="text-2xl text-black font-switzer font-semibold">
                Allergens
              </h4>
              <ul>
                <li className="text-paraColor text-sm font-switzer ">
                  - contains wheat
                </li>
                <li className="text-paraColor text-sm font-switzer ">
                  - contains fish or products derived therefrom
                </li>
                <li className="text-paraColor text-sm font-switzer ">
                  - contains soybeans or products derived therefrom
                </li>
                <li className="text-paraColor text-sm font-switzer ">
                  - contains mustard or products derived therefrom
                </li>
              </ul>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
