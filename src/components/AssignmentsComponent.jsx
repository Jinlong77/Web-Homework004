import React from "react";
import { useState } from "react";
import CardComponent from "./CardComponent";
import AddNewProjectComponent from "./AddNewProjectComponent";

export default function AssignmentsComponent() {
  
  const [assignments, setAssignments] = useState([
    {
      projectName: "Assignment 1",
      dueDate: "2025-03-10",
      progress: 50,
      description: "Complete the first assignment.",
      daysLeft: 7,
    },
    {
      projectName: "Assignment 2",
      dueDate: "2025-03-15",
      progress: 100,
      description: "Complete the second assignment.",
      daysLeft: 12,
    },
    {
      projectName: "Assignment 2",
      dueDate: "2025-03-15",
      progress: 25,
      description: "Complete the second assignment.",
      daysLeft: 12,
    },
    {
      projectName: "Assignment 2",
      dueDate: "2025-03-15",
      progress: 75,
      description: "Complete the second assignment.",
      daysLeft: 12,
    },
    {
      projectName: "Assignment 2",
      dueDate: "2025-03-15",
      progress: 75,
      description: "Complete the second assignment.",
      daysLeft: 12,
    },
    {
      projectName: "Assignment 2",
      dueDate: "2025-03-15",
      progress: 75,
      description: "Complete the second assignment.",
      daysLeft: 12,
    },
    {
      projectName: "Assignment 2",
      dueDate: "2025-03-15",
      progress: 75,
      description: "Complete the second assignment.",
      daysLeft: 12,
    },
    {
      projectName: "Assignment 2",
      dueDate: "2025-03-15",
      progress: 75,
      description: "Complete the second assignment.",
      daysLeft: 12,
    },
  ]);
  
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        {/* assignments */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent />
      </div>
      <div className="mt-5 pb-5 grid grid-cols-3 gap-4 overflow-auto scrollbar-hide max-h-[33.9rem]">
        {assignments.map((assignment, index) => (
          <CardComponent key={index} project={assignment} />
        ))}
      </div>
    </div>
  );
}
