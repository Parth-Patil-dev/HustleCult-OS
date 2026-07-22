import { useNotifications } from "@/context/NotificationContext";

function NotificationCard({
  notification,
}) {

  const {
    markAsRead,
  } = useNotifications();


  return (
    <button
      onClick={() =>
        markAsRead(notification.id)
      }
      className={`mb-2 w-full rounded-lg p-3 text-left transition ${
        notification.read
          ? "bg-slate-900"
          : "bg-blue-500/10"
      }`}
    >

      <h4 className="text-sm font-semibold text-white">
        {notification.title}
      </h4>


      <p className="mt-1 text-sm text-slate-400">
        {notification.message}
      </p>


      <p className="mt-2 text-xs text-slate-500">
        {new Date(
          notification.createdAt
        ).toLocaleString()}
      </p>

    </button>
  );
}

export default NotificationCard;