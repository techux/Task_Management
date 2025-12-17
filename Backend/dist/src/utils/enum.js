"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = exports.TaskPriority = void 0;
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["LOW"] = "Low";
    TaskPriority["MEDIUM"] = "Medium";
    TaskPriority["HIGH"] = "High";
    TaskPriority["URGENT"] = "Urgent";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["TODO"] = "To Do";
    TaskStatus["IN_PROGRESS"] = "In Progress";
    TaskStatus["REVIEW"] = "Review";
    TaskStatus["COMPLETED"] = "Completed";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
//# sourceMappingURL=enum.js.map