import React from "react";
import { Button, Select, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import LocationModal from "./LocationModal";
export default function AddAddressModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <h4 className="text-2xl text-black font-switzer font-semibold mt-8 mb-4">
        Add new address
      </h4>

      <div className="space-y-6">
        <Select placeholder="Country">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Referral code (optional)">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Button
          onClick={onOpen}
          width="full"
          bgColor="#E13743"
          border="1px solid #E13743"
          color="white"
          _hover={{ bgColor: "white", color: "#E13743" }}
        >
          Next
        </Button>

        <div>
          <img src="/images/house.webp" alt="house" />
        </div>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent  height="612px">
            <ModalCloseButton />
            <ModalBody>
              <LocationModal />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
