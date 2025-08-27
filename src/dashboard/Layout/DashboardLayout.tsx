import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Plug,
  FileText,
  BarChart2,
  Settings,
} from "lucide-react";

const DashboardLayout = () => {
  const navItems = [
    { name: "Overview", path: "/dashboard", icon: LayoutGrid },
    { name: "Agents", path: "/dashboard/agents", icon: Users },
    { name: "Integrations", path: "/dashboard/integrations", icon: Plug },
    { name: "Templates", path: "/dashboard/templates", icon: FileText },
    { name: "Reports", path: "/dashboard/reports", icon: BarChart2 },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r p-4 border border-[#BDBDBD] ">
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
