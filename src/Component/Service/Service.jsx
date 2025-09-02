import React from "react";
import ContactService from "./ContactService";
import Title from "../Shared/Title";
import AreaMap from "./AreaMap";

const Service = () => {
  const value = [
    {
      id: 1,
      service: "Free Wi-Fi",
      description: "Fast, reliable internet throughout the property.",
    },
    {
      id: 2,
      service: "Parking Included",
      description: "Complimentary on-site self-parking.",
    },
    {
      id: 3,
      service: "24/7 Front Desk",
      description: "Late check-in? We've got you covered.",
    },
    {
      id: 4,
      service: "Housekeeping",
      description: "Fresh towels & tidy rooms daily.",
    },
    {
      id: 5,
      service: "Pet-Friendly (Select Rooms)",
      description: "Call ahead—limited availability.",
    },
    {
      id: 6,
      service: "Guest Laundry",
      description: "Self-service machines on site.",
    },
    {
      id: 7,
      service: "Breakfast Items",
      description: "Grab-and-go options each morning.",
    },
    {
      id: 8,
      service: "Smoke-Free Options",
      description: "Request at booking.",
    },
  ];

  return (
    <div className="bg-[#0C0E13] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Title
          head={"  Services"}
          des={"Everything you need, nothing you don’t."}
        ></Title>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {value &&
            value.map((room) => (
              <div className="bg-[#12182A] py-5 px-4 rounded-lg text-white hover:bg-[#22283d]">
                <h2 className="font-semibold text-lg mb-1">{room.service}</h2>
                <p className="text-gray-400">{room.description}</p>
              </div>
            ))}
        </div>

        <Title head={"About Econo Lodge Gretna"} des={""}></Title>
        <ContactService></ContactService>

        <Title head={"Location"} des={"Everything you need, nothing you don’t."}></Title>
        <AreaMap></AreaMap>
      </div>
    </div>
  );
};

export default Service;
