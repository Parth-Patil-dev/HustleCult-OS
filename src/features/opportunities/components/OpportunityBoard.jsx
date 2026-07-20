import OpportunityColumn from "./OpportunityColumn";
import { opportunities } from "@/data/opportunities";

const stages = [
  "Found",
  "Interested",
  "Researching",
  "Active",
  "Submitted",
  "Results",
];

function OpportunityBoard() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {stages.map((stage) => (
        <OpportunityColumn
          key={stage}
          title={stage}
          opportunities={opportunities.filter(
            (opp) => opp.stage === stage
          )}
        />
      ))}
    </div>
  );
}

export default OpportunityBoard;