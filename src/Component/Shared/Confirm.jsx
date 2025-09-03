import React from "react";
import { FaCircle, FaSign } from "react-icons/fa";

import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="bg-[#1B1F2B] shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <FaCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">
          Booking Confirmed 🎉
        </h1>
        <p className="text-white mb-6">
          Thank you for choosing our hotel. Your room has been successfully
          reserved and payment completed. We look forward to hosting you!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-2.5 bg-gradient-to-tr from-[#E8424A] to-[#F97D67] hover:bg-blue-600 text-white rounded-xl font-medium transition"
          >
            Back to Home
          </Link>
          <Link
            to="/mybookings"
            className="px-5 py-2.5 border border-gray-300 hover:text-black hover:bg-gray-100 rounded-xl font-medium text-white transition"
          >
            View My Bookings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
