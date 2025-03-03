import React from "react";

export default function DashboardComponent({ dashboard }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex gap-5">
        {dashboard.map((item, index) => (
          <div key={index} className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-[16.9rem]">
          <div className={`p-3 rounded-xl ${item.color}`}>
            <img src={item.icon} alt="file icon" />
          </div>
          <div>
            <p className="text-xl font-semibold">{item.totalTasks}</p>
            <p className="text-gray-400">{item.label}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
