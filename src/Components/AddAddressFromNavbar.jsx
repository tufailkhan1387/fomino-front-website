import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { LuMapPin } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import AddAddressModal from "./AddAddressModal";

export default function AddAddressFromNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        display="flex"
        alignItems="end"
        gap={3}
        bg="none"
        _hover={{ bg: "none" }}
      >
        <LuMapPin className="text-white text-2xl bg-[#FFFFFF33] w-10 h-10 rounded-full p-2" />
        <div>
          <h4 className="text-sm text-white font-switzer">Delivery to</h4>
          <p className="text-sm text-white font-switzer">Mckinley Cres</p>
        </div>
        <FaAngleDown className="text-white text-xl" />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <AddAddressModal />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
