import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {

  function handleSubmit(e){
    e.preventDefault();

  }

  return (
    <div className="flex justify-center items-center ">
    <div className="bg-[#1B1F2B] rounded-2xl p-6 shadow-xl">
      <h2 className="text-white text-xl font-semibold mb-6">Book your stay</h2>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Check-in</label>
            <input
              type="date"
              className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Check-out</label>
            <input
              type="date"
              className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Room type</label>
            <select className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500">
              <option value="standard">Standard</option>
              <option value="double" selected>Double Bed</option>
              <option value="luxury">Luxury Suite</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Rooms</label>
            <input
              type="number"
              value="2"
              className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Guests</label>
            <input
              type="number"
              value="2"
              className="w-full bg-[#0F1320] text-white py-3 px-4 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="text-gray-400 text-xs mb-2">
          Nightly rates shown below • taxes calculated at checkout
        </div>
        
        <div className="flex gap-5 items-center">
          <button 
            type="button"
            className="w-full bg-gradient-to-tr from-[#E8424A] to-[#F97D67] hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Check Availability
          </button>
          <button 
            type="button"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Add to Cart
          </button>
        </div>
        
        <div className="mt-6 p-4 bg-[#0F1320] rounded-lg">
          <div className="text-gray-400 text-sm mb-2">
            Estimate for 2 room(s) × 62 night(s) — Double Bed
          </div>
          <div className="text-white space-y-1">
            <div className="flex justify-between">
              <span>Room subtotal:</span>
              <span>$12,276.00</span>
            </div>
            <div className="flex justify-between">
              <span>Est. taxes:</span>
              <span>$1,473.12</span>
            </div>
            <div className="flex justify-between">
              <span>Est. fees:</span>
              <span>$620.00</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-gray-700 pt-2 mt-2">
              <span>Estimated total:</span>
              <span>$14,369.12</span>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
