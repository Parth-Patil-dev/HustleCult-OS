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

function Home() {
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
  <StatCard
    title="Active Workspaces"
    value="4"
    subtitle="+1 this week"
    icon={FolderKanban}
  />

  <StatCard
    title="Open Opportunities"
    value="12"
    subtitle="3 closing soon"
    icon={Trophy}
  />

  <StatCard
    title="Upcoming Deadlines"
    value="5"
    subtitle="Next in 2 days"
    icon={Clock}
  />

  <StatCard
    title="Core Members"
    value="4"
    subtitle="All active"
    icon={Users}
  />
</div>
<QuickActions />
<UpcomingDeadlines />
    </div>
  );
}

export default Home;