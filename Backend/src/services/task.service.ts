import TaskModel from "../models/task.model";
import userModel from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { ERROR_RESPONSE } from "../utils/message";
import {
    emitTaskCreated,
    emitTaskUpdated,
    emitTaskDeleted,
    emitTaskAssigned,
} from "../sockets/task.socket";
import * as dotenv from 'dotenv';

dotenv.config();

export const createTaskService = async (
    creatorId: string,
    data: any
) => {
    const assignee = await userModel.findById(data.assignedToId);
    if (!assignee) {
        throw new ApiError(400, ERROR_RESPONSE.USER_NOT_FOUND);
    }

    const task = await TaskModel.create({
        ...data,
        creatorId,
    });

    emitTaskCreated(task);
    emitTaskAssigned(data.assignedToId.toString(), task);

    return task;
};

export const getTasksService = async (query: any) => {
    const { status, priority, sort } = query;

    const filter: any = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    const sortQuery: any = {};
    if (sort === "dueDate") sortQuery.dueDate = 1;

    return TaskModel.find(filter)
        .sort(sortQuery)
        .populate("assignedToId", "name email")
        .populate("creatorId", "name email");
};

export const updateTaskService = async (
    taskId: string,
    userId: string,
    data: any
) => {
    const task = await TaskModel.findOneAndUpdate(
        {
            _id: taskId,
            $or: [
                { creatorId: userId },
                { assignedToId: userId }
            ]
        },
        data,
        { new: true }
    );

    if (!task) {
        throw new ApiError(400, ERROR_RESPONSE.TASK_NOT_FOUND);
    }

    emitTaskUpdated(task);

    if (data.assignedToId) {
        emitTaskAssigned(data.assignedToId.toString(), task);
    }

    return task;
};

export const deleteTaskService = async (
    taskId: string,
    userId: string
) => {
    const task = await TaskModel.findOneAndDelete({
        _id: taskId,
        creatorId: userId,
    });

    if (!task) {
        throw new ApiError(400, ERROR_RESPONSE.TASK_NOT_FOUND);
    }

    emitTaskDeleted(taskId);
};
