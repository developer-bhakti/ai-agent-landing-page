import githubLogo from "../assets/github-logo.png"; 

const CoreBenefits = () => {
  const benefits = [
    { heading: "Heading", sub: "sub headings sub headings sub headings sub headings sub headings" },
    { heading: "Heading", sub: "sub headings sub headings sub headings sub headings sub headings" },
    { heading: "Heading", sub: "sub headings sub headings sub headings sub headings sub headings" },
  ];

  return (
    <div className=" py-20 px-20 bg-black core-benifits flex flex-col items-center justify-center relative overflow-hidden">
      <p className="text-white text-xs tracking-widest mb-6 text-center z-10">↓ CORE BENEFITS</p>

      <div className="grid md:grid-cols-3 gap-10 px-6 z-10  ">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-[#060606] to-[#1F0B0E] rounded-lg p-6 flex flex-col items-start gap-3 w-[378px] h-[244px]"
          >
            <img src={githubLogo} alt="Icon" className="w-[54px] h-[53px]" />
            <h3 className="text-[#FFFFFF] font-semibold text-3xl mb-4">{item.heading}</h3>
            <p className="text-[#FFFFFF] text-xl">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreBenefits;
