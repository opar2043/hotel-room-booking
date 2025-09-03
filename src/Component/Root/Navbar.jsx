import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../Hook/useAuth";

const Navbar = () => {
  const { openDrawer, cart } = useAuth();

  return (
    <div className="navbar bg-[#0A0C15] sticky top-0 z-50 px-8 py-3 border-b border-gray-700/40">
      {/* Left - Brand */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-400 to-pink-500"></div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-semibold text-white leading-tight">
              Econo Lodge Gretna
            </span>
            <span className="text-xs text-gray-400">
              Louisiana • Great value, no fuss
            </span>
          </div>
        </Link>
      </div>

      {/* Center - Nav Links */}
      <div className="hidden md:flex text-white/90">
        <ul className="menu menu-horizontal px-1 space-x-6 text-sm font-medium">
          <li><NavLink to="/rooms">Rooms</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/location">Location</NavLink></li>
        </ul>
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-3">
        <Link
          to="/book"
          className="btn bg-white py-2 text-black font-medium rounded-md px-4 hover:bg-gray-200 text-sm h-9 min-h-0"
        >
          Book Now
        </Link>
        <button
          onClick={openDrawer}
          className="relative btn bg-gradient-to-tr from-[#E8424A] to-[#F97D67] text-white rounded-md hover:bg-red-600 text-sm h-9 min-h-0 flex items-center justify-center"
        >
          Cart
          <span className="absolute -top-2 -right-2 bg-white text-red-500 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}  
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
