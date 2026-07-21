import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

import Card from "@/components/ui/Card";
import { useOpportunities } from "@/context/OpportunityContext";

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ef4444",
  "#06b6d4",
];

function TypeChart() {
  const { opportunities } = useOpportunities();

  const types = [
    "Hackathon",
    "Internship",
    "Competition",
    "Workshop",
    "Scholarship",
    "Job",
  ];

  const data = types
    .map((type) => ({
      name: type,
      value: opportunities.filter(
        (o) => o.type === type
      ).length,
    }))
    .filter((item) => item.value > 0);

  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Opportunity Types
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default TypeChart;