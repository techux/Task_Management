"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersValidation = exports.updateProfileValidation = exports.loginValidation = exports.signupValidation = void 0;
const zod_1 = require("zod");
exports.signupValidation = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
});
exports.loginValidation = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
});
exports.updateProfileValidation = zod_1.z.object({
    name: zod_1.z.string().min(2).optional(),
});
exports.listUsersValidation = zod_1.z.object({
    page: zod_1.z.coerce.number().min(1).optional(),
    limit: zod_1.z.coerce.number().min(1).max(100).optional(),
    search: zod_1.z.string().optional(),
});
//# sourceMappingURL=user.validation.js.map