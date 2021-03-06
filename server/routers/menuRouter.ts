import express from "express";
const router = express.Router();
const controller = require("../controllers/menuController");

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
