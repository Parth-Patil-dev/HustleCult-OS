import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import Card from "@/components/ui/Card";
import { useOpportunities } from "@/context/OpportunityContext";

function StageChart() {
  const { opportunities } = useOpportunities();

  const stages = [
    "Found",
    "Interested",
    "Researching",
    "Active",
    "Submitted",
    "Results",
  ];

  const data = stages.map((stage) => ({
    stage,
    count: opportunities.filter(
      (o) => o.stage === stage
    ).length,
  }));

  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Opportunities by Stage
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="stage" />
            <YAxis allowDecimals={false} />
            <Tooltip />

            <Bar
              dataKey="count"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default StageChart;