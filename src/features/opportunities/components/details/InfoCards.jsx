import Card from "@/components/ui/Card";
import {
  CalendarDays,
  Trophy,
  Users,
  Globe,
  Flag,
} from "lucide-react";
function getDeadlineStatus(deadline) {
  if (!deadline) {
    return {
      text: "No deadline",
      color: "text-slate-400",
    };
  }

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const due = new Date(deadline);

  due.setHours(0, 0, 0, 0);

  const diffDays = Math.ceil(
    (due - today) / (1000 * 60 * 60 * 24)
  );

  if (diffDays < 0) {
    return {
      text: `Overdue by ${Math.abs(diffDays)} day${
        Math.abs(diffDays) !== 1 ? "s" : ""
      }`,
      color: "text-red-400",
    };
  }

  if (diffDays === 0) {
    return {
      text: "Due Today",
      color: "text-orange-400",
    };
  }

  if (diffDays === 1) {
    return {
      text: "Due Tomorrow",
      color: "text-yellow-400",
    };
  }

  return {
    text: `${diffDays} days left`,
    color: "text-green-400",
  };
}
function formatDate(date){
  if(!date) return "-";

  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day:"numeric",
      month:"short",
      year:"numeric"
    }
  );
}
function InfoCards({ opportunity }) {
    const deadlineStatus = getDeadlineStatus(
  opportunity.deadline
);
 const cards = [
  {
    title: "Type",
    value: opportunity.type || "-",
    icon: Trophy,
  },
  {
  title: "Priority",
  value: opportunity.priority || "Medium",
  icon: Flag,
},
  {
    title: "Deadline",
    value: formatDate(opportunity.deadline),
    subtitle: deadlineStatus.text,
    subtitleColor: deadlineStatus.color,
    icon: CalendarDays,
  },
  {
    title: "Team",
    value: `${opportunity.members?.length || 0} Members`,
    icon: Users,
  },
  {
 title:"Website",
 value: opportunity.link 
   ? "Open"
   : "Not Added",
 icon: Globe,
},
];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.title}>
            <div className="flex items-center gap-3">

              <div className="rounded-lg bg-blue-500/10 p-3">
                <Icon
                  className="text-blue-400"
                  size={22}
                />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h3 className="mt-1 font-semibold text-white">
  {card.value}
</h3>

{card.subtitle && (
  <p
    className={`mt-1 text-xs font-medium ${card.subtitleColor}`}
  >
    {card.subtitle}
  </p>
)}
              </div>

            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default InfoCards;