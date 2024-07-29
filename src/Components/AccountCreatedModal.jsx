import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";

export default function AccountCreatedModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        width="full"
        bgColor="#E13743"
        border="1px solid #E13743"
        color="white"
        _hover={{ bgColor: "white", color: "#E13743" }}
      >
        Continue
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent height="583px">
          <ModalCloseButton />
          <ModalBody>
            <div className="mt-20 space-y-4">
              <div className="bg-greenColor rounded-full w-12 h-12 mx-auto flex justify-center items-center ">
                <BsCheckLg className="text-white text-4xl" />
              </div>
              <h4 className="text-center text-2xl text-black font-semibold">
                Account created successfully!
              </h4>
              <p className="text-center text-paraColor">
                Your account has been created successfully. You can now place
                orders.
              </p>

              <button
                className="flex justify-center w-full bg-redColor text-white font-semibold rounded-md border border-redColor py-2 hover:bg-white 
                hover:text-redColor duration-300"
              >
                That's great
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
