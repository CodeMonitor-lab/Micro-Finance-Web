const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate.middleware");

router.get("/",validate() ,userController.getAllUsers);
router.get("/:id", userController.getUserById);

module.exports = router;
