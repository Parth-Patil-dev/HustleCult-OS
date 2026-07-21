import {
  Briefcase,
  Rocket,
  Send,
  Trophy,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { useOpportunities } from "@/context/OpportunityContext";

function StatsCards() {
  const { opportunities } = useOpportunities();

  const total = opportunities.length;

  const active = opportunities.filter(
    (o) => o.stage === "Active"
  ).length;

  const submitted = opportunities.filter(
    (o) => o.stage === "Submitted"
  ).length;

  const results = opportunities.filter(
    (o) => o.stage === "Results"
  ).length;

  const cards = [
    {
      title: "Total Opportunities",
      value: total,
      icon: Briefcase,
    },
    {
      title: "Active",
      value: active,
      icon: Rocket,
    },
    {
      title: "Submitted",
      value: submitted,
      icon: Send,
    },
    {
      title: "Results",
      value: results,
      icon: Trophy,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.title}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <Icon
                size={32}
                className="text-blue-400"
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default StatsCards;