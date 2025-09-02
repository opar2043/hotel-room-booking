
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#10131b] text-gray-400">
      <footer className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between p-6 border-t border-gray-700/40">
        
        {/* Left Side */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Econo Lodge Gretna, LA. All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <p className="text-sm md:text-base">Made with</p>
          <FaHeart className="w-4 h-4 text-pink-500" fill="currentColor" />
          <p className="text-sm md:text-base">in Louisiana</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

