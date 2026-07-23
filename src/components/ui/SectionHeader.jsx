function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  action,
}) {
  return (
    <div className="mb-6 flex items-center justify-between">

      <div className="flex items-center gap-3">

        {Icon && (
          <Icon
            size={22}
            className="text-blue-400"
          />
        )}

        <div>

          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm text-slate-400">
              {subtitle}
            </p>
          )}

        </div>

      </div>

      {action}

    </div>
  );
}

export default SectionHeader;