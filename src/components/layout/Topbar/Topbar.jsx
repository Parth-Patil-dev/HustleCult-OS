import NotificationBell from "@/features/notifications/components/NotificationBell";
function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold text-white">
        Home
      </h2>

      <div className="flex items-center gap-4">

  <NotificationBell />

  <div className="text-sm text-slate-400">
    Team HustleC  
    </div>

</div>
    </header>
  );
}

export default Topbar;