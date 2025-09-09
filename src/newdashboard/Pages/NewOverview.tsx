const NewOverview = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] relative">
      {/* Grid dots effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_1px,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

      {/* Content goes here */}
      <div className="relative z-10 p-6">
        <h1 className="text-white text-2xl font-bold"></h1>
      </div>
    </div>
  );
};

export default NewOverview;
