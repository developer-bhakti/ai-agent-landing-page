import githubLogo from "../assets/github-logo.png"; 

const TrustedTeams = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center py-10 bg-black w-[656px] h-[342px] gap-[208px]">
        <p className="text-white text-xs tracking-widest mb-6">
          ↓ TRUSTED BY INNOVATIVE TEAMS
        </p>

        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {[...Array(9)].map((_, idx) => (
            <div
              key={idx}
              className="w-[80px] h-[82px] bg-white rounded-lg flex items-center justify-center"
            >
              <img src={githubLogo} alt="Logo" className="w-[80px] h-[80px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedTeams;
