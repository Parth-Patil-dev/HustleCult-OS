function categoryColor(category) {
  switch (category) {
    case "Registration":
      return "bg-green-600";

    case "Submission":
      return "bg-red-600";

    case "Meeting":
      return "bg-purple-600";

    case "Interview":
      return "bg-orange-600";

    case "Reminder":
      return "bg-blue-600";

    case "Result":
      return "bg-yellow-500 text-black";

    default:
      return "bg-slate-600";
  }
}

function EventChip({ event }) {
  return (
    <div
      className={`truncate rounded px-2 py-1 text-xs text-white ${categoryColor(
        event.category
      )}`}
    >
      📅 {event.title}
    </div>
  );
}

export default EventChip;