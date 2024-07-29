import React from "react";
import Navbar from "../../Components/Navbar";
import GoogleLocationSearch from "./GoogleLocationSearch";
import GoogleMapWithAutocomplete from "../../Components/GoogleMapWithAutocomplete";
import { PostApi } from "../../ApiClient/PostApi";
import { error_toaster } from "../../Utils/Toaster";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const handlePlaceSelect = async (place, latLng) => {
    console.log('Selected Place:', place);
    console.log('LatLng:', latLng);

    const res = await PostApi("frontsite/home", {
      lat: latLng.lat,
      lng: latLng.lng
    });
    if(res.data.status === "0"){
      error_toaster(res.data.message);
    }
    else{
      navigate("/resturants",{state:{data:res.data.data}});
    }
  };
  return (
    <section className="relative">
      <Navbar bgColor="bg-white " />
      <div className="bg-heroSectionBg pt-28">
        <div className="lg:grid grid-cols-2 w-[85%] md:w-[80%] lg:w-[70%] 2xl:w-[65%] m-auto pt-20 space-y-12 lg:space-y-0">
          <div className="space-y-10">
            <h1 className="text-4xl md:text-[52px] text-white font-switzer font-extrabold max-w-sm leading-normal">
              Discover and get great food.
            </h1>
            <GoogleMapWithAutocomplete onPlaceSelect={handlePlaceSelect} />

            {/* <GoogleLocationSearch /> */}
          </div>
          <div className="flex items-center justify-center lg:justify-end gap-10">
            <div>
              <img
                src="/images/hero-img-three.webp"
                alt="hero-img"
                className="w-[110px] object-contain"
              />
            </div>
            <div>
              <img
                src="/images/hero-img-one.webp"
                alt="hero-img"
                className="w-[250px] object-contain"
              />
              <img
                src="/images/hero-img-two.webp"
                alt="hero-img"
                className="w-[250px] mt-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
