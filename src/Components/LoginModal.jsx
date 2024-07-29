import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { RiAppleFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";

import { useLocation, useNavigate } from "react-router-dom";
import { PostApi } from "../ApiClient/PostApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setAccessToken, setUserName } from "../helper/helper";
import { error_toaster, success_toaster } from "../Utils/Toaster";
import Loader from "../Utils/Loader";
import { setEmail, setLoginStatus, setuserId } from "../Utils/AuthCheck";
export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =

    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        console.log(values)
        const response = await PostApi("users/login", {
          email: values.email,
          password: values.password,
          deviceToken: "Token"
        });
        console.log(response)
        if (response.data.status === "1") {
          setUserName(response.data.data.userName);
          setEmail(response.data.data.email)
          setuserId(response.data.data.userName)
          localStorage.setItem('firstName', response.data.data?.firstName ?? "First Name");
          localStorage.setItem('lastName', response.data.data?.lastName ?? "Last Name");
          setLoginStatus(true);
          setAccessToken(response.data.data.accessToken);
          setLoading(false);
          success_toaster(response.data.message);

          onClose();
          navigate('/');

        }
        else {
          setLoading(false);
          // onClose();
          error_toaster(response.data.message)
        }
      },
    });

 

  return (
    <>
      {location.pathname === "/" ? (
        <Button
          onClick={onOpen}
          textColor="black"
          fontSize="sm"
          fontWeight="semibold"
          border="1px"
          borderRadius="full"
          padding="8px 32px"
          bgColor="transparent"
          _hover={{ bgColor: "black", color: "white" }}
        >
          Login
        </Button>
      ) : (
        <Button
          onClick={onOpen}
          textColor="white"
          fontSize="sm"
          fontWeight="semibold"
          border="1px solid white"
          borderRadius="full"
          padding="8px 32px"
          bgColor="transparent"
          _hover={{ bgColor: "white", color: "#379465" }}
        >
          Login
        </Button>
      )}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
           
            {
              loading ? <Loader /> :
                <div className="my-10 space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-black font-switzer">
                      Create an account or log in
                    </h4>
                    <p className="text-paraColor font-switzer">
                      Log in below or create a new Fomino account.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <button className="flex items-center gap-20 text-black  w-full border border-black rounded-md px-5 py-2 hover:bg-black hover:text-white duration-300">
                      <FcGoogle className="text-2xl" />
                      <span className="font-semibold font-switzer">
                        Continue with Google
                      </span>
                    </button>
                    <button className="flex items-center gap-20 text-white bg-black  w-full border border-black rounded-md px-5 py-2 hover:bg-white hover:text-black duration-300">
                      <RiAppleFill className="text-2xl" />
                      <span className="font-semibold font-switzer">
                        Continue with Apple
                      </span>
                    </button>
                    <button
                      className="flex items-center gap-20 text-white  w-full border border-[#1877F2] bg-[#1877F2] rounded-md px-5 py-2 hover:bg-white
   hover:text-[#1877F2] duration-300"
                    >
                      <BsFacebook className="text-2xl" />
                      <span className="font-semibold font-switzer">
                        Continue with Facebook
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center">
                    <div className="w-28 h-[1px] bg-paraColor"></div>
                    <div className="px-4 text-paraColor font-semibold font-switzer">
                      or login with email
                    </div>
                    <div className="w-28 h-[1px] bg-paraColor"></div>
                  </div>

                  <form className="space-y-2" onSubmit={handleSubmit}>
                    <div>
                      <Input onChange={handleChange} name="email" placeholder="Email" />
                      {errors.email && touched.email && (
                        <div className="px-5 text-red-600 space-y-1 pb-1 bg-white">

                          <p>{errors.email}</p>
                        </div>
                      )}
                    </div>
                    <div>
                      <Input onChange={handleChange} name="password" placeholder="Password" />
                      {errors.password && touched.password && (
                        <div className="px-5 text-red-600 space-y-1 pb-1 bg-white">
                          <p>{errors.password}</p>
                        </div>
                      )}
                    </div>
                    <div>
                      <button type="submit" className="w-full bg-red-500 text-white font-bold text-center py-2">Submit</button>
                    </div>
                  </form>

                  <div>
                    <p className="text-sm font-switzer text-paraColor">
                      Please visit fomino
                      <span className="text-[#009DE0] cursor-pointer">
                        {" "}
                        Privacy Statement
                      </span>{" "}
                      in English to learn about personal data processing at fomino.
                      You can access your local privacy statement related to your
                      fomino account in the next phase of registration after you
                      have provided the country and language preference applicable
                      to you
                    </p>
                  </div>
                </div>
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
