import React from "react";
import { LoginCheck } from "./AuthCheck";

export default function ProtectedRoutes(props) {

  LoginCheck();

  const { Component } = props;
  return (
    <>
   
      <Component />
    </>
  );
}
