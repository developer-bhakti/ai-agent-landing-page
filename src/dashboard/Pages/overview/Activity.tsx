// import type { Activity } from "lucide-react";

const stats = [
  { title: "Active Agents", value: 12 },
  { title: "Task Pending", value: 23 },
  { title: "Hours Saved", value: 56 },
  { title: "MRI Impact", value: 12 },
];

const Activity = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="w-[235px] h-[131px] border border-[#BDBDBD] rounded-lg flex flex-col items-center justify-center shadow-sm"
        >
          <p className="text-black font-medium text-sm">{item.title}</p>
          <h2 className="text-[32px] font-semibold">{item.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default Activity;
