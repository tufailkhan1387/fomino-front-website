import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { GiChickenLeg, GiChopsticks } from "react-icons/gi";
import { FaPizzaSlice, FaStar } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import CutlearyData from "./CutlearyData";
export default function DetailsTab() {
  return (
    <Tabs variant="unstyled">
      <TabList display="flex" flexWrap="wrap" gap="20px">
        <Tab
          _selected={{ color: "#379465", bg: "rgba(55, 148, 101, 0.08)" }}
          textTransform="uppercase"
          fontWeight="semibold"
          color="rgba(0, 0, 0, 0.60)"
          padding="4px"
        >
          <span>Cultery</span>
          <GiChopsticks className="text-2xl text-amber-900" />
        </Tab>
        <Tab
          _selected={{ color: "#379465", bg: "rgba(55, 148, 101, 0.08)" }}
          textTransform="uppercase"
          fontWeight="semibold"
          color="rgba(0, 0, 0, 0.60)"
          padding="4px"
        >
          <span>Famino special</span>
          <FaStar className="text-2xl text-yellow-500" />
        </Tab>
        <Tab
          _selected={{ color: "#379465", bg: "rgba(55, 148, 101, 0.08)" }}
          textTransform="uppercase"
          fontWeight="semibold"
          color="rgba(0, 0, 0, 0.60)"
          padding="4px"
        >
          <span>Chicken</span>
          <GiChickenLeg className="text-2xl text-amber-900" />
        </Tab>
        <Tab
          _selected={{ color: "#379465", bg: "rgba(55, 148, 101, 0.08)" }}
          textTransform="uppercase"
          fontWeight="semibold"
          color="rgba(0, 0, 0, 0.60)"
          padding="4px"
        >
          <span>Pizza</span>
          <FaPizzaSlice className="text-2xl text-yellow-500" />
        </Tab>
        <Tab
          _selected={{ color: "#379465", bg: "rgba(55, 148, 101, 0.08)" }}
          textTransform="uppercase"
          fontWeight="semibold"
          color="rgba(0, 0, 0, 0.60)"
          padding="4px"
        >
          <span>Beverages</span>
          <BiSolidDrink className="text-2xl text-orange-500" />
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel padding="0px">
          <CutlearyData />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
