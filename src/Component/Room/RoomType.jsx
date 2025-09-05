import React, { useState } from 'react';

const RoomType = () => {
  const [showSingleDescription, setShowSingleDescription] = useState(false);
  const [showDoubleDescription, setShowDoubleDescription] = useState(false);
  const [showMasterDescription, setShowMasterDescription] = useState(false);

  const roomTypes = {
    single: {
      title: "Single Room",
      hotel: "Econolodge",
      price: 79,
      beds: "1 twin bed",
      capacity: "1 adult",
      description:
        "Featuring free toiletries, this single room includes a private bathroom with a bath, a shower and a hairdryer. The air-conditioned single room features a flat-screen TV, a tea and coffee maker, a wardrobe, a safe deposit box as well as city views. The unit has 1 bed.",
      amenities: ["City view","Bathtub","Air conditioning","Private bathroom","Microwave","Tea/Coffee maker","Free Wifi"],
      image: "https://i.ibb.co.com/MxjQPG9v/hotel1.jpg",
    },
    double: {
      title: "Double Room",
      hotel: "Econolodge",
      price: 99,
      beds: "2 queen beds",
      capacity: "2 adults",
      description:
        "Offering free toiletries, this double room includes a private bathroom with a bath, a shower and a hairdryer. The air-conditioned double room offers a flat-screen TV, a tea and coffee maker, a wardrobe, a safe deposit box as well as city views. The unit offers 2 beds.",
      amenities: ["City view","Bathtub","Air conditioning","Private bathroom","Microwave","Tea/Coffee maker","Free Wifi"],
      image: "https://i.ibb.co.com/BKzcNn6S/3947d972.jpg",
    },
    master: {
      title: "Master Room",
      hotel: "Econolodge",
      price: 149,
      beds: "1 king bed",
      capacity: "2 adults",
      description:
        "The Master Room offers a luxurious experience with a king-sized bed, private bathroom, premium toiletries, flat-screen TV, seating area, air-conditioning, and stunning city views. Ideal for couples or guests seeking extra comfort.",
      amenities: ["City view","King-sized bed","Bathtub","Air conditioning","Private bathroom","Microwave","Tea/Coffee maker","Free Wifi","Seating area","Mini bar"],
      image: "https://i.ibb.co.com/8gstkwJx/hotel5.jpg", // replace with your actual image
    },
  };

  const renderRoomCard = (roomKey, showDescription, setShowDescription) => {
    const room = roomTypes[roomKey];
    return (
      <div className="bg-[#252A38] rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
        <div className="relative">
          <img src={room.image} alt={room.title} className="w-full h-56 object-cover" />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold shadow-md">
            From ${room.price}/night
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{room.title}</h3>
              <p className="text-blue-400 font-medium">{room.hotel}</p>
            </div>
            <div className="text-right text-gray-300 text-sm">
              <p>Fits: {room.capacity}</p>
              <p>Bed: {room.beds}</p>
            </div>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">
            {showDescription ? room.description : `${room.description.substring(0, 100)}...`}
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="text-blue-400 hover:text-blue-300 font-medium ml-2 text-sm"
            >
              {showDescription ? "Hide description" : "Read more"}
            </button>
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">Key Amenities:</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.slice(0, 4).map((amenity, index) => (
                <span key={index} className="bg-[#1B1F2B] text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-transparent min-h-screen px-4 py-12 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Rooms & Rates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {renderRoomCard("single", showSingleDescription, setShowSingleDescription)}
        {renderRoomCard("double", showDoubleDescription, setShowDoubleDescription)}
        {renderRoomCard("master", showMasterDescription, setShowMasterDescription)}
      </div>
    </div>
  );
};

export default RoomType;
