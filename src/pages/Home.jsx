import QuickActions from "@/components/dashboard/QuickActions";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import { useOpportunities } from "@/context/OpportunityContext";
import StatsCards from "@/features/dashboard/components/StatsCards";
import StageChart from "@/features/dashboard/components/StageChart";
import TypeChart from "@/features/dashboard/components/TypeChart";
import RecentActivity from "@/features/dashboard/components/RecentActivity";
import PriorityCenter from "@/features/dashboard/components/PriorityCenter";

function Home() {
  const { opportunities } = useOpportunities();
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

<PriorityCenter />

<QuickActions />

<UpcomingDeadlines />

<div className="grid gap-6 xl:grid-cols-2">
  <StageChart />
  <TypeChart />
</div>

<RecentActivity />
    </div>
  );
}

export default Home;