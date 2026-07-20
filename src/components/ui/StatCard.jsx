import { ArrowUpRight } from "lucide-react";

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition-all hover:border-slate-700">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">
          {title}
        </p>

        {Icon && (
          <Icon
            size={20}
            className="text-slate-500"
          />
        )}
      </div>

      <h2 className="mt-4 text-3xl font-bold text-white">
        {value}
      </h2>

      <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
        <ArrowUpRight size={16} />
        <span>{subtitle}</span>
      </div>
    </div>
  );
}

export default StatCard;