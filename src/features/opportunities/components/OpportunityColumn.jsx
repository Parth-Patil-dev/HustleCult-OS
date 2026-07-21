import OpportunityCard from "./OpportunityCard";
import { useDroppable } from "@dnd-kit/core";

function OpportunityColumn({ title, opportunities }) {
  const { setNodeRef, isOver } = useDroppable({
  id: title,
});
  return (
    <div
  ref={setNodeRef}
  className={`min-w-[340px] rounded-xl p-4 transition-all duration-200 ${
    isOver
      ? "bg-slate-800 ring-2 ring-blue-500"
      : "bg-slate-950"
  }`}
>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          {opportunities.length}
        </span>
      </div>

      <div className="space-y-4">
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
          />
        ))}
      </div>
    </div>
  );
}

export default OpportunityColumn;