import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateRequest =
    (schema: ZodObject) =>
        (req: Request, _res: Response, next: NextFunction) => {
            schema.parse(req.body);
            next();
        };

export const validateQuery =
    (schema: ZodObject) =>
        (req: Request, _res: Response, next: NextFunction) => {
            schema.parse(req.query);
            next();
        };

export const validateParams =
    (schema: ZodObject) =>
        (req: Request, _res: Response, next: NextFunction) => {
            schema.parse(req.params);
            next();
        };

