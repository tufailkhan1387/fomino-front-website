// @ts-nocheck
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Checkbox,
} from "@chakra-ui/react";
import PaymentInputFields from "./PaymentInputFields";

export default function PaymentModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
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
            <div className="mt-8 space-y-6">
              <h4 className="text-2xl text-black font-semibold ">
                Add payment method
              </h4>

              <div className="relative bg-paymentBg p-5 bg-cover bg-center w-full before:absolute before:bg-[#222222EB] before:top-0 before:left-0 before:w-full before:h-full">
                <div className="relative z-50">
                  <h4 className="text-end text-white">Credit / Debit</h4>

                  <div className="space-y-4">
                    <PaymentInputFields name="Card number" />

                    <div className="grid grid-cols-2 gap-5">
                      <PaymentInputFields name="Expiration date" />
                      <PaymentInputFields name="Security code" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <Checkbox size="md" borderColor="black">
                  <span className="text-black text-sm font-switzer">
                    Save this payment method for next use
                  </span>
                </Checkbox>
              </div>

              <div>
                <button className="flex justify-center w-full bg-redColor text-white font-semibold rounded-md border border-redColor py-2 hover:bg-white 
                hover:text-redColor duration-300">
                  Continue
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
