import Card from "./Card";

function MetricCard({
  label,
  value,
  icon: Icon,
}) {
  return (
    <Card>

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {label}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>

        </div>

        {Icon && (
          <Icon
            size={28}
            className="text-blue-400"
          />
        )}

      </div>

    </Card>
  );
}

export default MetricCard;