import { useState } from "react";
import { Bell } from "lucide-react";

import { useNotifications } from "@/context/NotificationContext";
import NotificationPanel from "./NotificationPanel";

function NotificationBell() {

  const [open, setOpen] = useState(false);

  const {
  notifications,
  markAllAsRead,
} = useNotifications();


  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;


  return (
    <div className="relative">

      <button
  onClick={() => {
    setOpen(!open);

    if (!open) {
      markAllAsRead();
    }
  }}
        className="relative rounded-lg p-2 text-slate-300 hover:bg-slate-800"
      >

        <Bell size={22} />

        {unreadCount > 0 && (
          <span
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
          >
            {unreadCount}
          </span>
        )}

      </button>


      {open && (
        <NotificationPanel />
      )}

    </div>
  );
}

export default NotificationBell;