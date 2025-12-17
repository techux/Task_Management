"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const enum_1 = require("../utils/enum");
const taskSchema = new mongoose_1.Schema({
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
        enum: Object.values(enum_1.TaskPriority),
        default: enum_1.TaskPriority.MEDIUM,
    },
    status: {
        type: String,
        enum: Object.values(enum_1.TaskStatus),
        default: enum_1.TaskStatus.TODO,
    },
    creatorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assignedToId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
    collection: "tasks",
});
const TaskModel = (0, mongoose_1.model)("Task", taskSchema);
exports.default = TaskModel;
//# sourceMappingURL=task.model.js.map