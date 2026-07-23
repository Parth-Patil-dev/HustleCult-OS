import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import ProgressBar from "@/components/ui/ProgressBar";
import { useOpportunities } from "@/context/OpportunityContext";
import { calculatePriority } from "@/utils/priorityScore";

function FocusPanel() {
  const { opportunities } = useOpportunities();
  const navigate = useNavigate();

  if (opportunities.length === 0) {
    return null;
  }

  const sorted = [...opportunities].sort(
    (a, b) =>
      calculatePriority(b) -
      calculatePriority(a)
  );

  const opportunity = sorted[0];

  const tasks = opportunity.tasks || [];

const completed =
  tasks.filter((t) => t.completed).length;

const progress =
  tasks.length === 0
    ? 0
    : Math.round((completed / tasks.length) * 100);

let deadline = "-";

if (opportunity.deadline) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const end = new Date(opportunity.deadline);
  end.setHours(0, 0, 0, 0);

  const days = Math.ceil(
    (end - today) / (1000 * 60 * 60 * 24)
  );

  if (days < 0) deadline = "Overdue";
  else if (days === 0) deadline = "Today";
  else if (days === 1) deadline = "Tomorrow";
  else deadline = `${days} days`;
}

let focusReason = "Highest priority opportunity";

if (deadline === "Today") {
  focusReason = "Deadline is today";
} else if (deadline === "Tomorrow") {
  focusReason = "Deadline is tomorrow";
} else if (progress < 40) {
  focusReason = "Progress needs attention";
} else if (tasks.length === 0) {
  focusReason = "No tasks created yet";
}

  return (
    <Card className="border-blue-900 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950">

      <div className="space-y-6">

        <div>

          <p className="text-blue-400 font-semibold">
            🎯 Today's Focus
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            {opportunity.title}
          </h2>
          <p className="mt-2 text-slate-400">
  {focusReason}
</p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div>

            <p className="text-xs uppercase text-slate-500">
              Priority
            </p>

            <p className="text-3xl font-bold text-white">
              {calculatePriority(opportunity)}
            </p>

          </div>

          <div>

            <p className="text-xs uppercase text-slate-500">
              Deadline
            </p>

            <p className="text-xl font-semibold text-white">
              {deadline}
            </p>

          </div>

          <div>

            <p className="text-xs uppercase text-slate-500">
              Progress
            </p>

            <p className="text-xl font-semibold text-white">
              {progress}%
            </p>
            <div className="mt-2">
  <ProgressBar value={progress} />
</div>

          </div>

          <div>

            <p className="text-xs uppercase text-slate-500">
              Tasks
            </p>

            <p className="text-xl font-semibold text-white">
              {completed}/{tasks.length}
            </p>

          </div>

        </div>

        <div className="flex justify-end">

          <Button
            onClick={() =>
              navigate(
                `/opportunities/${opportunity.id}`
              )
            }
          >
            Open Workspace

            <ArrowRight size={18}/>
          </Button>

        </div>

      </div>

    </Card>
  );
}

export default FocusPanel;