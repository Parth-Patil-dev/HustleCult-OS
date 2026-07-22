import CalendarDay from "./CalendarDay";

const weekDays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

function CalendarGrid({
  currentDate,
  opportunities,
  events,
}) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);

  const startDate = new Date(firstDay);

  startDate.setDate(
    firstDay.getDate() - firstDay.getDay()
  );

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const days = [];

  for (let i = 0; i < 42; i++) {
    const day = new Date(startDate);

    day.setDate(startDate.getDate() + i);

    const dayOpportunities = opportunities.filter(
      (opp) => {
        if (!opp.deadline) return false;

        const deadline = new Date(opp.deadline);

        return (
          deadline.getFullYear() === day.getFullYear() &&
          deadline.getMonth() === day.getMonth() &&
          deadline.getDate() === day.getDate()
        );
      }
    );
    const dayEvents = events.filter((event) => {
  if (!event.date) return false;

  const eventDate = new Date(event.date);

  return (
    eventDate.getFullYear() === day.getFullYear() &&
    eventDate.getMonth() === day.getMonth() &&
    eventDate.getDate() === day.getDate()
  );
});

    days.push({
  date: day,
  isCurrentMonth:
    day.getMonth() === month,
  isToday:
    day.getTime() === today.getTime(),
  opportunities: dayOpportunities,
  events: dayEvents,
});
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800">

      <div className="grid grid-cols-7 bg-slate-950">
        {weekDays.map((day) => (
          <div
            key={day}
            className="border-b border-slate-800 py-3 text-center text-sm font-semibold text-slate-400"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {days.map((day) => (
          <CalendarDay
  key={day.date.toISOString()}
  day={day.date}
  isCurrentMonth={day.isCurrentMonth}
  isToday={day.isToday}
  opportunities={day.opportunities}
  events={day.events}
/>
        ))}
      </div>

    </div>
  );
}

export default CalendarGrid;