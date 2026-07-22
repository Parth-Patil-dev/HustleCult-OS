import Card from "@/components/ui/Card";
import { useOpportunities } from "@/context/OpportunityContext";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function getDaysLeft(deadline) {
  if (!deadline) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(deadline);
  due.setHours(0, 0, 0, 0);

  const diff = Math.ceil(
    (due - today) / (1000 * 60 * 60 * 24)
  );

  if (diff < 0) return "Overdue";
  if (diff === 0) return "Due Today";
  if (diff === 1) return "Due Tomorrow";

  return `${diff} days left`;
}

function PriorityCenter() {
  const { opportunities } = useOpportunities();
  const navigate = useNavigate();

  const priorityOrder = {
    Critical: 0,
    High: 1,
    Medium: 2,
    Low: 3,
  };

  const priorityColor = {
    Critical: "bg-red-500",
    High: "bg-orange-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };

  const important = opportunities
    .filter(
      (o) =>
        o.priority === "Critical" ||
        o.priority === "High"
    )
    .sort((a, b) => {
      const priorityDiff =
        priorityOrder[a.priority] -
        priorityOrder[b.priority];

      if (priorityDiff !== 0) return priorityDiff;

      return (
        new Date(a.deadline || "9999-12-31") -
        new Date(b.deadline || "9999-12-31")
      );
    })
    .slice(0, 5);

  return (
    <Card>
      <div className="mb-5 flex items-center gap-2">
        <AlertTriangle
          size={20}
          className="text-orange-400"
        />

        <h2 className="text-lg font-semibold text-white">
          Priority Center
        </h2>
      </div>

      {important.length === 0 ? (
        <p className="text-slate-400">
          No high-priority opportunities.
        </p>
      ) : (
        <div className="space-y-3">
          {important.map((opp) => (
            <div
  key={opp.id}
  onClick={() =>
    navigate(`/opportunities/${opp.id}`)
  }
  className="flex cursor-pointer items-center justify-between rounded-lg bg-slate-800 p-4 transition hover:bg-slate-700 hover:scale-[1.01]"
>
              <div>
                <h3 className="font-semibold text-white">
                  {opp.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {getDaysLeft(opp.deadline)}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${priorityColor[opp.priority]}`}
              >
                {opp.priority}
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default PriorityCenter;