function StatPill({
  label,
  value,
  color = "bg-slate-800",
  icon: Icon,
}) {
  return (
    <div
      className={`${color} rounded-xl border border-slate-800 p-4 transition-all duration-200 hover:scale-[1.02] hover:border-slate-700`}
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-400">
            {label}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>

        </div>

        {Icon && (
          <Icon
            size={22}
            className="text-white/80"
          />
        )}

      </div>
    </div>
  );
}

export default StatPill;