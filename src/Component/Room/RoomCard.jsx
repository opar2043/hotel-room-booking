import React, { useEffect, useState } from "react";
import  img1 from '../../assets/hotel3.jpg'
import  img2 from '../../assets/hotel4.jpg'
import  img3 from '../../assets/hotel5.jpg'

const RoomCard = () => {
  //   const [roomcard, setRoomcard] = useState([]);
  //   useEffect(() => {
  //     fetch("/room.json")
  //       .then((res) => res.json())
  //       .then((data) => setRoomcard(data));
  //   }, []);

  const roomcard = [
    {
      id: 1,
      name: "Standard",
      price: 79,
      description:
        "Cozy queen bed, desk, mini-fridge, and shower. Perfect for quick trips.",
      image: "https://i.ibb.co.com/p6h4xYkw/hotel3.jpg",
      features: ["Queen bed", "Desk", "Mini-fridge", "Shower"],
    },
    {
      id: 2,
      name: "Double Bed",
      price: 99,
      description:
        "Two double beds—great for families and friends. Coffee maker & fast Wi-Fi.",
      image: "https://i.ibb.co.com/8gstkwJx/hotel5.jpg",
      features: [
        "Two double beds",
        "Coffee maker",
        "Fast Wi-Fi",
        "Family-friendly",
      ],
    },
    {
      id: 3,
      name: "Luxury Suite",
      price: 149,
      description:
        "Separate living area, larger bath, and premium linens. Relax in style.",
        image: "https://i.ibb.co.com/27yMdDZ1/hotel4.jpg",
      features: [
        "Separate living area",
        "Larger bath",
        "Premium linens",
        "Premium amenities",
      ],
    },
  ];

  return (
    <div className="bg-[#0C0E13]  py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between mb-4 ">
          <h1 className="text-lg md:text-xl font-bold text-white/80 text-center">
            Rooms & Rates
          </h1>
          <div className=" text-gray-400 italic">
            Choose a room, then set dates above to add to cart.
          </div>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomcard &&
            roomcard.map((room) => (
              <div
                key={room.id}
                className="bg-[#1B1F2B] rounded-xl overflow-hidden shadow-lg border border-gray-800"
              >
                {/* Room Image */}
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  {/* <span className="text-gray-400">Room Image</span> */}
                  <img src={room.image} alt="room image" className="w-full" />
                </div>

                {/* Room Content */}
                <div className="p-6">
                  {/* Price and Room Name */}
                  <div className="mb-2">
                    <span className="text-blue-400 font-medium">
                      From ${room.price} / night
                    </span>
                  </div>

                  {/* Room Name */}
                  <h2 className="text-xl text-white font-bold mb-2">
                    {room.name}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 max-w-2xl">
                    {room.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="bg-gradient-to-tr from-[#E8424A] to-[#F97D67] hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm">
                      Add with Dates
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm">
                      Set Dates
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
