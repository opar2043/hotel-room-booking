import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>

      {/* Message */}
      <p className="text-2xl mt-4 font-semibold">Oops! Page Not Found</p>
      <p className="text-gray-200 mt-2 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;

