import { useState } from "react";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckSquare,
  Trash2,
} from "lucide-react";
import { useOpportunities } from "@/context/OpportunityContext";

function TasksCard({ opportunity }) {
  const [task, setTask] = useState("");

  const {
    addTask,
    toggleTask,
    deleteTask,
  } = useOpportunities();

  const totalTasks = opportunity.tasks?.length || 0;

  const completedTasks =
    opportunity.tasks?.filter(
      (task) => task.completed
    ).length || 0;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );
        const sortedTasks = [...(opportunity.tasks || [])].sort(
  (a, b) => {
    if (a.completed === b.completed) return 0;

    return a.completed ? 1 : -1;
  }
);

  function handleAddTask() {
    if (!task.trim()) return;

    addTask(opportunity.id, task);

    setTask("");
  }

  return (
    <Card>
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckSquare
            size={20}
            className="text-blue-400"
          />

          <h2 className="text-lg font-semibold text-white">
            Tasks
          </h2>
        </div>

        <span className="text-sm text-slate-400">
          {completedTasks} / {totalTasks}
        </span>
      </div>

      {/* Progress */}
      <div className="mb-5">
        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              progress >= 70
                ? "bg-green-500"
                : progress >= 30
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="mt-2 text-xs text-slate-400">
          {completedTasks} of {totalTasks} tasks completed ({progress}%)
        </p>
      </div>

      {/* Add Task */}
      <div className="flex gap-3">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
  if (e.key === "Enter") {
    handleAddTask();
  }
}}
          placeholder="Add a task..."
          className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-blue-500"
        />

        <Button
  onClick={handleAddTask}
  disabled={!task.trim()}
>
          Add
        </Button>
      </div>

      {/* Task List */}
      <div className="mt-6 space-y-3">
        {totalTasks === 0 ? (
          <div className="text-slate-400">
            <div className="rounded-lg border border-dashed border-slate-700 py-8 text-center">
  <CheckSquare
    size={34}
    className="mx-auto mb-3 text-slate-600"
  />

  <p className="text-slate-400">
    No tasks yet
  </p>

  <p className="mt-1 text-sm text-slate-500">
    Add your first action item.
  </p>
</div>
          </div>
        ) : (
          sortedTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-lg bg-slate-800 p-3 transition-all duration-200 hover:bg-slate-700"
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() =>
                    toggleTask(opportunity.id, task.id)
                  }
                />

                <span
                  className={
                    task.completed
                      ? "line-through text-slate-500"
                      : "text-white"
                  }
                >
                  {task.text}
                </span>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-red-500"
                onClick={() =>
                  deleteTask(opportunity.id, task.id)
                }
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}

export default TasksCard;