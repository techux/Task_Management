import { ITask } from "../interfaces/task.interface";
declare const TaskModel: import("mongoose").Model<ITask, {}, {}, {}, import("mongoose").Document<unknown, {}, ITask, {}, {}> & ITask & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default TaskModel;
//# sourceMappingURL=task.model.d.ts.map