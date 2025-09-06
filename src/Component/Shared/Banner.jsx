import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../assets/room31.jpg";
import banner2 from "../../assets/room32.jpg";
import banner3 from "../../assets/room33.jpg";
import banner4 from "../../assets/room34.jpg";
import banner5 from "../../assets/room35.jpg";

const Banner = () => {
  const slides = [
    {
      img: banner1,
      title: "Welcome to Econolodge",
      description: "Experience comfort, luxury, and convenience at unbeatable prices.",
    },
    {
      img: banner2,
      title: "Modern & Stylish Rooms",
      description: "Enjoy spacious, beautifully designed rooms perfect for relaxation.",
    },
    {
      img: banner3,
      title: "Perfect Location",
      description: "Stay close to major attractions and explore New Orleans with ease.",
    },
    {
      img: banner4,
      title: "Affordable Luxury",
      description: "Get premium services without breaking the bank.",
    },
    {
      img: banner5,
      title: "Book Your Stay Today",
      description: "Reserve now and make your trip unforgettable.",
    },
  ];

  return (
    <section className="relative mt-8">
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={800}
        showStatus={false}
        showThumbs={false}
        swipeable
        emulateTouch
        showArrows={false}
        stopOnHover
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative rounded-md w-full h-[60vh] flex items-center justify-center text-center"
          >
            {/* Background Image */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

            {/* Text + Button */}
            <div className="relative z-10 max-w-2xl px-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md mb-4">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 mb-6">
                {slide.description}
              </p>
              <Link to="/book">
                <button className="rounded-lg bg-[#FB8911] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#d8730f]">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
