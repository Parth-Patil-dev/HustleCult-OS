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
  const [open, setOpen] = useState(false);
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

<InfoCards opportunity={opportunity} />

<QuickActionsCard
  opportunity={opportunity}
/>

<div className="space-y-6 lg:col-span-2">

  <DescriptionCard
    description={opportunity.description}
  />

  <TeamCard
    members={opportunity.members || []}
  />

  <TasksCard
    opportunity={opportunity}
  />

  <CommentsCard
    opportunity={opportunity}
  />

  <TimelineCard
    activity={opportunity.activity || []}
  />

  <AttachmentsCard
    opportunity={opportunity}
  />

  <NotesCard
    opportunity={opportunity}
  />

</div>

    </div>
  );
}

export default OpportunityDetails;