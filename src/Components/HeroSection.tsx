import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="section  min-h-screen  bg-black text-white px-6 lg:px-12 pt-20 ">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6 mt-20 ml-20 z-10">
          {/* Small Labels */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Real-time Decisioning</span>
            </span>
            <span>Seamless API Integration</span>
            <span>Low-Latency Processing</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            YOUR AI <br /> AGENT FOR <br /> WORK
          </h1>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-700 transition">
              Try it for Free
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-gray-100 transition">
              <span>See Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="z-10 text-center space-y-3 mt-16">
          <span className="text-[11px] text-white tracking-widest font-bold">
            WHAT WE DO
          </span>
          <h1 className="text-[39px] font-light">
            Automate your daily tasks across all your tools
          </h1>
          <h2 className="font-bold text-[40px] ">
            Let AI handle the repetitive work while
            <br /> you focus on what matters
          </h2>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
