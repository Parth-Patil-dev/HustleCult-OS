import Card from "@/components/ui/Card";
import { useOpportunities } from "@/context/OpportunityContext";
import {
  Activity,
  Clock,
} from "lucide-react";

function RecentActivity() {
  const { opportunities } = useOpportunities();

  const activities = opportunities
    .flatMap((opportunity) =>
      (opportunity.activity || []).map((item) => ({
        ...item,
        opportunityTitle: opportunity.title,
      }))
    )
    .sort(
      (a, b) =>
        new Date(b.time) - new Date(a.time)
    )
    .slice(0, 10);

  return (
    <Card>

      <div className="mb-5 flex items-center gap-2">
        <Activity
          size={20}
          className="text-blue-400"
        />

        <h2 className="text-lg font-semibold text-white">
          Recent Activity
        </h2>
      </div>

      {activities.length === 0 ? (
        <div className="py-8 text-center">

          <Clock
            size={36}
            className="mx-auto mb-3 text-slate-600"
          />

          <p className="text-slate-400">
            No activity yet.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {activities.map((activity) => (
            <div
              key={activity.id}
              className="rounded-lg bg-slate-800 p-4"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="font-medium text-white">
                    {activity.message}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {activity.opportunityTitle}
                  </p>

                </div>

                <span className="text-xs text-slate-500">
                  {new Date(
                    activity.time
                  ).toLocaleDateString([], {
                    day: "numeric",
                    month: "short",
                  })}
                </span>

              </div>
            </div>
          ))}

        </div>
      )}

    </Card>
  );
}

export default RecentActivity;