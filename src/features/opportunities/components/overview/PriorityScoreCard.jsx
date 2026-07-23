import Card from "@/components/ui/Card";
import { calculatePriority } from "@/utils/priorityScore";

function PriorityScoreCard({ opportunity }) {
  const score =
    calculatePriority(opportunity);
    const reasons = [];

if (opportunity.deadline) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadline = new Date(opportunity.deadline);
  deadline.setHours(0, 0, 0, 0);

  const days = Math.ceil(
    (deadline - today) /
    (1000 * 60 * 60 * 24)
  );

  if (days <= 1)
    reasons.push("Deadline is within 1 day");
  else if (days <= 3)
    reasons.push("Deadline is very close");
}

const tasks = opportunity.tasks || [];

const completed = tasks.filter(
  t => t.completed
).length;

const progress =
  tasks.length === 0
    ? 0
    : (completed / tasks.length) * 100;

if (progress < 50)
  reasons.push("Project progress is below 50%");

if ((opportunity.members || []).length === 0)
  reasons.push("No team members assigned");

  let label = "Low";
  let color = "text-green-400";

  if (score >= 75) {
    label = "Critical";
    color = "text-red-400";
  } else if (score >= 50) {
    label = "High";
    color = "text-orange-400";
  } else if (score >= 25) {
    label = "Medium";
    color = "text-yellow-400";
  }
  

  return (
  <Card>

    <div className="space-y-5">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-white">
            Priority Score
          </h2>

          <p className="mt-2 text-5xl font-black text-white">
            {score}
          </p>
        </div>

        <div className={`text-xl font-bold ${color}`}>
          {label}
        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-slate-800" />

      {/* Reasons */}

      <div>

        <h3 className="mb-3 text-sm font-semibold text-slate-300">
          Why this score?
        </h3>

        <div className="space-y-2">

          {reasons.length === 0 ? (

            <p className="text-sm text-slate-500">
              Everything looks healthy.
            </p>

          ) : (

            reasons.map((reason) => (

              <div
                key={reason}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span className="text-blue-400">•</span>

                {reason}
              </div>

            ))

          )}

        </div>

      </div>

    </div>

  </Card>
);
}

export default PriorityScoreCard;