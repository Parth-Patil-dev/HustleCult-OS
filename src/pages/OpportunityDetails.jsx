import { useParams } from "react-router-dom";
import { useOpportunities } from "@/context/OpportunityContext";
import HeroSection from "@/features/opportunities/components/details/HeroSection";
import InfoCards from "@/features/opportunities/components/details/InfoCards";

function OpportunityDetails() {
  const { id } = useParams();

  const { opportunities } = useOpportunities();

  const opportunity = opportunities.find(
    (o) => o.id === Number(id)
  );

  if (!opportunity) {
    return (
      <div className="text-white">
        Opportunity not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <HeroSection opportunity={opportunity} />
      <InfoCards opportunity={opportunity} />

      <p>{opportunity.description}</p>

    </div>
  );
}

export default OpportunityDetails;