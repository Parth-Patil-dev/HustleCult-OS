import {
  CalendarDays,
  Building2,
  Tag,
} from "lucide-react";
import PriorityBadge from "@/components/common/PriorityBadge";

const stageColors = {
  Found: "bg-blue-500/20 text-blue-300",
  Interested: "bg-purple-500/20 text-purple-300",
  Researching: "bg-yellow-500/20 text-yellow-300",
  Active: "bg-green-500/20 text-green-300",
  Submitted: "bg-orange-500/20 text-orange-300",
  Results: "bg-pink-500/20 text-pink-300",
};

function HeroSection({ opportunity }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

        {/* Left */}
        <div>

          <h1 className="text-4xl font-bold text-white">
            {opportunity.title}
          </h1>


          <div className="mt-3 space-y-2 text-slate-400">

            <div className="flex items-center gap-2">
              <Building2 size={18}/>
              {opportunity.organization || "Unknown Organization"}
            </div>


            <div className="flex items-center gap-2">
              <Tag size={18}/>
              {opportunity.type || "Unknown Type"}
            </div>


            <div className="flex items-center gap-2">
              <CalendarDays size={18}/>
              {opportunity.deadline || "No Deadline"}
            </div>

          </div>

        </div>


        {/* Right */}
        <div className="flex flex-col items-end gap-3">


          <span
            className={`
              rounded-full px-4 py-2
              text-sm font-semibold
              ${
                stageColors[opportunity.stage]
                ||
                "bg-slate-700 text-white"
              }
            `}
          >
            {opportunity.stage}
          </span>


          <PriorityBadge
            priority={opportunity.priority || "Medium"}
          />


        </div>

      </div>

    </div>
  );
}

export default HeroSection;