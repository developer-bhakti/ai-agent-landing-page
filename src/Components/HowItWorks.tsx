const steps = [
  {
    number: "01",
    title: "Connect Your Tools",
    subtitle: "Integrate your existing workspace tools",
  },
  {
    number: "02",
    title: "Choose Your Tasks",
    subtitle: "Select what you want to automate",
  },
  {
    number: "03",
    title: "Let AI Run",
    subtitle: "Watch as tasks complete automatically",
  },
];

const HowItWorks = () => {
  return (
    <div className="text-center py-16">
      <p className="text-xs tracking-widest text-white/70 mb-10">
        ↓ HOW IT WORKS
      </p>

      <div className="flex justify-center items-start gap-16 relative ">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center w-[309px] h-[158px]">
            {/* Circle */}
            <div className="w-[64px] h-[64px] rounded-full bg-[#DC2626] text-white text-xl flex items-center justify-center font-normal mb-4">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-white font-medium text-xl">{step.title}</h3>
            <p className="text-[#FFFFFF] mt-2 font-normal text-sm">{step.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
