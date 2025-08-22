import img from "../assets/use-cases.png"; 
const useCases = [
  { title: "Marketing", img: img },
  { title: "Support", img: img },
  { title: "Sales", img: img },
  { title: "Operation", img: img },
];

const UseCases = () => {
  return (
    <div className="text-center py-16 mx-32 w-[1283px] ">
      <p className="text-xs tracking-widest text-white/70 mb-10">
        ↓ USE CASES & TESTIMONIAL
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {useCases.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-[#060606] to-[#401113] rounded-xl p-6 flex flex-col text-center items-center shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-60 h-60 object-contain mb-4"
            />
            <h3 className="text-white font-bold text-[40px]">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;
