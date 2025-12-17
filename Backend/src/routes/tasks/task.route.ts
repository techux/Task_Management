import express from "express";

import {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../../controllers/task.controller";

import { verifyJWT } from "../../middlewares/jwtVerify";
import {
    validateRequest,
    validateQuery,
    validateParams,
} from "../../validations/validation";

import {
    createTaskSchema,
    updateTaskSchema,
    listTaskQuerySchema,
    taskIdParamSchema,
} from "../../validations/task.validation";

const router = express.Router();
router.use(verifyJWT);

router.post(
    "/create-task",
    validateRequest(createTaskSchema),
    createTask
);

router.get(
    "/get-tasks",
    validateQuery(listTaskQuerySchema),
    getTasks
);

router.put(
    "/:id",
    validateParams(taskIdParamSchema),
    validateRequest(updateTaskSchema),
    updateTask
);

router.delete(
    "/:id",
    validateParams(taskIdParamSchema),
    deleteTask
);

export default router;
