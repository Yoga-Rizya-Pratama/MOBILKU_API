const express = require("express");
const controller = require("../controllers/user");

const router = express.Router();

router.get("/", controller.GET);
router.post("/", controller.CREATE);
router.put("/", controller.EDIT);

module.exports = router;
