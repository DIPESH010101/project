"use client";
import React from "react";
import LineChart from "@/components/charts/Line";
import PieChart from "@/components/charts/Pie";

export default function Home() {
  return (
    <div className="flex  h-[90vh]">
      <div className="pie w-1/3">
        <PieChart />
      </div>
      <div className="line w-2/3">
        <LineChart />
      </div>
    </div>
  );
}
