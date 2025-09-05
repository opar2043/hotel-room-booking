import img6 from "../../assets/room6.jpg";
import img7 from "../../assets/room7.jpg";
import img8 from "../../assets/room8.jpg";
import img9 from "../../assets/room9.jpg";
import img10 from "../../assets/room10.jpg";
import img11 from "../../assets/room11.jpg";
import img12 from "../../assets/room12.jpg";
import img14 from "../../assets/room14.jpg";
import img15 from "../../assets/room15.jpg";

const Facilities = () => {
  const galleryImages = [
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img14,
    img15,
  ];

  return (
    <div className="bg-transparent font-sans text-gray-800 p-5 w-full mx-auto leading-relaxed">
      <h2 className="border-b-2 border-gray-300 pb-3 mb-6 text-2xl font-semibold text-white/90">
        Facilities From Us
      </h2>

      <p className="text-white/80 mb-4">
        Our hotel is designed to make your stay comfortable and stress-free.
        Every room is equipped with a{" "}
        <span className="font-medium">private bathroom 🚿</span>,{" "}
        <span className="font-medium">air conditioning ❄️</span>, a{" "}
        <span className="font-medium">flat-screen TV 📺</span>, and{" "}
        <span className="font-medium">complimentary Wi-Fi 📡</span>. For your
        convenience, we also provide a{" "}
        <span className="font-medium">wardrobe 👔</span>,{" "}
        <span className="font-medium">tea/coffee maker ☕</span>,{" "}
        <span className="font-medium">desk 💼</span>, and{" "}
        <span className="font-medium">soundproof rooms 🔇</span> to ensure
        relaxation. Families will appreciate the{" "}
        <span className="font-medium">spacious rooms 👨‍👩‍👧‍👦</span>, while
        business travelers benefit from a calm and well-equipped environment.
        Safety is our top priority with{" "}
        <span className="font-medium">smoke alarms ⚠️</span> and{" "}
        <span className="font-medium">24-hour security 👮</span> throughout the
        property.
      </p>

      <p className="text-white/80 mb-2">
        Alongside these essentials, you’ll also enjoy:
      </p>

      <ul className="list-disc list-inside text-white/70 space-y-1">
        <li>Free private parking 🅿️</li>
        <li>Daily housekeeping 🧹</li>
        <li>24-hour front desk 🕒</li>
        <li>Room service 🍽️</li>
        <li>Facilities for disabled guests ♿</li>
      </ul>

      <p className="text-white/80 mt-4">
        Whether you’re visiting for leisure or work, our facilities are tailored
        to provide comfort, convenience, and peace of mind during your stay.
      </p>

      {/* ✅ Image Gallery Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded shadow-md transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Facility ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
