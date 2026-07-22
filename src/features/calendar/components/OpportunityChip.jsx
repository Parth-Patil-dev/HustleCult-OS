import { useNavigate } from "react-router-dom";

const colors = {
  Critical: "bg-red-500",
  High: "bg-orange-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

function OpportunityChip({ opportunity }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate(`/opportunities/${opportunity.id}`)
      }
      className={`w-full truncate rounded px-2 py-1 text-left text-xs font-medium text-white transition hover:opacity-90 ${
        colors[opportunity.priority] ||
        "bg-blue-500"
      }`}
    >
      {opportunity.title}
    </button>
  );
}

export default OpportunityChip;