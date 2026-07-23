import Card from "@/components/ui/Card";

function ProgressCard({ opportunity }) {
  const tasks = opportunity.tasks || [];

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const total = tasks.length;

  const progress =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );

  return (
    <Card>

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold text-white">
          Project Progress
        </h2>

        <span className="font-bold text-blue-400">
          {progress}%
        </span>

      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-blue-500 transition-all"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="mt-4 flex justify-between text-sm text-slate-400">

        <span>
          {completed} Completed
        </span>

        <span>
          {total - completed} Remaining
        </span>

        <span>
          {total} Total
        </span>

      </div>

    </Card>
  );
}

export default ProgressCard;