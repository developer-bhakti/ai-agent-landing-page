const FlowBuilder = () => {
  return (
    <div className="border border-gray-300 rounded-md p-6 w-full h-[200px] mt-6 bg-white">
      {/* Header Tabs */}
      <div className="flex gap-12 mb-4 border-b border-gray-300 pb-4">
        <p className="font-semibold text-2xl cursor-pointer">Flow Builder</p>
        <p className="font-semibold text-2xl cursor-pointer">Run History</p>
        <p className="font-semibold text-2xl cursor-pointer">Metrics</p>
      </div>

      {/* Flow Diagram */}
      <div className="flex items-center gap-4">
        <div className="bg-[#1DCB4099] flex items-center justify-center text-black w-[151px] h-[46px] rounded font-medium text-[20px]">
          Trigger
        </div>
        <span className="text-gray-400 text-xl">→</span>
        <div className="bg-[#92BEFF] flex items-center justify-center text-black w-[151px] h-[46px] rounded font-medium text-[20px]">
          Action
        </div>
        <span className="text-gray-400 text-xl">→</span>
        <div className="bg-[#FFA90A9E] flex items-center justify-center text-black w-[151px] h-[46px] rounded font-medium text-[20px]">
          Condition
        </div>
        <span className="text-gray-400 text-xl">→</span>
        <div className="bg-[#E5232399] flex items-center justify-center text-black w-[151px] h-[46px] rounded font-medium text-[20px]">
          End
        </div>
      </div>
    </div>
  );
};

export default FlowBuilder;
