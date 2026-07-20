import Card from "@/components/ui/Card";
import { upcomingDeadlines } from "@/data/mockData";

function UpcomingDeadlines() {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-white">
        Upcoming Deadlines
      </h2>

      <div className="mt-5 space-y-4">
        {upcomingDeadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="flex items-center justify-between rounded-lg border border-slate-800 p-4"
          >
            <div>
              <h3 className="font-medium text-white">
                {deadline.title}
              </h3>

              <p className="text-sm text-slate-400">
                {deadline.daysLeft} days remaining
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                deadline.status === "Critical"
                  ? "bg-red-500/20 text-red-400"
                  : "bg-emerald-500/20 text-emerald-400"
              }`}
            >
              {deadline.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default UpcomingDeadlines;