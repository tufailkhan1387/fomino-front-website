import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { RiEBike2Line } from "react-icons/ri";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import AddAddressModal from "./AddAddressModal";

export default function AddAddress() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="p-4 shadow-large rounded-lg space-y-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <LuMapPin className="text-greenColor text-2xl" />

          <div className="flex gap-3 items-center text-paraColor font-semibold">
            Please add a delivery address
            <FaAngleRight />
          </div>
        </div>
        <div className="">
          <Button
            onClick={onOpen}
            colorScheme="none"
            backgroundColor="rgba(64, 135, 93, 0.14)"
            fontWeight="semibold"
            color="#40875D"
            borderRadius="md"
            padding="8px 16px"
          >
            Add
          </Button>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <AddAddressModal />
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div className="flex gap-5">
        <RiEBike2Line className="text-greenColor text-2xl" />
        <span className="text-black font-semibold">Deliver in 30 - 35 min</span>
      </div>
    </div>
  );
}
