import { useParams } from "react-router-dom";
import { useOpportunities } from "@/context/OpportunityContext";

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

      <h1 className="text-4xl font-bold">
        {opportunity.title}
      </h1>

      <p>{opportunity.organization}</p>

      <p>{opportunity.type}</p>

      <p>{opportunity.stage}</p>

      <p>{opportunity.deadline}</p>

      <p>{opportunity.description}</p>

    </div>
  );
}

export default OpportunityDetails;