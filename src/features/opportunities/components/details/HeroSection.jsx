import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const stageColors = {
  Found: "bg-blue-500/20 text-blue-400",
  Interested: "bg-purple-500/20 text-purple-400",
  Researching: "bg-yellow-500/20 text-yellow-400",
  Active: "bg-green-500/20 text-green-400",
  Submitted: "bg-orange-500/20 text-orange-400",
  Results: "bg-pink-500/20 text-pink-400",
};

function HeroSection({ opportunity }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">

      <Button
        variant="ghost"
        onClick={() => navigate("/opportunities")}
        className="gap-2"
      >
        <ArrowLeft size={18} />
        Back
      </Button>

      <div className="flex items-start justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            {opportunity.title}
          </h1>

          <p className="mt-2 text-slate-400">
            {opportunity.organization}
          </p>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            stageColors[opportunity.stage]
          }`}
        >
          {opportunity.stage}
        </span>

      </div>

    </div>
  );
}

export default HeroSection;