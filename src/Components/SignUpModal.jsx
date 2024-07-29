import React, { useState } from "react";
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
  Select,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OTPModal from "./OTPModal";
import { useLocation } from "react-router-dom";

export default function SignUpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
  };

  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <Button
          onClick={onOpen}
          textColor="white"
          fontSize="sm"
          fontWeight="semibold"
          border="1px solid black"
          borderRadius="full"
          padding="8px 32px"
          bgColor="black"
          _hover={{ bgColor: "transparent", color: "black" }}
        >
          Sign up
        </Button>
      ) : (
        <Button
          onClick={onOpen}
          textColor="#379465"
          fontSize="sm"
          fontWeight="semibold"
          border="1px solid white"
          borderRadius="full"
          padding="8px 32px"
          bgColor="white"
          _hover={{ bgColor: "transparent", color: "white" }}
        >
          Sign up
        </Button>
      )}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="my-10 space-y-6">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-black font-switzer">
                  Create an account
                </h4>
                <Select placeholder="Country">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <div className="grid grid-cols-2 gap-5">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={handlePhoneChange}
                    inputStyle={{ width: "120px", height: "40px" }}
                  />
                  <div className="col-span-2">
                    <Input placeholder="Last name" />
                  </div>
                </div>
                <Select placeholder="Referral code (optional)">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>

                <div className="">
                  <Checkbox size="md" borderColor="black">
                    <span className="text-black text-sm font-switzer">
                      I've read and agree with the{" "}
                      <span className="underline">User Terms of Service.</span>
                    </span>
                  </Checkbox>
                </div>

                <OTPModal />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
