import { Schema, model } from "mongoose";
import { ITask } from "../interfaces/task.interface";
import { TaskPriority, TaskStatus } from "../utils/enum";

const taskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        dueDate: {
            type: Date,
            required: true,
        },
        priority: {
            type: String,
            enum: Object.values(TaskPriority),
            default: TaskPriority.MEDIUM,
        },
        status: {
            type: String,
            enum: Object.values(TaskStatus),
            default: TaskStatus.TODO,
        },
        creatorId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        assignedToId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "tasks",
    }
);

const TaskModel = model<ITask>("Task", taskSchema);
export default TaskModel;
