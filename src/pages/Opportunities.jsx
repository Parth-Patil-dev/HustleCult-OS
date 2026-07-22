import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import AddOpportunityModal from "@/features/opportunities/components/AddOpportunityModal";
import OpportunityBoard from "@/features/opportunities/components/OpportunityBoard";
import { useState } from "react";
import SearchBar from "@/components/shared/SearchBar";
import FilterSelect from "@/components/shared/FilterSelect";

function Opportunities() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
const [typeFilter, setTypeFilter] = useState("");
const [priorityFilter, setPriorityFilter] = useState("");
const [editingOpportunity, setEditingOpportunity] = useState(null);

  return (
  <div className="w-full min-w-0">
      <PageHeader
        title="Opportunities"
        description="Track every opportunity from discovery to results."
        action={
          <Button onClick={() => setOpen(true)}>
            + Add Opportunity
          </Button>
        }
      />

<AddOpportunityModal
  open={open}
  onOpenChange={setOpen}
  editingOpportunity={editingOpportunity}
  setEditingOpportunity={setEditingOpportunity}
/>
<div className="mb-6 flex flex-wrap items-center gap-4">

  <SearchBar
    value={search}
    onChange={setSearch}
  />

  <FilterSelect
    value={stageFilter}
    onChange={setStageFilter}
    placeholder="All Stages"
    options={[
      "Found",
      "Interested",
      "Researching",
      "Active",
      "Submitted",
      "Results",
    ]}
  />

  <FilterSelect
    value={typeFilter}
    onChange={setTypeFilter}
    placeholder="All Types"
    options={[
      "Hackathon",
      "Internship",
      "Competition",
      "Workshop",
      "Scholarship",
      "Job",
    ]}
  />
  <FilterSelect
  value={priorityFilter}
  onChange={setPriorityFilter}
  placeholder="All Priorities"
  options={[
    "Critical",
    "High",
    "Medium",
    "Low",
  ]}
/>
  <FilterSelect
  value={sortBy}
  onChange={setSortBy}
  placeholder="Sort"
  options={[
    "Deadline (Earliest)",
    "Deadline (Latest)",
    "Newest",
    "Oldest",
    "A-Z",
  ]}
/>

</div>
      <OpportunityBoard
  search={search}
  stageFilter={stageFilter}
  typeFilter={typeFilter}
  priorityFilter={priorityFilter}
  sortBy={sortBy}
/>

      <div className="mt-10">
      </div>
      </div>
);
}

export default Opportunities;