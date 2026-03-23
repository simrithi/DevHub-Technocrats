import Sidebar from "@/components/dashboard/Sidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import HypePhaseTracker from "@/components/dashboard/HypePhaseTracker";
import AlertFeed from "@/components/dashboard/AlertFeed";
import PredictionBox from "@/components/dashboard/PredictionBox";
import Leaderboard from "@/components/dashboard/Leaderboard";
import AIAnalyst from "@/components/dashboard/AIAnalyst";
import InfluencerMap from "@/components/dashboard/InfluencerMap";
import RugRiskMeter from "@/components/dashboard/RugRiskMeter";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 grid grid-cols-3 gap-4">
        <MetricCard title="Total Coins Tracked" value="1,240" />
        <MetricCard title="Active Alerts" value="7" />
        <MetricCard title="Avg Sentiment" value="0.72" />
        <HypePhaseTracker />
        <AlertFeed />
        <PredictionBox />
        <Leaderboard />
        <AIAnalyst />
        <InfluencerMap />
        <RugRiskMeter />
      </main>
    </div>
  );
}
