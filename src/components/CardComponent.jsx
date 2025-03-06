import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ project }) {

  const getProgressClass = (progress) => {
    switch (progress) {
      case "100":
        return "bg-custom-sky-blue-500";
      case "75":
        return "bg-custom-carrot";
      case "50":
        return "bg-custom-yellow-500";
      case "25":
        return "bg-custom-pink";
      default:
        return "";
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
  }

  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`text-custom-sky-blue font-medium`}>{formatDate(project.dueDate)}</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          {project.projectName}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 min-h-13">
          {project.description}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{project.progress}%</p>
        </div>
        <div className="relative mb-5 w-full rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${getProgressClass(project.progress)}`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-35 text-center">
            {project.daysLeft} days left
          </p>
        </div>
      </div>
    </div>
  );
}