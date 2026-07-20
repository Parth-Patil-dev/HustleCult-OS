import { sidebarItems } from "@/constants/sidebar";
import SidebarItem from "./SidebarItem";
import {
  Home,
  Briefcase,
  Inbox,
  FolderKanban,
  BookOpen,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-950 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white">
          HustleCult OS
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          From Opportunity to Victory
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4">
        <div className="rounded-lg bg-slate-900 p-3">
          <p className="text-sm font-medium text-white">
            HustleCult
          </p>

          <p className="text-xs text-slate-400">
            Team Workspace
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;