const express = require("express");
const router = express.Router();

const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate.middleware");
const userValidation = require("../../validations/user.validation");

router.get(
  "/",
  validate(userValidation.getAllUsers),
  userController.getAllUsers
);

router.get(
  "/:id",
  validate(userValidation.getUserById),
  userController.getUserById
);

router.post(
  "/",
  validate(userValidation.createUser),
  userController.createUser
);

module.exports = router;
