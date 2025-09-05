import React from "react";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#0C0E13] min-h-fit flex items-center justify-center px-4 py-8">
      <div className="flex flex-col lg:flex-row-reverse w-full max-w-6xl gap-10">
        {/* Form Section */}
        <div className="w-full lg:w-2/5">
          <Form />
        </div>

        {/* Left side - Text Content */}
        <div className="w-full lg:w-3/5 text-white flex flex-col justify-center md:-mt-20">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight ">
            Simple <br />
            stays  Westbank—
            <br />
            close to downtown New Orleans,
            <br />
            without the downtown price.
          </h1>
          <p className="text-gray-400 text-md mb-4 leading-relaxed">
            Pick from Standard, Double Bed, or a roomy Luxury Suite. Book in seconds —free Wi-Fi, parking, and friendly 24/7 service always included.
          </p>
          <Link 
          to={'/room'}
            className="text-blue-400 hover:text-blue-300 font-medium text-md inline-flex items-center"
          >
            Explore rooms ↓
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;