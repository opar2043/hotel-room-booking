import React from "react";
import { FaLeaf, FaLock, FaBed, FaConciergeBell } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-transparent text-white py-16 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-blue-400">EconoLodge</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Welcome to <span className="text-white font-semibold">EconoLodge</span> – 
          where comfort meets convenience. We pride ourselves on providing a relaxing 
          environment, top-notch privacy, cozy rooms, and world-class services to make 
          your stay unforgettable.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Environment */}
          <div className="bg-[#252A38] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaLeaf className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Environment</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Surrounded by peaceful surroundings, we ensure a clean and 
              refreshing atmosphere for every guest.
            </p>
          </div>

          {/* Privacy */}
          <div className="bg-[#252A38] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaLock className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Guaranteed Privacy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your comfort and security are our top priorities with fully 
              private spaces and 24/7 safety.
            </p>
          </div>

          {/* Rooms */}
          <div className="bg-[#252A38] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaBed className="text-yellow-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Cozy Rooms</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enjoy modern, well-furnished rooms designed to offer you a 
              comfortable and peaceful stay.
            </p>
          </div>

          {/* Services */}
          <div className="bg-[#252A38] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaConciergeBell className="text-pink-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Premium Services</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From 24/7 concierge to free WiFi, we provide excellent 
              services tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
