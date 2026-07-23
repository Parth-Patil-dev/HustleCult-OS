function ProgressBar({
  value,
  color = "bg-blue-500",
}) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-slate-800">

      <div
        className={`h-full rounded-full transition-all duration-500 ${color}`}
        style={{
          width: `${value}%`,
        }}
      />

    </div>
  );
}

export default ProgressBar;