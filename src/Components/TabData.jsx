import { Tab } from "@chakra-ui/react";
import React from "react";

export default function TabData(props) {
  return (
    <div>
      <Tab
        _selected={{ color: "black", bg: "#FFAE00", border: "#FFAE00" }}
        border="1px solid lightgray"
        borderRadius="20px"
        color="white"
        fontSize="16px"
        fontWeight="600"
      >
        {props.tabName}
      </Tab>
    </div>
  );
}
