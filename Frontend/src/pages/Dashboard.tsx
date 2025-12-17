import { useEffect, useState } from "react";
import api from "../api/axios";

interface Task {
  _id: string;
  title: string;
  description?: string;
  priority: string;
  status: string;
  dueDate: string;
  assignedToId: {
    name: string;
    email: string;
  };
}

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/task/get-tasks");
        setTasks(res.data.data || res.data); 
      } catch (err) {
        console.error("Failed to fetch tasks", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div className="p-6">Loading tasks...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="border rounded p-4 bg-white shadow"
            >
              <h2 className="font-semibold">{task.title}</h2>
              <p className="text-sm text-gray-600">
                {task.description}
              </p>

              <div className="text-sm mt-2 flex gap-4">
                <span>Status: {task.status}</span>
                <span>Priority: {task.priority}</span>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Assigned to: {task.assignedToId?.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
