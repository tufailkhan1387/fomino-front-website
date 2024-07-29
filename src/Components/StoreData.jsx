// @ts-nocheck
import React from "react";
import { Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import TabData from "./TabData";
import StoresNearMe from "./StoresNearMe";
import SpecialForYou from "./SpecialForYou";
import AllStores from "./AllStores";
import { storeTabNames } from "../Data";
export default function StoreData() {
  return (
    <div className="py-10">
      <Tabs variant="unstyled">
        <TabList display="flex" flexWrap="wrap" gap="20px">
          {storeTabNames?.map((data, index) => (
            <TabData tabName={data?.name} key={index + 1} />
          ))}
        </TabList>
        <TabPanels>
          <TabPanel padding="0px">
            <StoresNearMe />
            <SpecialForYou />
            <AllStores />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
