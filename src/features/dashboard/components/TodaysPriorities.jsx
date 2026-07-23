import Card from "@/components/ui/Card";
import { AlertTriangle } from "lucide-react";
import { useOpportunities } from "@/context/OpportunityContext";

function TodaysPriorities() {
  const { opportunities } = useOpportunities();

  const today = new Date();

  const priorities = opportunities
    .filter((opp) => {
      if (!opp.deadline) return false;

      const deadline = new Date(opp.deadline);

      const diff = Math.ceil(
        (deadline - today) /
          (1000 * 60 * 60 * 24)
      );

      return diff >= 0 && diff <= 3;
    })
    .sort(
      (a, b) =>
        new Date(a.deadline) -
        new Date(b.deadline)
    );

  return (
    <Card>

      <div className="mb-5 flex items-center gap-2">

        <AlertTriangle
          className="text-red-400"
          size={20}
        />

        <h2 className="text-lg font-semibold text-white">
          Today's Priorities
        </h2>

      </div>

      {priorities.length === 0 ? (
        <p className="text-slate-400">
          Nothing urgent 🎉
        </p>
      ) : (
        <div className="space-y-3">

          {priorities.map((opp) => (

            <div
              key={opp.id}
              className="rounded-lg bg-slate-800 p-3"
            >

              <h3 className="font-semibold text-white">
                {opp.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {opp.deadline}
              </p>

            </div>

          ))}

        </div>
      )}

    </Card>
  );
}

export default TodaysPriorities;