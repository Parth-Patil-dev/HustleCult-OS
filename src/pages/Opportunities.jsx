import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import AddOpportunityModal from "@/features/opportunities/components/AddOpportunityModal";
import OpportunityBoard from "@/features/opportunities/components/OpportunityBoard";
import { useState } from "react";

function Opportunities() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHeader
        title="Opportunities"
        description="Track every opportunity from discovery to results."
        action={
          <Button onClick={() => setOpen(true)}>
            + Add Opportunity
          </Button>
        }
      />

      <OpportunityBoard />

      <div className="mt-10">
        <AddOpportunityModal
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    </>
  );
}

export default Opportunities;