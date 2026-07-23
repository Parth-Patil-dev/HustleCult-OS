import Card from "@/components/ui/Card";
import ProjectHealthCard from "../overview/ProjectHealthCard";
import ProgressBar from "@/components/ui/ProgressBar";
import InfoRow from "@/components/ui/InfoRow";
import Divider from "@/components/ui/Divider";

function OpportunitySummary({ opportunity }) {
  const tasks = opportunity.tasks || [];

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const total = tasks.length;

  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  let daysLeft = "-";

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

  return (
    <Card>

      <div className="space-y-6">

        <ProjectHealthCard
          opportunity={opportunity}
        />

        <Divider />

        <div>

          <div className="mb-2 flex items-center justify-between">

            <h3 className="font-semibold text-white">
              Progress
            </h3>

            <span className="font-bold text-blue-400">
              {progress}%
            </span>

          </div>

          <ProgressBar value={progress} />

        </div>

        <Divider />

        <InfoRow
          label="Deadline"
          value={
            daysLeft === "-"
              ? "-"
              : `${daysLeft} days`
          }
        />

        <InfoRow
          label="Priority"
          value={
            opportunity.priority || "-"
          }
        />

        <InfoRow
          label="Stage"
          value={
            opportunity.stage || "-"
          }
        />

      </div>

    </Card>
  );
}

export default OpportunitySummary;