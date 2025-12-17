import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
export declare const validateRequest: (schema: ZodObject) => (req: Request, _res: Response, next: NextFunction) => void;
export declare const validateQuery: (schema: ZodObject) => (req: Request, _res: Response, next: NextFunction) => void;
export declare const validateParams: (schema: ZodObject) => (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=validation.d.ts.map