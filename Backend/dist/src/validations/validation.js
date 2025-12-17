"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validateQuery = exports.validateRequest = void 0;
const validateRequest = (schema) => (req, _res, next) => {
    schema.parse(req.body);
    next();
};
exports.validateRequest = validateRequest;
const validateQuery = (schema) => (req, _res, next) => {
    schema.parse(req.query);
    next();
};
exports.validateQuery = validateQuery;
const validateParams = (schema) => (req, _res, next) => {
    schema.parse(req.params);
    next();
};
exports.validateParams = validateParams;
//# sourceMappingURL=validation.js.map