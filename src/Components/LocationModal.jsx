import { Button, Select, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { typeOflocation } from "../Data";
import AddressDetailsModal from "./AddressDetailsModal";

export default function LocationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <h4 className="text-2xl text-black font-switzer font-semibold mt-8 mb-4">
        What kind of location is this?
      </h4>

      <div className="space-y-4">
        {typeOflocation?.map((data, index) => (
          <Button
            onClick={onOpen}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="full"
            border="1px solid lightgray"
            backgroundColor="white"
            fontWeight="semibold"
            color="black"
          >
            <span>{data?.name}</span> <FaAngleRight />
          </Button>
        ))}
      </div>
      {/* <Button
          onClick={onOpen}
          width="full"
          bgColor="#E13743"
          border="1px solid #E13743"
          color="white"
          _hover={{ bgColor: "white", color: "#E13743" }}
        >
          Save address
        </Button> */}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AddressDetailsModal />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
