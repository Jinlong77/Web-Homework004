import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";

export default function LearningMaterialsComponent({ learningMaterials, onToggleFavorite }) {


  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short', 
        year: 'numeric' 
    }).replace(',', '');
  }

  const [sortOrder, setSortOrder] = useState("Sort-By");

  const sortedMaterials = [...learningMaterials]
    .filter((material) => material.title.toLowerCase())
    .sort((a, b) => {
      if (sortOrder === "A-Z") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "Z-A") {
        return b.title.localeCompare(a.title);
      } else {
        return 0;
      }
    });

  const handleFilterChange = (e) => {
    setSortOrder(e.target.value);
  }
  
  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] scrollbar-hide">
      {/* calling filter component */}
      <FilterComponent order={sortOrder} handleFilterChange={handleFilterChange}/>

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3 mb-2">
      {sortedMaterials.map((material, index) => (
          <div key={index} className="bg-zinc-100 px-4 py-2 flex gap-5 items-center">
            <img
              src={material.image}
              alt={material.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{material.title}</p>
                <Star
                  size={20}
                  fill={material.isFavorite ? "#FFD700" : "none"}
                  className={`hover:cursor-pointer ${material.isFavorite ? "text-[#FFD700]" : "text-zinc-800"}`}
                  onClick={() => onToggleFavorite(material.id)}
                />
              </div>
              <p className="text-gray-400 text-sm">Posted at: {formatDate(material.postedAt)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
