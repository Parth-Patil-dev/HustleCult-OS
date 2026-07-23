function InfoRow({
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 py-3">

      <span className="text-slate-400">
        {label}
      </span>

      <span className="font-medium text-white">
        {value}
      </span>

    </div>
  );
}

export default InfoRow;