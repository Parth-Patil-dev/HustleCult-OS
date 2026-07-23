import DescriptionCard from "@/features/opportunities/components/details/DescriptionCard";
import TeamCard from "@/features/opportunities/components/details/TeamCard";

import OpportunitySummary from "./summary/OpportunitySummary";
import QuickStats from "./summary/QuickStats";
import PriorityScoreCard from "./overview/PriorityScoreCard";

function OverviewTab({ opportunity }) {
  return (
    <div className="space-y-6">

      <OpportunitySummary
        opportunity={opportunity}
      />

      <PriorityScoreCard
        opportunity={opportunity}
      />

      <QuickStats
        opportunity={opportunity}
      />

      <DescriptionCard
        description={opportunity.description}
      />

      <TeamCard
        members={opportunity.members || []}
      />

    </div>
  );
}

export default OverviewTab;