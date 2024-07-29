/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        switzer: "Switzer",
      },

      backgroundColor: {
        heroSectionBg: "#379465",
        footerBg: "#141414",
        tabColor: "rgba(55, 148, 101, 0.08);"
      },
      backgroundImage: {
        resturantBg: "url('/public/images/resturants/resturant-hero-img.webp')",
        specialForYouBgOne: "url('/public/images/resturants/special-card-1.webp')",
        specialForYouBgTwo: "url('/public/images/resturants/special-card-2.webp')",
        resturantDetailBg: "url('/public/images/resturant-details/details-hero.webp')",
        addressBg: "url('/public/images/resturant-details/address-image.webp')",
        paymentBg: "url('/public/images/payment-bg.webp')",
      },

      colors: {
        paraColor: "rgba(0, 0, 0, 0.60)",
        tabColor: "rgba(0, 0, 0, 0.40)",
        borderBottom: "rgba(0, 0, 0, 0.20)",
        greenColor: "#379465",
        redColor: "#E13743",
        lightGreen:"rgba(64, 135, 93, 0.14)"
      },
      boxShadow: {
        large: "0px 0px 12px rgba(0, 0, 0, 0.2)"
      },
    },
  },
  plugins: [],
}