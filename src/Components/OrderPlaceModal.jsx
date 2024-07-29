import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import {BsCheckLg} from "react-icons/bs"

export default function OrderPlaceModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        width="full"
        bgColor="black"
        padding="25px 0px"
        border="1px solid black"
        color="white"
        _hover={{ bgColor: "white", color: "black" }}
      >
        Place Order
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="mt-20 space-y-4">
                <div className="bg-greenColor rounded-full w-12 h-12 mx-auto flex justify-center items-center ">
                    <BsCheckLg className="text-white text-4xl"/>
                </div>
              <h4 className="text-center text-2xl text-black font-semibold">
                Order placed successfully!
              </h4>
              <p className="text-center text-paraColor">
                Your order has been created successfully. You can check status
                in my orders.
              </p>

              <button
                className="flex justify-center w-full bg-redColor text-white font-semibold rounded-md border border-redColor py-2 hover:bg-white 
                hover:text-redColor duration-300"
              >
                View order
              </button>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
