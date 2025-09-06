import React from "react";

const ContactService = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-7">
      {/* <div className=" w-full md:w-1/2"> */}

        <div className="bg-[#1B1F2B] p-8 rounded-xl w-full md:w-1/2 ">
          <p className="text-white/80 mb-8 font-semibold">
            We keep it simple: clean rooms, kind people, and a fair price. Our
            location on the Westbank puts you minutes from downtown New Orleans
            via the Crescent City Connection—close to the fun, far from the
            hassle.
          </p>

          <ul className="text-gray-400 text-sm">
            <li>• Check-in: 3:00 PM - Check-out: 11:00 AM</li>
            <li>
              • Payment: major credit/debit cards via secure Stripe Checkout
            </li>
            <li>
              • Cancellation & policies: customize in your app/server layer
            </li>
          </ul>
        </div>
      {/* </div> */}

      {/* Contact Section */}
      <div className=" bg-[#1B1F2B] p-5 rounded-xl w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
        <div className="text-gray-400 space-y-2 mb-8">
          <p>Address: 50 Westbank Expressway, Gretna, LA 70053, United States.</p>
          <p>Phone: +1 504-291-3299</p>
        </div>

        <div className="flex gap-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded transition-colors">
            Get Directions
          </button>
          <button className="bg-gradient-to-tr from-[#E8424A] to-[#F97D67] hover:bg-red-600 text-white font-medium py-2 px-6 rounded transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ContactService;
