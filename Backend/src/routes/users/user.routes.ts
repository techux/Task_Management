import express from "express";

import {
    signup,
    login,
    getMe,
    updateProfile,
    logout,
    listUsers
} from "../../controllers/user.controller";

import { verifyJWT } from "../../middlewares/jwtVerify";

import { validateRequest, validateQuery } from "../../validations/validation";

import {
    signupValidation,
    loginValidation,
    updateProfileValidation,
    listUsersValidation,
} from "../../validations/user.validation";

const router = express.Router();

router.post(
    "/signup",
    validateRequest(signupValidation),
    signup
);

router.post(
    "/login",
    validateRequest(loginValidation),
    login
);

router.post(
    "/logout",
    verifyJWT,
    logout
);

router.get(
    "/me",
    verifyJWT,
    getMe
);

router.put(
    "/profile",
    verifyJWT,
    validateRequest(updateProfileValidation),
    updateProfile
);

router.get(
    "/users",
    verifyJWT,
    validateQuery(listUsersValidation),
    listUsers
);

export default router;
