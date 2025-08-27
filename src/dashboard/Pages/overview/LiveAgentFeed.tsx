const agents = [
  { name: "Agent Error", status: "Success", time: "Today at 1:15 PM" },
  { name: "Agent Error", status: "Failed", time: "Today at 1:15 PM" },
  { name: "Agent Error", status: "Running", time: "Today at 1:15 PM" },
  { name: "Agent Error", status: "Failed", time: "Today at 1:15 PM" },
  { name: "Agent Error", status: "Running", time: "Today at 1:15 PM" },
];

const statusColors: Record<string, string> = {
  Success: "bg-[#0BC7D3] text-white",
  Failed: "bg-[#E5232399] text-white",
  Running: "bg-[#DEE903] text-white",
};

const LiveAgentFeed = () => {
  return (
    <div
      className="w-[1014px] h-[413px] border border-[#BDBDBD]  rounded-[12px] p-4 mb-6 opacity-100"
      style={{ top: "300px", left: "309px" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="font-semibold text-2xl">Live Agent Feed</h2>
        <div className="flex gap-[8px]">
          <button className="bg-[#27AE60] text-white px-3 py-1 rounded-md  w-[157px] h-[45px]">
            + Create Agent
          </button>
          <button className="bg-[#27AE60] text-white px-3 py-1 rounded-md  w-[157px] h-[45px]">
            Run Dry -Run
          </button>
          <button className="bg-[#27AE60] text-white px-3 py-1 rounded-md  w-[157px] h-[45px]">
            Connections
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Agent Name</th>
            <th>Status</th>
            <th>1:iaus</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{agent.name}</td>
              <td>
                <span
                  className={`flex items-center justify-center w-[98px] h-[28px] text-xs font-medium rounded ${statusColors[agent.status]}`}
                >
                  {agent.status}
                </span>
              </td>
              <td>{agent.time}</td>
              <td className="text-blue-600 cursor-pointer">View Details</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveAgentFeed;
