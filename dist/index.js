"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const index = require("./routers/index");
const menuRouter = require("./routers/menuRouter");
const foodRouter = require("./routers/menuRouter");
dotenv.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.use("/api", index);
app.use("/api/menu", menuRouter);
app.use("/api/food", foodRouter);
const publicPath = path.join(__dirname, "..", "client/dist");
app.use(express_1.default.static(publicPath));
app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
