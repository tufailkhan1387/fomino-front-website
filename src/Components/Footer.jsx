import React from "react";
import { TbWorld } from "react-icons/tb";
import { AiOutlineEyeInvisible } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="bg-footerBg pt-20 pb-10">
      <div className=" w-[90%] md:w-[85%] lg:w-[70%] 2xl:w-[60%] m-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-10">
          <div className="space-y-6">
            <img
              src="images/footer-logo.webp"
              alt="footer-logo"
              className="cursor-pointer w-40"
            />
            <div className="flex flex-col gap-y-2">
              <button>
                <img
                  src="/images/google-play-img.webp"
                  alt="google"
                  className="w-36"
                />
              </button>
              <button>
                <img
                  src="/images/app-store-img.webp"
                  alt="google"
                  className="w-36"
                />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm text-white font-switzer font-bold">
              Let’s do this together
            </h4>
            <ul className="space-y-3">
              <li className="text-xs text-white font-switzer font-normal">
                For couriers
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                For restaurants
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                For stores
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                For companies
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Fomino Drive
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm text-white font-switzer font-bold">
              Company
            </h4>
            <ul className="space-y-3">
              <li className="text-xs text-white font-switzer font-normal">
                About us
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Jobs
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Responsibility
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Security
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Investors
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm text-white font-switzer font-bold">
              Useful links
            </h4>
            <ul className="space-y-3">
              <li className="text-xs text-white font-switzer font-normal">
                Support
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Media
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Contact
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Speak up
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm text-white font-switzer font-bold">
              Folllow us
            </h4>
            <ul className="space-y-3">
              <li className="text-xs text-white font-switzer font-normal">
                Fomino blog
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Engineering blog
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Instagram
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Facebook
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                Twitter
              </li>
              <li className="text-xs text-white font-switzer font-normal">
                LinkedIn
              </li>
            </ul>
          </div>
        </div>

        <div className="md:grid grid-cols-3 pt-10 space-y-4 md:space-y-0">
          <div className="flex gap-5">
            <button className="flex items-center gap-2 text-white">
              <TbWorld className="text-white" />
              <span className="text-xs font-switzer font-normal cursor-default">
                English
              </span>
            </button>
            <button className="flex items-center gap-2 text-white">
              <AiOutlineEyeInvisible className="text-white" />
              <span className="text-xs font-switzer font-normal cursor-default">
                Accessibility
              </span>
            </button>
          </div>

          <div className="col-span-2">
            <ul className="flex gap-3 2xl:gap-10">
              <li className="text-xs font-switzer font-normal text-white">
                Accessibility Statement
              </li>
              <li className="text-xs font-switzer font-normal text-white">
              Terms & Conditions
              </li>
              <li className="text-xs font-switzer font-normal text-white">
              Privacy Policy
              </li>
              <li className="text-xs font-switzer font-normal text-white">
              © Fomino 2023
              </li>
            </ul>
          </div>    
        </div>
      </div>
    </footer>
  );
}
