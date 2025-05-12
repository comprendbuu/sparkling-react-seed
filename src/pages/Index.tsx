
import { useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import { statCards, recentActivities } from "@/lib/mock-data";

const Index = () => {
  useEffect(() => {
    document.title = "Dashboard | Admin Panel";
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar className="hidden md:flex" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <p className="text-gray-600 mt-1">Welcome back to your dashboard</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {statCards.map((card, index) => (
              <StatCard
                key={index}
                title={card.title}
                value={card.value}
                change={card.change}
                icon={card.icon}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg border shadow-sm h-80">
                <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
                <div className="flex items-center justify-center h-64 bg-gray-50 rounded border border-dashed border-gray-300">
                  <p className="text-gray-500">Chart will be displayed here</p>
                </div>
              </div>
            </div>
            <ActivityCard activities={recentActivities} />
          </div>
        </main>
        <footer className="border-t p-4 text-center text-gray-500 text-sm">
          © 2025 Admin Dashboard. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;
