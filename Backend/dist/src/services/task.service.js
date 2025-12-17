"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskService = exports.updateTaskService = exports.getTasksService = exports.createTaskService = void 0;
const task_model_1 = __importDefault(require("../models/task.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const ApiError_1 = require("../utils/ApiError");
const message_1 = require("../utils/message");
const task_socket_1 = require("../sockets/task.socket");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const createTaskService = async (creatorId, data) => {
    const assignee = await user_model_1.default.findById(data.assignedToId);
    if (!assignee) {
        throw new ApiError_1.ApiError(400, message_1.ERROR_RESPONSE.USER_NOT_FOUND);
    }
    const task = await task_model_1.default.create({
        ...data,
        creatorId,
    });
    (0, task_socket_1.emitTaskCreated)(task);
    (0, task_socket_1.emitTaskAssigned)(data.assignedToId.toString(), task);
    return task;
};
exports.createTaskService = createTaskService;
const getTasksService = async (query) => {
    const { status, priority, sort } = query;
    const filter = {};
    if (status)
        filter.status = status;
    if (priority)
        filter.priority = priority;
    const sortQuery = {};
    if (sort === "dueDate")
        sortQuery.dueDate = 1;
    return task_model_1.default.find(filter)
        .sort(sortQuery)
        .populate("assignedToId", "name email")
        .populate("creatorId", "name email");
};
exports.getTasksService = getTasksService;
const updateTaskService = async (taskId, userId, data) => {
    const task = await task_model_1.default.findOneAndUpdate({
        _id: taskId,
        $or: [
            { creatorId: userId },
            { assignedToId: userId }
        ]
    }, data, { new: true });
    if (!task) {
        throw new ApiError_1.ApiError(400, message_1.ERROR_RESPONSE.TASK_NOT_FOUND);
    }
    (0, task_socket_1.emitTaskUpdated)(task);
    if (data.assignedToId) {
        (0, task_socket_1.emitTaskAssigned)(data.assignedToId.toString(), task);
    }
    return task;
};
exports.updateTaskService = updateTaskService;
const deleteTaskService = async (taskId, userId) => {
    const task = await task_model_1.default.findOneAndDelete({
        _id: taskId,
        creatorId: userId,
    });
    if (!task) {
        throw new ApiError_1.ApiError(400, message_1.ERROR_RESPONSE.TASK_NOT_FOUND);
    }
    (0, task_socket_1.emitTaskDeleted)(taskId);
};
exports.deleteTaskService = deleteTaskService;
//# sourceMappingURL=task.service.js.map