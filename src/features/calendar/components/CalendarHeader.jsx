import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

function CalendarHeader({
  month,
  year,
  previousMonth,
  nextMonth,
}) {
  return (
    <div className="mb-6 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Calendar
        </h1>

        <p className="mt-1 text-slate-400">
          View all opportunity deadlines
        </p>
      </div>

      <div className="flex items-center gap-4">

        <Button
          variant="outline"
          size="icon"
          onClick={previousMonth}
        >
          <ChevronLeft size={18} />
        </Button>

        <h2 className="w-48 text-center text-xl font-semibold text-white">
          {month} {year}
        </h2>

        <Button
          variant="outline"
          size="icon"
          onClick={nextMonth}
        >
          <ChevronRight size={18} />
        </Button>

      </div>

    </div>
  );
}

export default CalendarHeader;