import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Plug,
  FileText,
  BarChart2,
  Settings,
  Bell,
  Contact,
  Search,
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
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="w-full h-16 bg-white border-b border-[#BDBDBD] flex items-center justify-between px-6 shadow-sm">
        {/* Left side: Logo + Search */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl text-[#292929] font-bold mr-32">
            Agentic AI
          </h1>

          {/* Search Bar with Icon */}
          <div className="relative w-[390px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Workspace"
              className="w-full h-[40px] pl-10 pr-4 py-2 border border-[#BDBDBD] bg-[#EFEFEF] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Right side: Icons */}
        <div className="flex items-center gap-4">
          {/* Notification */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          {/* Contact */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Contact className="w-5 h-5 text-gray-600 rounded-full " />
          </button>
        </div>
      </header>

      {/* Content area with sidebar + main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r border-[#BDBDBD] p-4">
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
        <main className="flex-1 p-6 bg-gray-50 px-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
