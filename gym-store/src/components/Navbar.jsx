import React, { useState } from "react";
import { FaCartArrowDown, FaHeart, FaHome } from "react-icons/fa";
import { IoIosMail, IoIosContact } from "react-icons/io";
import { IoReorderThreeSharp } from "react-icons/io5";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);

  function toggle() {
    setIsNav((prev) => !prev); // Correct toggle function
  }

  return (
    <header className="w-full h-16 bg-[#414141] flex justify-between items-center px-4 md:px-8 relative">
      
      <div >
        <img className="h-16 w-auto " src="./images/logo.png" alt="" />
      </div>
      
      {/* Desktop Navigation (always visible on md screens) */}
      <nav className="w-full hidden md:flex space-x-6 justify-evenly ">
        <a className="text-base text-yellow-100 flex flex-col items-center" href="/">
          <FaHome /> Home
        </a>
        <a className="text-base text-yellow-100 flex flex-col items-center" href="/profile">
          <IoIosContact /> Profile
        </a>
        <a className="text-base text-yellow-100 flex flex-col items-center" href="/about">
          <IoIosMail /> About Us
        </a>
        <a className="text-base text-yellow-100 flex flex-col items-center" href="#">
          <FaHeart /> Wishlist
        </a>
        <a className="text-base text-yellow-100 flex flex-col items-center" href="#">
          <FaCartArrowDown /> Cart
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={toggle} className=" cursor-pointer text-3xl text-yellow-100 md:hidden">
        <IoReorderThreeSharp />
      </button>

      {/* Mobile Navigation (Toggle Menu) */}
      <div
        className={`absolute top-14 left-0 w-full bg-[#414141] flex flex-col items-center py-4 space-y-4 transition-all duration-500 ${
          isNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        } md:hidden`}
      >
        <a className="text-base text-yellow-100 flex flex-col items-center" href="/" onClick={toggle}>
          Home
        </a>
        <a className="text-base text-yellow-100 flex flex-col items-center" href="#" onClick={toggle}>
          Profile
        </a>
        <a className="text-base text-yellow-100 flex flex-col items-center" href="/about" onClick={toggle}>
          About Us
        </a>
        <a className="text-base text-yellow-100 flex flex-col items-center" href="#" onClick={toggle}>
          Wishlist
        </a>
        <a className="text-base text-yellow-100 flex flex-col items-center" href="#" onClick={toggle}>
          Cart
        </a>
      </div>
    </header>
  );
};

export default Navbar;
