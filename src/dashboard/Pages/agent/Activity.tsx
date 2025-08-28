import { User } from "lucide-react"; // Contact-like icon

const stats = [
  { title: "Active Agents", value: 12 },
  { title: "Task Pending", value: 23 },
  { title: "Hours Saved", value: 56 },
  { title: "MRI Impact", value: 12 },
];

const Activity = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6 w-full">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`w-[235px] h-[131px] border border-[#BDBDBD] rounded-lg flex flex-col items-center justify-center shadow-sm 
            ${index === 0 ? "bg-[#EFD2FF]" : "bg-white"}`}
        >
          {index === 0 && (
            <User className="w-6 h-6 text-[#292929] mb-2" /> // contact icon
          )}
          <p className="text-[#292929] font-medium text-sm">{item.title}</p>
          <h2 className="text-[32px] font-semibold text-black">{item.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default Activity;
