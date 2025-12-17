import { useState } from "react";
import api from "../api/axios";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [assignedToId, setAssignedToId] = useState("");

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/task/create-task", {
        title,
        dueDate: new Date(),
        priority: "Medium",
        assignedToId,
      });

      alert("Task created");
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to create task");
    }
  };

  return (
    <form onSubmit={handleCreate} className="p-6 space-y-4">
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-3 py-2 w-full"
        required
      />

      <input
        placeholder="Assign user ID"
        value={assignedToId}
        onChange={(e) => setAssignedToId(e.target.value)}
        className="border px-3 py-2 w-full"
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Task
      </button>
    </form>
  );
};

export default CreateTask;
