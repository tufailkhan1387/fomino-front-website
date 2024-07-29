import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { PinInput, PinInputField } from "@chakra-ui/react";
import AccountCreatedModal from "./AccountCreatedModal";

export default function OTPModal() {
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

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="space-between">
            <button
              className="rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#F4F5FA]"
              onClick={onClose}
            >
              <FaArrowLeft />
            </button>
            <button
              className="rounded-md w-8 h-8 flex justify-center items-center hover:bg-[#F4F5FA]"
              onClick={onClose}
            >
              <RxCross2 />
            </button>
          </ModalHeader>
          <ModalBody>
            <div className="">
              <div className="space-y-3">
                <img
                  src="/images/confirm-email.webp"
                  alt="confirm-email"
                  className="w-36 mx-auto"
                />
                <h4 className="text-xl font-switzer font-semibold text-black">
                  Enter your code
                </h4>
                <p className="text-paraColor font-switzer">
                  We’ve sent a verification code to +923240110040. Enter the
                  5-digit code below to confirm your phone number.
                </p>

                <HStack>
                  <PinInput otp size="lg">
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
                <AccountCreatedModal />
                <button
                  className="flex justify-center w-full bg-redColor text-white font-semibold rounded-md border border-redColor py-[6px] hover:bg-white 
                hover:text-redColor duration-300"
                >
                  Send Again
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
