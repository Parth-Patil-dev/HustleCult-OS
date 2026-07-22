import { PRIORITY_COLORS } from "@/constants/priorities";

function PriorityBadge({ priority = "Medium" }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        PRIORITY_COLORS[priority]
      }`}
    >
      {priority}
    </span>
  );
}

export default PriorityBadge;