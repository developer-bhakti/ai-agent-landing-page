import React, { useState } from "react";

interface Agent {
  name: string;
  status: "Success" | "Failed" | "Running";
  iaus: string;
}

const LiveAgentFeed: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    status: 'Running' as Agent['status'],
    projectDetails: '',
    startDate: '',
    day: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    setIsDialogOpen(false);
  };

  const handleEdit = () => {
    // Handle edit functionality
    console.log('Edit clicked');
  };

  return (
    <>
      <div className="w-full border border-[#BDBDBD] rounded-[12px] p-6 mb-6 shadow-sm bg-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-[#BDBDBD] pb-4">
          <h2 className="font-semibold text-2xl text-gray-800">Live Agent Feed</h2>

          <div className="flex gap-3">
            <button 
              onClick={() => setIsDialogOpen(true)}
              className="bg-[#27AE60] text-white font-medium text-[16px] px-6 py-2 rounded-lg hover:bg-[#229954] transition-colors"
            >
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

      {/* Dialog/Modal */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-[12px] w-[400px] max-w-[90vw] shadow-lg">
            {/* Dialog Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#BDBDBD]">
              <h3 className="text-xl font-semibold text-gray-800">Create New Agent</h3>
              <button 
                onClick={handleEdit}
                className="bg-[#27AE60] text-white font-medium text-[14px] px-4 py-2 rounded-lg hover:bg-[#229954] transition-colors"
              >
                Edit
              </button>
            </div>

            {/* Dialog Content - Form */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Agent Name"
                    className="w-full px-3 py-2 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
                  />
                </div>

                {/* Status */}
                <div>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
                  >
                    <option value="Running">Running</option>
                    <option value="Success">Success</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <input
                    type="text"
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Project Details"
                    className="w-full px-3 py-2 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
                  />
                </div>

                {/* Start Date and Day - Two columns */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      placeholder="Start Date"
                      className="w-full px-3 py-2 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      id="day"
                      name="day"
                      value={formData.day}
                      onChange={handleInputChange}
                      placeholder="Day (e.g. Monday)"
                      className="w-full px-3 py-2 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Dialog Footer */}
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-[#BDBDBD]">
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="px-6 py-2 border border-[#BDBDBD] text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#27AE60] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#229954] transition-colors"
                >
                  Create Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveAgentFeed;