import React from "react";

interface Agent {
  name: string;
  status: "Success" | "Failed" | "Running";
  iaus: string;
}

const LiveAgentFeed: React.FC = () => {
  const agents: Agent[] = [
    { name: "Agent Error", status: "Success", iaus: "Today at 1:15 PM" },
    { name: "Agent Error", status: "Failed", iaus: "Today at 1:15 PM" },
    { name: "Agent Error", status: "Running", iaus: "Today at 1:15 PM" },
    { name: "Agent Error", status: "Failed", iaus: "Today at 1:15 PM" },
    { name: "Agent Error", status: "Running", iaus: "Today at 1:15 PM" },
  ];

  const statusColors: Record<Agent["status"], string> = {
    Success: "bg-[#0BC7D3]",
    Failed: "bg-[#E5232399]",
    Running: "bg-[#DEE903]",
  };

  return (
    <div className="w-full border border-[#BDBDBD] rounded-[12px] p-6 mb-6 shadow-sm bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-[#BDBDBD] pb-4">
        <h2 className="font-semibold text-2xl text-gray-800">Live Agent Feed</h2>

        <div className="flex gap-3">
          <button className="bg-[#27AE60] text-white font-medium text-[16px] px-6 py-2 rounded-lg hover:bg-[#229954] transition-colors">
            + Create Agent
          </button>
          <button className="bg-[#27AE60] text-white font-medium text-[16px] px-6 py-2 rounded-lg hover:bg-[#229954] transition-colors">
            Run Dry-Run
          </button>
          <button className="bg-[#27AE60] text-white font-medium text-[16px] px-6 py-2 rounded-lg hover:bg-[#229954] transition-colors">
            Connections
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b border-[#BDBDBD] font-semibold text-[18px] text-[#000000]">
              <th className="py-3 px-4">Agent Name</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">IAUS</th>
              <th className="py-3 px-4">View Details</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr
                key={index}
                className="border-b border-[#BDBDBD] hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 text-[#000000] font-medium text-[16px]">
                  {agent.name}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`flex items-center justify-center w-[98px] h-[28px] text-[14px] font-semibold text-white rounded ${statusColors[agent.status]}`}
                  >
                    {agent.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-[#000000] font-medium text-[16px]">
                  {agent.iaus}
                </td>
                <td className="py-3 px-4">
                  <button className="text-[#000000] font-medium text-[16px] hover:text-blue-700 hover:underline transition-colors">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveAgentFeed;
