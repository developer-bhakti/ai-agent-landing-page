import { User, ListTodo, Clock, BarChart3 } from "lucide-react";

const stats = [
  { title: "Active Agents", value: 12, icon: User },
  { title: "Task Pending", value: 23, icon: ListTodo },
  { title: "Hours Saved", value: 56, icon: Clock },
  { title: "MRI Impact", value: 12, icon: BarChart3 },
];

const Activity = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6 w-full">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="w-[235px] h-[131px] bg-[#EFD2FF] border border-[#BDBDBD] rounded-lg flex flex-col items-center justify-center shadow-sm"
          >
            <Icon className="w-6 h-6 text-[#292929] mb-2" />
            <p className="text-[#292929] font-medium text-sm">{item.title}</p>
            <h2 className="text-[32px] font-semibold text-black">{item.value}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Activity;
