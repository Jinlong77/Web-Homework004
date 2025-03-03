import React from "react";
import { useState } from "react";

export default function FilterComponent({order, handleFilterChange }) {

  // prevent the page from reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
      <div className="relative w-full ">
        <select
          onChange={handleFilterChange}
          value={order}
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-sm bg-zinc-100 focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl"
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
