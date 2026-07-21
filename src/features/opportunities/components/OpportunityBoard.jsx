import OpportunityColumn from "./OpportunityColumn";
import { useOpportunities } from "@/context/OpportunityContext";
import {
  DndContext,
  closestCorners,
} from "@dnd-kit/core";
const stages = [
  "Found",
  "Interested",
  "Researching",
  "Active",
  "Submitted",
  "Results",
];

function OpportunityBoard({
  search,
  stageFilter,
  typeFilter,
  sortBy,
}) {
  const {
  opportunities,
  updateStage,
} = useOpportunities();
const filteredOpportunities = opportunities.filter((opp) => {
  const query = search.toLowerCase();

  const matchesSearch =
    (opp.title ?? "").toLowerCase().includes(query) ||
    (opp.organization ?? "").toLowerCase().includes(query) ||
    (opp.type ?? "").toLowerCase().includes(query);

  const matchesStage =
    !stageFilter || opp.stage === stageFilter;

  const matchesType =
    !typeFilter || opp.type === typeFilter;

  return matchesSearch && matchesStage && matchesType;
}); 
const sortedOpportunities = [...filteredOpportunities];

switch (sortBy) {
  case "Deadline (Earliest)":
    sortedOpportunities.sort(
      (a, b) => new Date(a.deadline) - new Date(b.deadline)
    );
    break;

  case "Deadline (Latest)":
    sortedOpportunities.sort(
      (a, b) => new Date(b.deadline) - new Date(a.deadline)
    );
    break;

  case "Newest":
    sortedOpportunities.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    break;

  case "Oldest":
    sortedOpportunities.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    break;

  case "A-Z":
    sortedOpportunities.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    break;

  default:
    break;
}
function handleDragEnd(event) {
  const { active, over } = event;

  if (!over) return;

  updateStage(active.id, over.id);
}

  return (
  <DndContext
  collisionDetection={closestCorners}
  onDragEnd={handleDragEnd}
>
    <div className="flex gap-6 overflow-x-auto pb-4">
      {stages.map((stage) => (
        <OpportunityColumn
          key={stage}
          title={stage}
          opportunities={sortedOpportunities.filter(
  (opp) => opp.stage === stage
)}
        />
      ))}
    </div>
  </DndContext>
);
}

export default OpportunityBoard;