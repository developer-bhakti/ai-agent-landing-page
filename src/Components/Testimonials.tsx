import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Anderoav",
    username: "@Anderoav",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Anderoav",
    username: "@Anderoav",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Anderoav",
    username: "@Anderoav",
    avatar: "https://i.pravatar.cc/150?img=3",
  },

];

const TestimonialCard = ({ text, name, username, avatar }) => {
  return (
    <div 
      className="text-left items-start border border-white/10 w-full flex-shrink-0 bg-gradient-to-br from-[#1a1a1a] to-[#2d0d0d] text-white flex flex-col p-8 rounded-2xl shadow-lg transition-all duration-700 ease-out"
      style={{
        background: `linear-gradient(180deg, rgba(25, 9, 24, 0.94) 0%, rgba(6, 6, 6, 0.94) 100%), 
        radial-gradient(50% 50% at 50% 50%, #410E11 0%, rgba(38, 33, 73, 0) 100%)`
      }}
    >
      {/* Testimonial Text */}
      <div className="mb-8">
        <p className="text-[#E4E4E4] text-lg font-medium leading-relaxed mb-2">
          "{text}"
        </p>
      </div>
       
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-white/20"
        />
        <div>
          <h4 className="text-white font-medium text-[16px] ">{name}</h4>
          <p className="text-gray-400 text-sm">{username}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  return (
    <div className="py-16 bg-black text-center h-[400px] w-full">
      <p className="text-xs tracking-widest text-white/70 mb-10">
        ↓ TESTIMONIALS
      </p>
       
      <div className="relative overflow-hidden w-full">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center gap-1 transition-all duration-700 ease-out w-full max-w-7xl">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${currentIndex}-${idx}`}
                className={`transition-all duration-700 ease-out flex-1 ${
                  testimonial.position === 0 
                    ? 'scale-100 opacity-100 z-10' 
                    : 'scale-90 opacity-80 z-0'
                }`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;