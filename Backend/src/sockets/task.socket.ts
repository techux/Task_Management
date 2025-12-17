import { getIO } from "./index";

export const emitTaskCreated = (task: any) => {
    const io = getIO();
    io.emit("task:created", task);
};

export const emitTaskUpdated = (task: any) => {
    const io = getIO();
    io.emit("task:updated", task);
};

export const emitTaskDeleted = (taskId: string) => {
    const io = getIO();
    io.emit("task:deleted", { taskId });
};

export const emitTaskAssigned = (
    userId: string,
    task: any
) => {
    const io = getIO();
    io.to(userId).emit("task:assigned", {
        message: "You have been assigned a new task",
        task,
    });
};
