import { Router } from "express";
import userRoute from './users/user.routes'
import taskRoute from './tasks/task.route'

const router = Router();

router.use('/user', userRoute);
router.use('/task', taskRoute);


export default router;
