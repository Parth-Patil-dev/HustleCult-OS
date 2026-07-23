import QuickActions from "@/components/dashboard/QuickActions";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import { useOpportunities } from "@/context/OpportunityContext";
import StatsCards from "@/features/dashboard/components/StatsCards";
import StageChart from "@/features/dashboard/components/StageChart";
import TypeChart from "@/features/dashboard/components/TypeChart";
import RecentActivity from "@/features/dashboard/components/RecentActivity";
import PriorityCenter from "@/features/dashboard/components/PriorityCenter";
import TodaysPriorities from "@/features/dashboard/components/TodaysPriorities";
import FocusPanel from "@/features/dashboard/components/FocusPanel";

function Home() {
  const { opportunities } = useOpportunities();
  return (
    <div className="relative overflow-hidden space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">

  <div>

    <h1 className="text-4xl font-extrabold tracking-tight text-white">
      Welcome back Hustler 👋
    </h1>

    <p className="mt-2 text-slate-400">
      Here's your HustleCult Command Center.
    </p>

  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3">

    <p className="text-xs uppercase tracking-wider text-slate-500">
      Workspace
    </p>

    <p className="font-semibold text-white">
      HustleCult OS
    </p>

  </div>

</div>
      </div>

      {/* Stats */}
      <FocusPanel />
      <StatsCards />

<div className="grid gap-6 xl:grid-cols-2">

  <PriorityCenter />

  <TodaysPriorities />

</div>

<div className="grid gap-6 xl:grid-cols-2">

  <UpcomingDeadlines />

  <QuickActions />

</div>

<div className="grid gap-6 xl:grid-cols-2">
  <StageChart />
  <TypeChart />
</div>

<RecentActivity />
    </div>
    
  );
}

export default Home;