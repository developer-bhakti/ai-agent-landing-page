import { useState } from "react";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center space-x-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 cursor-pointer text-white hover:text-gray-300" />
            </a>
            <span className="text-lg font-bold text-white">Ai Agent</span>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-8 font-medium text-white">
            <a href="#features" className="hover:text-red-400">Features</a>
            <a href="#pricing" className="hover:text-red-400">Pricing</a>
            <a href="#events" className="hover:text-red-400">Events</a>
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#blog" className="hover:text-red-400">Blog</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <a href="#support" className="hidden md:inline text-white hover:text-red-400 font-medium">
              Support
            </a>
            <button className="hidden md:inline text-white hover:text-red-400 font-medium">
              Login
            </button>
            <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
              Demo
            </button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="px-6 pt-4 pb-6 space-y-4 font-medium text-white">
            <a href="#features" className="block hover:text-red-400">Features</a>
            <a href="#pricing" className="block hover:text-red-400">Pricing</a>
            <a href="#events" className="block hover:text-red-400">Events</a>
            <a href="#about" className="block hover:text-red-400">About</a>
            <a href="#blog" className="block hover:text-red-400">Blog</a>
            <a href="#support" className="block hover:text-red-400">Support</a>
            <button className="w-full text-white border border-gray-600 rounded-md py-2 hover:bg-gray-800">
              Login
            </button>
            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
              Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
