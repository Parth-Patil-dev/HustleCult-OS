import { useState } from "react";
import CalendarHeader from "@/features/calendar/components/CalendarHeader";
import CalendarGrid from "@/features/calendar/components/CalendarGrid";
import { useOpportunities } from "@/context/OpportunityContext";
import AddEventModal from "@/features/calendar/components/events/AddEventModal";
import { Button } from "@/components/ui/Button";
import { useEvents } from "@/context/EventContext";

function Calendar() {
  const { opportunities } = useOpportunities();
  const { events } = useEvents();
const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    new Date()
  );

  function previousMonth() {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  }

  function nextMonth() {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  }

  const month = currentDate.toLocaleString("default", {
    month: "long",
  });

  const year = currentDate.getFullYear();

  return (
    <div className="space-y-6">

      <CalendarHeader
        month={month}
        year={year}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
      />
<div className="flex justify-end">
  <Button
    onClick={() => setShowModal(true)}
  >
    + Add Event
  </Button>
</div>
      <CalendarGrid
  currentDate={currentDate}
  opportunities={opportunities}
  events={events}
/>
<AddEventModal
  open={showModal}
  onClose={() => setShowModal(false)}
/>
    </div>
  );
}

export default Calendar;