"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitTaskAssigned = exports.emitTaskDeleted = exports.emitTaskUpdated = exports.emitTaskCreated = void 0;
const index_1 = require("./index");
const emitTaskCreated = (task) => {
    const io = (0, index_1.getIO)();
    io.emit("task:created", task);
};
exports.emitTaskCreated = emitTaskCreated;
const emitTaskUpdated = (task) => {
    const io = (0, index_1.getIO)();
    io.emit("task:updated", task);
};
exports.emitTaskUpdated = emitTaskUpdated;
const emitTaskDeleted = (taskId) => {
    const io = (0, index_1.getIO)();
    io.emit("task:deleted", { taskId });
};
exports.emitTaskDeleted = emitTaskDeleted;
const emitTaskAssigned = (userId, task) => {
    const io = (0, index_1.getIO)();
    io.to(userId).emit("task:assigned", {
        message: "You have been assigned a new task",
        task,
    });
};
exports.emitTaskAssigned = emitTaskAssigned;
//# sourceMappingURL=task.socket.js.map