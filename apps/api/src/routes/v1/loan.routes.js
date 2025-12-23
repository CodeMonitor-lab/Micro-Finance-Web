const express = require("express");
const router = express.Router();
const { loanController } = require("../../controllers");

router.post("/", loanController.createLoan);
router.get("/", loanController.getAllLoans);

module.exports = router;
