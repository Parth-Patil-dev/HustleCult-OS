import { CalendarDays, Building2, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useOpportunities } from "@/context/OpportunityContext";
import { useDraggable } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";
import { CSS } from "@dnd-kit/utilities";
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
  isDragging,
} = useDraggable({
  id: opportunity.id,
});
const style = {
  transform: CSS.Translate.toString(transform),
  opacity: isDragging ? 0.5 : 1,
};
  

  return (
    <div
  ref={setNodeRef}
  style={style}
  {...listeners}
  {...attributes}
  onClick={() => navigate(`/opportunities/${opportunity.id}`)}
  className="cursor-pointer rounded-xl border bg-card p-5 shadow-sm transition hover:shadow-md hover:scale-[1.02]"
>

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold">
            {opportunity.title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {opportunity.type}
          </p>

        </div>

         

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

      {opportunity.description && (
        <p className="mt-4 text-sm">
          {opportunity.description}
        </p>
      )}

      <div className="mt-6 flex justify-end gap-2">

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

    </div>
  );
}

export default OpportunityCard;