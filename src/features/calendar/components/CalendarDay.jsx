import OpportunityChip from "./OpportunityChip";
import EventChip from "./events/EventChip";

function CalendarDay({
  day,
  isCurrentMonth,
  isToday,
  opportunities,
  events,
}) {
  return (
    <div
      className={`min-h-[140px] border border-slate-800 p-2 ${
        isCurrentMonth
          ? "bg-slate-900"
          : "bg-slate-950 text-slate-600"
      }`}
    >
      <div
        className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full text-sm ${
          isToday
            ? "bg-blue-600 text-white"
            : ""
        }`}
      >
        {day.getDate()}
      </div>

      <div className="space-y-1">

  {opportunities.map((opp) => (
    <OpportunityChip
      key={opp.id}
      opportunity={opp}
    />
  ))}

  {events.map((event) => (
    <EventChip
      key={event.id}
      event={event}
    />
  ))}

</div>
    </div>
  );
}

export default CalendarDay;