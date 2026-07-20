import { NavLink } from "react-router-dom";

function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
          isActive
            ? "bg-slate-800 text-white"
            : "text-slate-400 hover:bg-slate-900 hover:text-white"
        }`
      }
    >
      <Icon size={20} />
      <span>{item.title}</span>
    </NavLink>
  );
}

export default SidebarItem;