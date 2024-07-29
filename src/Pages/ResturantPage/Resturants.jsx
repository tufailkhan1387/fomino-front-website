// @ts-nocheck
import React from "react";
import Navbar from "../../Components/Navbar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { GiKnifeFork } from "react-icons/gi";
import { PiBagLight } from "react-icons/pi";
import ResturantData from "../../Components/ResturantData";
import Footer from "../../Components/Footer";
import StoreData from "../../Components/StoreData";
import { useLocation } from "react-router-dom";

export default function Resturants() {
  const location = useLocation();

  return (
    <section>
      <Navbar />

      <div className="bg-resturantBg bg-no-repeat bg-cover bg-center h-[650px] pt-40">
        <div className="w-[90%] lg:w-[80%] m-auto">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList
              bgColor="#EFEDEA"
              width="263px"
              margin="auto"
              borderRadius="28px"
              padding="4px"
            >
              <Tab
                display="flex"
                gap="6px"
                _selected={{ color: "black", bg: "white" }}
              >
                <GiKnifeFork className="text-2xl" />
                <span className="font-switzer">Restaurants</span>
              </Tab>
              <Tab
                display="flex"
                gap="6px"
                _selected={{ color: "black", bg: "white" }}
              >
                <PiBagLight className="text-2xl" />
                <span className=" font-switzer">Store</span>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel padding="0px">
                <ResturantData data={location?.state?.data?.restaurantList} />
              </TabPanel>
              <TabPanel>
                <StoreData />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <Footer />
      </div>
    </section>
  );
}
