import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  MessageSquare,
  Users,
  UserPlus,
  Layout,
  BarChart2,
  HelpCircle,
  Sparkles,
  User,
  Plus,
  Star,
  Play,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const NewDashboardLayout = () => {
  const [active, setActive] = useState(true);

  // Top navigation
  const topNav: { name: string; path: string; icon: LucideIcon }[] = [
    { name: "Home", path: "/dashboard/home", icon: Home },
    { name: "Chat", path: "/dashboard/chat", icon: MessageSquare },
    { name: "My Agent", path: "/dashboard/my-agent", icon: Users },
    { name: "New Agent", path: "/dashboard/new-agent", icon: UserPlus },
  ];

  // Recent section (color boxes instead of icons)
  const recentNav: { name: string; path: string; color: string }[] = [
    {
      name: "Candidate Screener",
      path: "/dashboard/candidate-screener",
      color: "bg-blue-500",
    },
    {
      name: "Meeting Scheduler",
      path: "/dashboard/meeting-scheduler",
      color: "bg-yellow-400",
    },
    {
      name: "Meeting Notetaker",
      path: "/dashboard/meeting-notetaker",
      color: "bg-red-500",
    },
  ];

  // Bottom section
  const bottomNav: { name: string; path: string; icon: LucideIcon }[] = [
    { name: "Templates", path: "/dashboard/templates", icon: Layout },
    { name: "Insights", path: "/dashboard/insights", icon: BarChart2 },
    { name: "Help", path: "/dashboard/help", icon: HelpCircle },
    { name: "What’s New", path: "/dashboard/whats-new", icon: Sparkles },
  ];

  return (
<div className="flex flex-col h-screen overflow-hidden">
      {/* Navbar */}
      <header className="w-full h-14 bg-black border-b border-[#333] flex items-center justify-between px-6 shadow-sm flex-shrink-0">
        {/* Left side */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <h1 className="text-lg text-white font-bold">Ai Agent</h1>

          {/* Candidate Screener */}
          <div className="flex items-center text-white text-sm font-medium ml-16">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span className="ml-2">Candidate Screener</span>
          </div>

          {/* Divider */}
          <span className="text-gray-500">|</span>

          {/* Add tag */}
          <button className="flex items-center gap-1 text-gray-300 text-sm hover:text-white transition">
            <Plus className="w-4 h-4" />
            Add tag
          </button>

          {/* Star */}
          <button className="text-gray-300 hover:text-white transition">
            <Star className="w-5 h-5" />
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Active toggle */}
          <div className="flex items-center gap-2 text-sm text-white">
            Active
            <button
              onClick={() => setActive(!active)}
              className={`relative w-10 h-5 rounded-full transition ${
                active ? "bg-red-500" : "bg-gray-600"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition ${
                  active ? "translate-x-5" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Test button */}
          <button className="flex items-center gap-1 px-4 py-1 border border-gray-400 rounded-md text-sm text-white hover:bg-gray-800 transition">
            <Play className="w-4 h-4" />
            Test
          </button>

          {/* Share button */}
          <button className="px-4 py-1 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition">
            Share
          </button>
        </div>
      </header>

      {/* Content area with sidebar + main */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-60 bg-black border-r border-[#333] p-4 flex flex-col justify-between flex-shrink-0 overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            {/* Top Nav */}
            <nav className="flex flex-col gap-2 mb-6">
              {topNav.map((item) => (
                <NavItem
                  key={item.name}
                  to={item.path}
                  icon={item.icon}
                  name={item.name}
                />
              ))}
            </nav>

            {/* Recent */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-400 mb-2">Recent</p>
              <nav className="flex flex-col gap-2">
                {recentNav.map((item) => (
                  <NavItemBox
                    key={item.name}
                    to={item.path}
                    color={item.color}
                    name={item.name}
                  />
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex-shrink-0">
            <nav className="flex flex-col gap-2 mb-4">
              {bottomNav.map((item) => (
                <NavItem
                  key={item.name}
                  to={item.path}
                  icon={item.icon}
                  name={item.name}
                />
              ))}
            </nav>

            {/* Divider + Profile */}
            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center gap-2 px-3 py-2">
                <User className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-200">
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-900 text-white overflow-y-auto">
          <div className="p-6 px-20">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

// Normal nav item (with icon)
interface NavItemProps {
  to: string;
  icon: LucideIcon;
  name: string;
}

const NavItem = ({ to, icon: Icon, name }: NavItemProps) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center gap-2 px-3 py-2 rounded-md transition ${
        isActive ? "bg-green-600 text-white" : "text-gray-300 hover:bg-gray-800"
      }`
    }
  >
    <Icon className="w-5 h-5" />
    <span className="text-sm font-medium">{name}</span>
  </NavLink>
);

// Special nav item (colored box instead of icon)
interface NavItemBoxProps {
  to: string;
  color: string;
  name: string;
}

const NavItemBox = ({ to, color, name }: NavItemBoxProps) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center gap-2 px-3 py-2 rounded-md transition ${
        isActive ? "bg-green-600 text-white" : "text-gray-300 hover:bg-gray-800"
      }`
    }
  >
    <span className={`w-3 h-3 rounded-full ${color}`} />
    <span className="text-sm font-medium">{name}</span>
  </NavLink>
);

export default NewDashboardLayout;
