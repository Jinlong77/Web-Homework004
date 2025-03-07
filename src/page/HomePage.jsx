import React, { useState } from "react";
import SideBarComponent from "../components/SideBarComponent";
import TopNavbarComponent from "../components/TopNavbarComponent";
import DashboardComponent from "../components/DashboardComponent";
import AssignmentsComponent from "../components/AssignmentsComponent";
import LearningMaterialsComponent from "../components/LearningMaterialsComponent";
import { dashboard as initialDashboard } from "../data/dashboard";

export default function HomePage() {
  const [searchString, setSearchString] = useState("");

  const onValueChange = (e) => {
    setSearchString(e.target.value);
    console.log(searchString);
  };

  return (
    <main className="w-full h-screen text-zinc-800">
      <section className="flex justify-start items-start h-full">
        <div className="hidden md:block w-[30%] max-w-[20rem] h-full">
          <SideBarComponent />
        </div>
        <div className="w-full pt-6 px-10">
          <TopNavbarComponent onValueChange={onValueChange} />
          <div className="flex justify-between items-start mt-10 space-x-10">
            <div className="space-y-6">
              <DashboardComponent dashboard={initialDashboard} />
              <AssignmentsComponent searchString={searchString} />
            </div>
            <div className="w-[30%] max-w-[22rem]">
              <LearningMaterialsComponent />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
