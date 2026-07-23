import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AttachmentsCard from "@/features/opportunities/components/details/AttachmentsCard";
import { Button } from "@/components/ui/Button";
import { useOpportunities } from "@/context/OpportunityContext";
import NotesCard from "@/features/opportunities/components/details/NotesCard";
import HeroSection from "@/features/opportunities/components/details/HeroSection";
import InfoCards from "@/features/opportunities/components/details/InfoCards";
import DescriptionCard from "@/features/opportunities/components/details/DescriptionCard";
import QuickActionsCard from "@/features/opportunities/components/details/QuickActionsCard";
import TeamCard from "@/features/opportunities/components/details/TeamCard";
import TimelineCard from "@/features/opportunities/components/details/TimelineCard";
import TasksCard from "@/features/opportunities/components/details/TasksCard";
import CommentsCard from "@/features/opportunities/components/details/CommentsCard";
import AddOpportunityModal from "@/features/opportunities/components/AddOpportunityModal";
import { useState } from "react";

function OpportunityDetails() {
  const [activeTab, setActiveTab] = useState("overview");
  const { id } = useParams();
  const navigate = useNavigate();

  const {
  opportunities,
  editingOpportunity,
  setEditingOpportunity,
} = useOpportunities();

  const opportunity = opportunities.find(
    (o) => o.id === Number(id)
  );

  if (!opportunity) {
    return (
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => navigate("/opportunities")}
        >
          <ArrowLeft size={16} />
          Back
        </Button>

        <h1 className="text-2xl font-bold text-white">
          Opportunity not found
        </h1>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AddOpportunityModal
  open={!!editingOpportunity}
  onOpenChange={(value) => {
    if (!value) {
      setEditingOpportunity(null);
    }
  }}
  editingOpportunity={editingOpportunity}
  setEditingOpportunity={setEditingOpportunity}
/>

      <Button
        variant="outline"
        onClick={() => navigate("/opportunities")}
      >
        <ArrowLeft size={16} />
        Back
      </Button>

      <HeroSection opportunity={opportunity} />

<div className="grid gap-6 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <InfoCards opportunity={opportunity} />
  </div>

  <QuickActionsCard
    opportunity={opportunity}
  />

</div>

<div
  className="
    sticky
    top-0
    z-30
    flex
    gap-2
    border-b
    border-slate-800
    bg-slate-950/90
    backdrop-blur-md
    py-3
  "
>

{
[
  {id:"overview", label:"Overview"},
  {id:"tasks", label:"Tasks"},
  {id:"discussion", label:"Discussion"},
  {id:"timeline", label:"Timeline"},
  {id:"files", label:"Files"},
  {id:"notes", label:"Notes"},
].map((tab)=>(
<button
key={tab.id}
onClick={()=>setActiveTab(tab.id)}
className={`px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
  activeTab === tab.id
    ? "border-blue-500 text-white"
    : "border-transparent text-slate-400 hover:text-white"
}`}
>
{tab.label}
</button>
))

}

</div>

<div className="space-y-6">

{
activeTab === "overview" && (
<div className="grid gap-6 lg:grid-cols-2">

  <DescriptionCard
    description={opportunity.description}
  />

  <TeamCard
    members={opportunity.members || []}
  />

</div>
)
}


{
activeTab === "tasks" && (
<TasksCard
opportunity={opportunity}
/>
)
}


{
activeTab === "discussion" && (
<CommentsCard
opportunity={opportunity}
/>
)
}


{
activeTab === "timeline" && (
<TimelineCard
activity={opportunity.activity || []}
/>
)
}


{
activeTab === "files" && (
<AttachmentsCard
opportunity={opportunity}
/>
)
}


{
activeTab === "notes" && (
<NotesCard
opportunity={opportunity}
/>
)
}

</div>

    </div>
  );
}

export default OpportunityDetails;