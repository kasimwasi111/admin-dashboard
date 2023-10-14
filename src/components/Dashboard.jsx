import React from "react";
import DashboardGridStats from "./DashboardGridStats";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <DashboardGridStats />
      <div className="flex flex-row w-full gap-4">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row w-full gap-4">
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
