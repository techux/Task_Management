import type { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import userModel from "../models/user.model";
import * as dotenv from "dotenv";

dotenv.config();

interface DecodedToken extends JwtPayload {
    _id: string;
}

export const verifyJWT = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        let token = req.cookies?.access_token;
        if (!token && req.headers.authorization) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            res.status(401).json({
                code: 401,
                status: "failed",
                message: "Unauthorized request: No token",
            });
            return;
        }

        const decodedToken = jwt.verify(
            token,
            process.env.PRIVATE_KEY as string
        ) as DecodedToken;

        const user = await userModel.findById(decodedToken._id);

        if (!user) {
            res.status(401).json({
                code: 401,
                status: "failed",
                message: "Unauthorized request: User not found",
            });
            return;
        }

        res.locals.user = user;
        next();
    } catch (error: any) {
        res.status(401).json({
            status: "failed",
            message: "Invalid or expired access token",
        });
    }
};
