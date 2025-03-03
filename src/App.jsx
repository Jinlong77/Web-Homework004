import { useState } from "react";
import "./App.css";
import DashboardComponent from "./components/DashboardComponent";
import SideBarComponent from "./components/SideBarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import { learningMaterials as initialLearningMaterials } from "./data/learningMaterials";
import { dashboard as initialDashboard } from "./data/dashboard";
import AssignmentsComponent from "./components/AssignmentsComponent";


function App() {

  const [learningMaterials, setLearningMaterials] = useState(initialLearningMaterials);
  const [searchString, setSearchString] = useState("");

  const toggleFavorite = (id) => {
    setLearningMaterials((prevMaterials) =>
      prevMaterials.map((material) =>
        material.id === id ? { ...material, isFavorite: !material.isFavorite } : material
      )
    );
  };

  const onValueChange = (e) => {
    setSearchString(e.target.value);
    console.log(searchString);
  }

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
                <DashboardComponent 
                  dashboard={initialDashboard}
                />
                <AssignmentsComponent searchString={searchString}/>
              </div>
              <div className="w-[30%] max-w-[22rem]">
                <LearningMaterialsComponent 
                learningMaterials={learningMaterials}
                onToggleFavorite={toggleFavorite}
                />
              </div>
            </div>
        </div>
      </section>
    </main>
  );
}

export default App;
