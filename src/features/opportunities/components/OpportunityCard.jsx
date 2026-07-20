import {
  CalendarDays,
  Users,
  Globe,
  Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";

function OpportunityCard({ opportunity }) {
  return (
    <Card className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-500/15 px-2 py-1 text-xs font-medium text-blue-400">
          {opportunity.aiImported ? "AI Imported" : "Manual"}
        </span>

        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            opportunity.status === "Open"
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-red-500/15 text-red-400"
          }`}
        >
          {opportunity.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-white">
        {opportunity.title}
      </h3>

      <p className="text-sm text-slate-400">
        {opportunity.organizer}
      </p>

      {/* Meta */}
      <div className="mt-5 space-y-2 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <span>{opportunity.mode}</span>
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>
            {opportunity.teamSize.min}–{opportunity.teamSize.max} Members
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          <span>{opportunity.registrationDeadline}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {opportunity.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Match Score */}
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm text-slate-300">
              Match Score
            </span>
          </div>

          <span className="text-sm font-semibold text-white">
            {opportunity.fitScore}%
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{
              width: `${opportunity.fitScore}%`,
            }}
          />
        </div>
      </div>
    </Card>
  );
}

export default OpportunityCard;