const express = require("express");
const controller = require("../controllers/user");

const router = express.Router();

router.get("/", controller.GET);
router.get("/:id", controller.GETONE);
router.post("/", controller.CREATE);
router.put("/:id", controller.EDIT);

module.exports = router;
