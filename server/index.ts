const path = require("path");

import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const index = require("./routers/index");
const menuRouter = require("./routers/menuRouter");

dotenv.config();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api", index);
app.use("/api/menu", menuRouter);

const publicPath = path.join(__dirname, "..", "client/dist");
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
