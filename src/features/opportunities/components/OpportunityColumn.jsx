import OpportunityCard from "./OpportunityCard";

function OpportunityColumn({ title, opportunities }) {
  return (
    <div className="min-w-[340px] rounded-xl bg-slate-950 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          {opportunities.length}
        </span>
      </div>

      <div className="space-y-4">
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
          />
        ))}
      </div>
    </div>
  );
}

export default OpportunityColumn;