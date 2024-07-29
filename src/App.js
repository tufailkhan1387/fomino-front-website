// @ts-nocheck
import './App.css';
import { RouterProvider } from "react-router-dom"

import { ChakraProvider } from '@chakra-ui/react';

import { router } from './Routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <section className='font-switzer'>
        <ChakraProvider>
       < Toaster />
        <RouterProvider router={router}></RouterProvider>
          {/* <Router>
            <Routes>
              <Route exact path='/' element={<>
                <HeroSection />
                <WhatIsFomino />
                <DidYouKnow />
                <CookingTonight />
                <HungryForFood />
                <Footer />
              </>} />

              <Route path='/resturants' element={<Resturants />} />
              <Route path='/resturant_details' element={<ResturantDetailsData />} />
              <Route path="/store_details" element={<StoreDetails />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Routes>
          </Router> */}
        </ChakraProvider>
      </section>
    </>
  );
}

export default App;
