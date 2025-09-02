import React, { useEffect, useState } from "react";
import Card from "./Card";

const Room = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("/room.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <section className="py-12 px-4 md:px-12 bg-[#0B0D13]  min-h-screen">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Rooms</span> for You
        </h2>
        <p className="text-gray-500 mt-2">
          Choose from a variety of rooms designed for your comfort
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {rooms &&
          rooms.map((room, idx) => <Card key={idx} room={room} />)}
      </div>
    </section>
  );
};

export default Room;
