"use strict";
// import express, { Application } from "express";
// import routev1 from "./routes/routev1";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// export class App {
//   public app: Application;
//   public port: string | number;
//   public base_url: string;
//   constructor(port: string | number, base_url: string) {
//     this.app = express();
//     this.port = port;
//     this.base_url = base_url;
//   }
//   public async initialize(): Promise<void> {
//     try {
//       this.initializeMiddlewares();
//       this.initializeRoutes();
//      // console.log("Express app initialized");
//     } catch (error) {
//       console.log("Server Initialization error:", error);
//      // process.exit(1);
//     }
//   }
//   private initializeMiddlewares(): void {
//     this.app.use(express.json());
//     this.app.use(express.urlencoded({ extended: true }));
//     this.app.use("/uploads", express.static("uploads"));
//   }
//   private initializeRoutes(): void {
//     this.app.use("/api/v1", routev1);
//   }
// }
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routev1_1 = __importDefault(require("./routes/routev1"));
class App {
    app;
    port;
    base_url;
    constructor(port, base_url) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.base_url = base_url;
    }
    async initialize() {
        try {
            this.initializeMiddlewares();
            this.initializeRoutes();
        }
        catch (error) {
            console.log("Server Initialization error:", error);
        }
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    initializeRoutes() {
        this.app.use("/api/v1", routev1_1.default);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map