import {
  CalendarDays,
  Building2,
  Tag,
} from "lucide-react";
import PriorityBadge from "@/components/common/PriorityBadge";
import ProgressBar from "@/components/ui/ProgressBar";
import { calculateOpportunityHealth } from "@/utils/opportunityHealth";
const stageColors = {
  Found: "bg-blue-500/20 text-blue-300",
  Interested: "bg-purple-500/20 text-purple-300",
  Researching: "bg-yellow-500/20 text-yellow-300",
  Active: "bg-green-500/20 text-green-300",
  Submitted: "bg-orange-500/20 text-orange-300",
  Results: "bg-pink-500/20 text-pink-300",
};

function HeroSection({ opportunity }) {
  const tasks = opportunity.tasks || [];

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const progress =
  tasks.length === 0
    ? 0
    : Math.round(
        (completedTasks / tasks.length) * 100
      );
      const health = calculateOpportunityHealth(opportunity);

const healthColor =
  health >= 80
    ? "text-emerald-400"
    : health >= 50
    ? "text-yellow-400"
    : "text-red-400";

let daysLeft = null;

if (opportunity.deadline) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadline = new Date(opportunity.deadline);
  deadline.setHours(0, 0, 0, 0);

  daysLeft = Math.ceil(
    (deadline - today) /
    (1000 * 60 * 60 * 24)
  );
}

let deadlineText = "No Deadline";
let deadlineColor = "text-slate-400";

if (daysLeft !== null) {
  if (daysLeft < 0) {
    deadlineText = "Overdue";
    deadlineColor = "text-red-400";
  } else if (daysLeft === 0) {
    deadlineText = "Due Today";
    deadlineColor = "text-red-400";
  } else if (daysLeft === 1) {
    deadlineText = "Due Tomorrow";
    deadlineColor = "text-orange-400";
  } else {
    deadlineText = `${daysLeft} days remaining`;
    deadlineColor = "text-emerald-400";
  }
}
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-xl">

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

        {/* Left */}
        <div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            {opportunity.title}
          </h1>


          <div className="mt-3 space-y-2 text-slate-400">

            <div className="flex items-center gap-2">
              <Building2
  size={18}
  className="text-blue-400"
/>
              {opportunity.organization || "Unknown Organization"}
            </div>


            <div className="flex items-center gap-2">
              <Tag
  size={18}
  className="text-violet-400"
/>
              {opportunity.type || "Unknown Type"}
            </div>


            <div className="flex items-center gap-2">
  <CalendarDays
    size={18}
    className="text-emerald-400"
  />

  <span className={deadlineColor}>
    {deadlineText}
  </span>
</div>

          </div>

        </div>
        <div className="mt-8">

  <div className="mb-3 flex items-center justify-between">

    <span className="text-sm text-slate-400">
      Project Progress
    </span>

    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-300">
  {progress}%
</span>

  </div>

  <ProgressBar value={progress} />

</div>
<div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">

  <div>
    <p className="text-xs uppercase text-slate-500">
      Tasks
    </p>

    <p className="mt-1 text-xl font-bold text-white">
      {completedTasks}/{tasks.length}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase text-slate-500">
      Team
    </p>

    <p className="mt-1 text-xl font-bold text-white">
      {(opportunity.members || []).length}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase text-slate-500">
      Days Left
    </p>

    <p className="mt-1 text-xl font-bold text-white">
      {daysLeft ?? "-"}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase text-slate-500">
      Prize
    </p>

    <p className="mt-1 text-xl font-bold text-white">
      {opportunity.prize || "-"}
    </p>
  </div>
<div>
  <p className="text-xs uppercase text-slate-500">
    Health
  </p>

  <p className={`mt-1 text-xl font-bold ${healthColor}`}>
    {health}%
  </p>
</div>
</div>


        {/* Right */}
        <div className="flex flex-col items-end gap-3">


          <span
            className={`
              rounded-full px-4 py-2
              text-sm font-semibold
              ${
                stageColors[opportunity.stage]
                ||
                "bg-slate-700 text-white"
              }
            `}
          >
            {opportunity.stage}
          </span>


          <PriorityBadge
            priority={opportunity.priority || "Medium"}
          />


        </div>

      </div>

    </div>
  );
}

export default HeroSection;