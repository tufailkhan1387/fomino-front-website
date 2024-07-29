import React, { useState } from 'react'
export default function Header() {
const [color,setColor] = useState(false)
  const openMenu = () => {
    setColor(!color)
  }
  return (
    <header className='absolute top-0 left-0 w-full z-10 py-8 bg-gray-800'>
      <nav class={`bg-${color} text-white p-4`}>
        <div class="container mx-auto">
          <div class="flex items-center justify-between">
            <a href="#home" class="text-2xl font-bold">Your Brand</a>
            <ul class="hidden md:flex space-x-4">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#menu">Menu</a></li>
            </ul>
            <button class="md:hidden block text-white" onClick={openMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
            </button>
          </div>
        </div>
      </nav>
      <div class={`${color ? 'show':'hidden'}  bg-white p-4`}>
        <ul class="flex flex-col space-y-2">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#menu">Menu</a></li>
        </ul>
      </div>
      {/* <nav className='flex flex-col lg:flex-row md:flex-row sm:flex-col  justify-between w-4/5 mx-auto'>
        <div>
          <a href="" className='border-[2px] text-white text-2xl  lg:py-1 lg:px-4 md:py-1 md:px-4  sm:py-1 sm:px-4 font-normal border-white'><span>Tasty </span></a>
        </div>
        <br />
        <div className=' text-left space-x-2 sm:space-x-9 md:space-x-8 lg:space-x-8 text-white text-[10px] '>
          <a href="">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="">CHEF</a>
          <a href="">MENU</a>
          <a href="">RESERVATION</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
        </div>
        <button onClick={openMenu()}>Menu</button>
        <div className='md:hidden block text-white'>
          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
            </div>
          </div>
        </div>
      </nav> */}
    </header>
  );
}