import Card from "@/components/ui/Card";

function ProjectHealthCard({ opportunity }) {
  const tasks = opportunity.tasks || [];

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const total = tasks.length;

  const progress =
    total === 0
      ? 0
      : (completed / total) * 100;

  let health = "No Deadline";
  let color = "text-slate-400";
  let bg = "bg-slate-700";
  let description =
  "No deadline has been assigned.";

  if (opportunity.deadline) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadline = new Date(opportunity.deadline);
    deadline.setHours(0, 0, 0, 0);

    const daysLeft = Math.ceil(
      (deadline - today) /
      (1000 * 60 * 60 * 24)
    );

    if (
      progress >= 70 ||
      opportunity.stage === "Won" ||
      opportunity.stage === "Completed"
    ) {
      health = "On Track";
color = "text-green-400";
bg = "bg-green-500";
description =
  "Everything is progressing well. Keep up the momentum.";
    } else if (
      daysLeft <= 3 &&
      progress < 40
    ) {
      health = "Critical";
color = "text-red-400";
bg = "bg-red-500";
description =
  "Deadline is approaching while progress is behind schedule.";
    } else if (
      daysLeft <= 7 ||
      progress < 70
    ) {
      health = "At Risk";
color = "text-yellow-400";
bg = "bg-yellow-500";
description =
  "Project needs attention to stay on schedule.";
    }
  }

  return (
  <Card>

    <div className="space-y-5">

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold text-white">
          Project Health
        </h2>

        <div className="flex items-center gap-2">

          <div
            className={`h-3 w-3 rounded-full ${bg}`}
          />

          <span
            className={`font-semibold ${color}`}
          >
            {health}
          </span>

        </div>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">

        <div
          className={`${bg} h-full transition-all duration-500`}
          style={{
            width: `${Math.max(progress, 8)}%`,
          }}
        />

      </div>

      <p className="text-sm leading-6 text-slate-400">
        {description}
      </p>

    </div>

  </Card>
);
}

export default ProjectHealthCard;