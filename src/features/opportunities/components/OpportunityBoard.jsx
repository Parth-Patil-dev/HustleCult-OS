import OpportunityColumn from "./OpportunityColumn";
import { useOpportunities } from "@/context/OpportunityContext";
import OpportunityCard from "./OpportunityCard";
import { useState } from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  DndContext,
  closestCorners,
  DragOverlay,
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
  priorityFilter,
  sortBy,
}) {
  const [activeOpportunity, setActiveOpportunity] = useState(null);
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

const matchesPriority =
  !priorityFilter ||
  (opp.priority || "Medium") === priorityFilter;

return (
  matchesSearch &&
  matchesStage &&
  matchesType &&
  matchesPriority
);
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
function handleDragStart(event) {
  const { active } = event;

  const opportunity = opportunities.find(
    (opp) => opp.id === active.id
  );

  setActiveOpportunity(opportunity);
}
function handleDragEnd(event) {
  const { active, over } = event;

  if (!over) return;

  const activeId = active.id;

  let newStage = over.id;

  const overOpportunity = opportunities.find(
    (opp) => opp.id === over.id
  );

  if (overOpportunity) {
    newStage = overOpportunity.stage;
  }

  updateStage(activeId, newStage);
setActiveOpportunity(null);
}
function handleDragCancel() {
  setActiveOpportunity(null);
}

  return (
  <DndContext
  collisionDetection={closestCorners}
  onDragStart={handleDragStart}
  onDragEnd={handleDragEnd}
  onDragCancel={handleDragCancel}
>
    <div className="w-full overflow-x-auto">
  <div className="flex gap-6 pb-4">
      {stages.map((stage) => {
  const stageOpportunities = sortedOpportunities.filter(
    (opp) => opp.stage === stage
  );

  return (
    <OpportunityColumn
  key={stage}
  title={stage}
  opportunities={stageOpportunities}
/>
  );
})}
</div>
    </div>
    <DragOverlay>
  {activeOpportunity ? (
    <OpportunityCard
      opportunity={activeOpportunity}
    />
  ) : null}
</DragOverlay>
  </DndContext>
);
}

export default OpportunityBoard;