import OpportunityCard from "./OpportunityCard";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function OpportunityColumn({ title, opportunities }) {

  const { setNodeRef, isOver } = useDroppable({
    id: title,
  });

  return (
    <div
      className={`w-[340px] shrink-0 rounded-xl p-4 transition-all duration-200 ${
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


      <SortableContext
  items={opportunities.map((opportunity) => opportunity.id)}
  strategy={verticalListSortingStrategy}
>

  <div
    ref={setNodeRef}
    className="min-h-[300px] space-y-4"
  >

    {opportunities.map((opportunity)=>(
      <OpportunityCard
        key={opportunity.id}
        opportunity={opportunity}
      />
    ))}

  </div>

</SortableContext>

    </div>
  );
}

export default OpportunityColumn;