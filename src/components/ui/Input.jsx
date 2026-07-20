function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  disabled = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        w-full
        rounded-lg
        border
        border-slate-700
        bg-slate-900
        px-4
        py-2
        text-white
        placeholder:text-slate-500
        outline-none
        transition-all
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/20
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    />
  );
}

export default Input;