import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../Hook/useAdmin";

const Navbar = () => {
  const { openDrawer, cart, user, handleLogout } = useAuth();
  const { admin } = useAdmin();
  const navigate = useNavigate();
  function logOut() {
    handleLogout()
      .then(() => {
        Swal.fire({
          title: "Logout Successfull",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Try Again",
          icon: "error",
        });
      });
  }

  const [isOpen, setIsOpen] = useState(false);
  const links = (
    <>
      <li className="hover:text-orange-300">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
      </li>
      <li className="hover:text-orange-300">
        <NavLink to="/services" onClick={() => setIsOpen(false)}>
          Services
        </NavLink>
      </li>
      <li className="hover:text-orange-300">
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
      </li>
      <li className="hover:text-orange-300">
        <NavLink to="/facilities" onClick={() => setIsOpen(false)}>
          Facilities
        </NavLink>
      </li>
      <li className="hover:text-orange-300">
        <NavLink to="/room" onClick={() => setIsOpen(false)}>
          Room
        </NavLink>
      </li>
      {user && admin && (
        <li className="hover:text-orange-300">
          <NavLink to="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>
        </li>
      )}
      {user && user ? (
        <li className="hover:text-orange-300">
          <button onClickCapture={() => logOut()}>Log Out</button>
        </li>
      ) : (
        <li className="hover:text-orange-300">
          <NavLink to="/login" onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#0A0C15] sticky top-0 z-50 px-6 py-3 border-b border-gray-700/40">
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

      {/* Desktop Nav */}
      <div className="hidden md:flex text-white/90 ">
        <ul className="menu menu-horizontal px-1 space-x-6 text-sm font-medium">
          {links}
        </ul>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="btn hidden md:flex bg-white py-2 text-black font-medium rounded-md px-4 hover:bg-gray-200 text-sm h-9 min-h-0"
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

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white text-2xl ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0C15] text-white border-t border-gray-700 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            {links}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
