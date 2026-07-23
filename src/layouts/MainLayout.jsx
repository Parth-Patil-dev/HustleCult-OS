import { Outlet } from "react-router-dom";

import Sidebar from "@/components/layout/Sidebar/Sidebar";
import Topbar from "@/components/layout/Topbar/Topbar";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950 overflow-hidden">

      <Sidebar />

<div className="flex-1">

  <Topbar />

  <main className="relative bg-slate-950 p-6 overflow-hidden">
    <Outlet />
  </main>

</div>

      </div>

  );
}

export default MainLayout;