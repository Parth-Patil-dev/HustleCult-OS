function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-slate-800
        bg-slate-900
        p-6
        shadow-sm
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;