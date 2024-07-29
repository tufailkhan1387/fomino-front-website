import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalHeader,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function ConfirmMailModal() {
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
        Next
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent height="630px">
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
            <div className="my-10">
              <div className="space-y-3">
                <img
                  src="/images/confirm-email.webp"
                  alt="confirm-email"
                  className="w-36 mx-auto"
                />
                <h4 className="text-xl font-switzer font-semibold text-black">
                  Great, check your inbox!
                </h4>
                <p className="text-paraColor font-switzer">
                  We've just sent a sign-in link to
                  sigitechnologiessocial@gmail.com. Please check your spam
                  folder in case you didn't get the email.
                </p>

                <button
                  className="flex justify-center w-full bg-redColor text-white font-semibold rounded-md border border-redColor py-2 hover:bg-white 
                hover:text-redColor duration-300"
                >
                  Resend email
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
