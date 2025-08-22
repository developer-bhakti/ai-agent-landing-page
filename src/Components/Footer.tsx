
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">AI Agent</h2>
          <p className="mb-4">Sub caption</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaGithub /></a>
            <a href="#" className="hover:text-white"><FaDiscord /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>

        {/* Right Section (3 Columns) */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div className="space-y-2">
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
          </div>
          <div className="space-y-2">
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
          </div>
          <div className="space-y-2">
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;