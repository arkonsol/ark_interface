"use client";
import DashboardHeader from "../components/getstarted/DashboardHeader";
import DashboardSearch from "../components/create/DashboardSearch";
import DashboardTables from "../components/create/DashboardTables";
import NewsLetter from "../components/landing/NewsLetter";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="">
        <DashboardSearch />
        <DashboardTables />
        <NewsLetter />

        {/* Add your dashboard content here */}
      </main>
    </div>
  );
}
