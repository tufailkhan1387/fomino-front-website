import { createBrowserRouter } from "react-router-dom";
import Resturants from "../Pages/ResturantPage/Resturants";

import DidYouKnow from "../Pages/HomePage/DidYouKnow";
import HeroSection from "../Pages/HomePage/HeroSection";
import WhatIsFomino from "../Pages/HomePage/WhatIsFomino";
import CookingTonight from "../Pages/HomePage/CookingTonight";
import HungryForFood from "../Pages/HomePage/HungryForFood";

import Footer from "../Components/Footer";
import GoogleMap from "../Components/GoogleMap";
import NavBar from "../Pages/NavBar";

export const router = createBrowserRouter([
  {
    path: "/navbar",
    element: (
      <>
        <NavBar />
        
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <HeroSection />
        <WhatIsFomino />
        <DidYouKnow />
        <CookingTonight />
        <HungryForFood />
        <Footer />
      </>
    ),
  },
  {
    path: "/resturants",
    element: <Resturants />,
  },
  {
    path: "/map",
    element: <GoogleMap />,
  },
]);
