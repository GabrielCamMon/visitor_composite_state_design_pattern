import express from "express";
const router = express.Router();
const controller = require("../controllers/foodController");

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
