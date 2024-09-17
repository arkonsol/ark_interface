"use client"
import DashboardHeader from '../components/getstarted/DashboardHeader';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        {/* Add your dashboard content here */}
      </main>
    </div>
  );
}