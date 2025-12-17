"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("../../controllers/task.controller");
const jwtVerify_1 = require("../../middlewares/jwtVerify");
const validation_1 = require("../../validations/validation");
const task_validation_1 = require("../../validations/task.validation");
const router = express_1.default.Router();
router.use(jwtVerify_1.verifyJWT);
router.post("/create-task", (0, validation_1.validateRequest)(task_validation_1.createTaskSchema), task_controller_1.createTask);
router.get("/get-tasks", (0, validation_1.validateQuery)(task_validation_1.listTaskQuerySchema), task_controller_1.getTasks);
router.put("/:id", (0, validation_1.validateParams)(task_validation_1.taskIdParamSchema), (0, validation_1.validateRequest)(task_validation_1.updateTaskSchema), task_controller_1.updateTask);
router.delete("/:id", (0, validation_1.validateParams)(task_validation_1.taskIdParamSchema), task_controller_1.deleteTask);
exports.default = router;
//# sourceMappingURL=task.route.js.map