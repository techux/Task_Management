"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../../controllers/user.controller");
const jwtVerify_1 = require("../../middlewares/jwtVerify");
const validation_1 = require("../../validations/validation");
const user_validation_1 = require("../../validations/user.validation");
const router = express_1.default.Router();
router.post("/signup", (0, validation_1.validateRequest)(user_validation_1.signupValidation), user_controller_1.signup);
router.post("/login", (0, validation_1.validateRequest)(user_validation_1.loginValidation), user_controller_1.login);
router.post("/logout", jwtVerify_1.verifyJWT, user_controller_1.logout);
router.get("/me", jwtVerify_1.verifyJWT, user_controller_1.getMe);
router.put("/profile", jwtVerify_1.verifyJWT, (0, validation_1.validateRequest)(user_validation_1.updateProfileValidation), user_controller_1.updateProfile);
router.get("/users", jwtVerify_1.verifyJWT, (0, validation_1.validateQuery)(user_validation_1.listUsersValidation), user_controller_1.listUsers);
exports.default = router;
//# sourceMappingURL=user.routes.js.map