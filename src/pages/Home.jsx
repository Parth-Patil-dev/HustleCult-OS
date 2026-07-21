import {
  FolderKanban,
  Trophy,
  Clock,
  Users,
} from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import QuickActions from "@/components/dashboard/QuickActions";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import { useOpportunities } from "@/context/OpportunityContext";
import StatsCards from "@/features/dashboard/components/StatsCards";
import StageChart from "@/features/dashboard/components/StageChart";
import TypeChart from "@/features/dashboard/components/TypeChart";

function Home() {
  const { opportunities } = useOpportunities();

const active = opportunities.filter(
  (o) => o.stage === "Active"
).length;

const submitted = opportunities.filter(
  (o) => o.stage === "Submitted"
).length;

const upcoming = opportunities.filter((o) => {
  if (!o.deadline) return false;

  return new Date(o.deadline) >= new Date();
}).length;
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Here's what's happening across HustleCult.
        </p>
      </div>

      {/* Stats */}
      <StatsCards />
<QuickActions />
<UpcomingDeadlines />
<div className="grid gap-6 xl:grid-cols-2">
  <StageChart />
  <TypeChart />
</div>
<div className="grid gap-6 xl:grid-cols-2">
    <StageChart />
    <TypeChart />
</div>
    </div>
  );
}

export default Home;