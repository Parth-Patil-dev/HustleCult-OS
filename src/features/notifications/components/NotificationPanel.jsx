import { useNotifications } from "@/context/NotificationContext";
import NotificationCard from "./NotificationCard";

function NotificationPanel() {

  const {
    notifications,
    markAllAsRead,
  } = useNotifications();


  return (
    <div className="absolute right-0 top-12 z-50 w-96 rounded-xl border border-slate-800 bg-slate-950 shadow-xl">

      <div className="flex items-center justify-between border-b border-slate-800 p-4">

        <h3 className="font-semibold text-white">
          Notifications
        </h3>

        <button
          onClick={markAllAsRead}
          className="text-xs text-blue-400 hover:text-blue-300"
        >
          Mark all read
        </button>

      </div>


      <div className="max-h-[400px] overflow-y-auto p-3">

        {notifications.length === 0 ? (

          <p className="text-center text-sm text-slate-400">
            No notifications
          </p>

        ) : (

          notifications.map((item) => (
            <NotificationCard
              key={item.id}
              notification={item}
            />
          ))

        )}

      </div>

    </div>
  );
}

export default NotificationPanel;