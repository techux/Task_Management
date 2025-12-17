import { Document, Types } from "mongoose";
import { TaskPriority, TaskStatus } from "../utils/enum";
export interface ITask extends Document {
    title: string;
    description?: string;
    dueDate: Date;
    priority: TaskPriority;
    status: TaskStatus;
    creatorId: Types.ObjectId;
    assignedToId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=task.interface.d.ts.map