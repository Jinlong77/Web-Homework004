import { useState } from "react";
import { Plus } from "lucide-react";

export default function AddNewProjectComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    dueDate: "",
    progress: "",
    description: "", 
  });
  const [errors, setErrors] = useState({});
  const [projects, setProjects] = useState([]);

  const validateForm = () => {
    let newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!formData.projectName) newErrors.projectName = "*Project name is required.";
    if (!formData.dueDate) {
      newErrors.dueDate = "*Please choose the deadline of your project.";
    } else if (formData.dueDate < today) {
      newErrors.dueDate = "*Due date cannot be in the past.";
    }
    if (!formData.progress) newErrors.progress = "*Please select your project progress.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setProjects([...projects, formData]);
      setFormData({ projectName: "", dueDate: "", progress: "", description: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white bg-cyan-400 hover:bg-cyan-500 hover:cursor-pointer focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500 flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 transition-opacity flex justify-center items-center bg-gray-500/75 bg-opacity-50">
          <div className="relative p-4 w-full max-w-md bg-white rounded-2xl shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Create New Project</h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                ✖
              </button>
            </div>
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Project Name *</label>
                <input
                  type="text"
                  name="projectName"
                  className={`bg-gray-50 border ${errors.projectName ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                  placeholder="Type Project Name"
                  value={formData.projectName}
                  onChange={handleChange}
                />
                {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Due Date *</label>
                <input
                  type="date"
                  name="dueDate"
                  className={`bg-gray-50 border ${errors.dueDate ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                  value={formData.dueDate}
                  onChange={handleChange}
                />
                {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Progress *</label>
                <select
                  name="progress"
                  className={`bg-gray-50 border ${errors.progress ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
                  value={formData.progress}
                  onChange={handleChange}
                >
                  <option value="">Select Progress</option>
                  <option value="100">100%</option>
                  <option value="75">75%</option>
                  <option value="50">50%</option>
                  <option value="25">25%</option>
                </select>
                {errors.progress && <p className="text-red-500 text-sm mt-1">{errors.progress}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Project Description</label>
                <textarea
                  name="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write product description here"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-cyan-400 text-white px-4 py-2 rounded-lg"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
