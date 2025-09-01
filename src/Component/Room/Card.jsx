import React from "react";
import { Link } from "react-router-dom";

const Card = ({ room, onToggleBooking }) => {
  const { roomNo, pass, floor, price, isBooking } = room;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6  flex flex-col items-center border hover:shadow-2xl transition-all duration-300">
      {/* Room Number */}
      <div className="text-2xl font-bold text-pink-600 mb-2">Room - {roomNo}</div>

      {/* Floor & Price */}
      <p className="text-gray-600 text-sm mb-1">Floor: {floor}</p>
      <p className="text-gray-700 font-medium mb-2">${price} / night</p>

      {/* Password */}
      {/* <div className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-lg mb-4">
        Pass: <span className="font-mono">{pass}</span>
      </div> */}

      {/* Booking Status */}
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
          isBooking ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
        }`}
      >
        {isBooking ? "Occupied" : "Available"}
      </span>

      {/* Action Button */}
      <Link to={`/form/${roomNo}`} className="w-full">
        <button
          onClick={() => onToggleBooking(roomNo)}
          className={`w-full py-2 rounded-xl font-semibold transition-all duration-300 ${
            isBooking
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
          }`}
        >
          {isBooking ? "Check Out" : "Check In"}
        </button>
      </Link>
    </div>
  );
};

export default Card;
