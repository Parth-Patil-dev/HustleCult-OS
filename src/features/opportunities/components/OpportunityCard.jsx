import {
  CalendarDays,
  Building2,
  Pencil,
  Trash2,
  GripVertical,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useOpportunities } from "@/context/OpportunityContext";
import { useSortable } from "@dnd-kit/sortable";
import { useNavigate } from "react-router-dom";
import { CSS } from "@dnd-kit/utilities";
import PriorityBadge from "@/components/common/PriorityBadge";
import ProgressBar from "@/components/ui/ProgressBar";
import { calculateOpportunityHealth } from "@/utils/opportunityHealth";
const stageColors = {
  Found: "bg-blue-100 text-blue-700",
  Interested: "bg-purple-100 text-purple-700",
  Researching: "bg-yellow-100 text-yellow-700",
  Active: "bg-green-100 text-green-700",
  Submitted: "bg-orange-100 text-orange-700",
  Results: "bg-pink-100 text-pink-700",
};

function OpportunityCard({ opportunity }) {
  const {
  deleteOpportunity,
  setEditingOpportunity,
} = useOpportunities();
const navigate = useNavigate();
const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition,
  isDragging,
} = useSortable({
  id: opportunity.id,
});

const style = {
  transform: CSS.Transform.toString(transform),
  transition,
  opacity: isDragging ? 0.5 : 1,
};
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
  

  return (
    <div
  ref={setNodeRef}
  style={style}
  onClick={(e)=>{
    if(isDragging) return;
    navigate(`/opportunities/${opportunity.id}`);
  }}
  className="
group
cursor-pointer
rounded-xl
border
border-slate-800
bg-slate-900
p-5
shadow-sm
transition-all
duration-200
hover:-translate-y-1
hover:border-blue-500/40
hover:shadow-xl
"
>

      <div className="flex items-start justify-between">

  <div>

    <div className="flex items-start justify-between gap-3">

  <div>

    <h3 className="text-lg font-semibold">
      {opportunity.title}
    </h3>

    <p className="mt-1 text-sm text-muted-foreground">
      {opportunity.type}
    </p>

  </div>

  <PriorityBadge
    priority={opportunity.priority || "Medium"}
  />

</div>

  </div>

  <button
    {...listeners}
    {...attributes}
    onClick={(e) => e.stopPropagation()}
    className="cursor-grab rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white active:cursor-grabbing"
  >
    <GripVertical size={18} />
  </button>

</div>

      <div className="mt-5 space-y-2">
        <span
  className={`rounded-full px-3 py-1 text-xs font-medium ${
    stageColors[opportunity.stage] || "bg-gray-100 text-gray-700"
  }`}
>
  {opportunity.stage}
</span>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 size={16} />
          {opportunity.organization || "Unknown Organization"}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays size={16} />
          {opportunity.deadline || "No deadline"}
        </div>

      </div>

      <div className="mt-5">
  <div className="mb-2 flex items-center justify-between text-xs">
    <span className="text-slate-400">
      Progress
    </span>

    <span className="font-semibold text-white">
      {progress}%
    </span>
  </div>

  <ProgressBar value={progress} />
</div>

<div className="mt-4 flex items-center justify-between text-sm">

  <span className={healthColor}>
    ● Health {health}%
  </span>

  <span className="text-slate-400">
    ☑ {completedTasks}/{tasks.length}
  </span>

</div>

      <div className="mt-6 flex justify-end gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">

  <Button
    variant="outline"
    size="sm"
    onClick={(e) => {
      e.stopPropagation();
      setEditingOpportunity(opportunity);
    }}
  >
    <Pencil size={16} />
  </Button>

  <Button
    variant="destructive"
    size="sm"
    onClick={(e) => {
      e.stopPropagation();
      deleteOpportunity(opportunity.id);
    }}
  >
    <Trash2 size={16} />
  </Button>

</div>

        <Button
  variant="outline"
  size="sm"
  onClick={(e) => {
    e.stopPropagation();
    setEditingOpportunity(opportunity);
  }}
>
  <Pencil size={16} />
</Button>

        <Button
  variant="destructive"
  size="sm"
  onClick={(e) => {
    e.stopPropagation();
    deleteOpportunity(opportunity.id);
  }}
>
          <Trash2 size={16} />
        </Button>

      </div>

  );
}

export default OpportunityCard;