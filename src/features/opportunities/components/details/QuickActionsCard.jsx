import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useOpportunities } from "@/context/OpportunityContext";
import toast from "react-hot-toast";
import {
  Pencil,
  Globe,
  Copy,
} from "lucide-react";

function QuickActionsCard({ opportunity }) {
    const {
  setEditingOpportunity,
} = useOpportunities();
  function copyLink() {

  console.log("Copy button clicked");

  navigator.clipboard.writeText(window.location.href);

  toast.success("Link copied");
}

  return (
    <Card>

      <h2 className="mb-5 text-lg font-semibold text-white">
        Quick Actions
      </h2>

      <div className="space-y-3">

        <Button
  className="w-full justify-start"
  onClick={() => {
  setEditingOpportunity(opportunity);
}}
>
  <Pencil size={16} />
  Edit Opportunity
</Button>

        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={copyLink}
        >
          <Copy size={16} />
          Copy Link
        </Button>

        {opportunity.link && (
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() =>
              window.open(opportunity.link, "_blank")
            }
          >
            <Globe size={16} />
            Visit Website
          </Button>
        )}

      </div>

    </Card>
  );
}

export default QuickActionsCard;