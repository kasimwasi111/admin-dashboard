import React from "react";
import DashboardGridStats from "../components/DashboardGridStats";
import TransactionChart from "../components/TransactionChart";
import RecentOrders from "../components/RecentOrders";
import BuyerProfileChart from "../components/BuyerProfileChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-2">
      <DashboardGridStats />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-2 w-full">
        <RecentOrders />
      </div>
    </div>
  );
}
