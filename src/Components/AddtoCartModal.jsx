// @ts-nocheck
import React from "react";
import { FiInfo } from "react-icons/fi";
import { HiShare } from "react-icons/hi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import ChooseServing from "./ChooseServing";
import ProductInfoModal from "./ProductInfoModal";
import SeeMoreInfoModal from "./SeeMoreInfoModal";
import { BiPlus } from "react-icons/bi";
import { RiSubtractFill } from "react-icons/ri";

export default function AddtoCartModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="black"
        color="white"
        borderRadius="full"
        width="40px"
        height="40px"
        fontSize="18px"
        _hover={{
          border: "1px solid black",
          bgColor: "white",
          color: "black",
        }}
        border="1px solid black"
      >
        +
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div>
              <img
                src="/images/resturant-details/add-to-cart.webp"
                alt="add-to-cart"
                className="w-60 h-36 mx-auto"
              />
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex justify-between items-center">
              <h4 className="text-2xl text-black font-switzer font-bold">
                Family Bundle
              </h4>
              <div className="flex items-center gap-4">
                <HiShare className="text-[#838383] text-2xl cursor-pointer" />
                <FiInfo className="text-[#838383] text-2xl cursor-pointer" />
              </div>
            </div>
            <div>
              <div>
                <h4 className="font-switzer text-greenColor font-semibold my-4">
                  10.00 €
                </h4>
                <p className="text-sm text-paraColor font-switzer">
                  Bring die ganze Familie an den Tisch! Zu 1x 20er Chicken
                  McNuggetsR erhältst du 2 Klassiker, 2 Snack Burger und 2x
                  große Pommes Frites inkl. Sauce.
                </p>
                <div className="my-2 w-full h-[1px] bg-borderBottom"></div>

                <ChooseServing />
              </div>
              <div className="my-2 w-full h-[1px] bg-borderBottom"></div>
            </div>

            <div>
              <ProductInfoModal />
            </div>
            <div>
              <SeeMoreInfoModal />
            </div>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="space-between" gap="10px">
            <div className="shadow-large w-40 h-14 rounded-full flex items-center justify-around text-[#707175]">
              <button className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-black hover:text-white duration-300">
                <RiSubtractFill />
              </button>
              <span className="text-lg font-switzer">3</span>
              <button className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-black hover:text-white duration-300">
                <BiPlus />
              </button>
            </div>
            <Button
              bgColor="black"
              display="flex"
              color="white"
              justifyContent="space-between"
              borderRadius="full"
              width="300px"
              height="50px"
              _hover={{
                bgColor: "white",
                color: "black",
                border: "1px solid black",
              }}
              border="1px solid black"
            >
              <div className="text-xl font-switzer font-semibold">
                Add to cart
              </div>
              <div className="text-xl font-switzer font-semibold">€ 0.97</div>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
