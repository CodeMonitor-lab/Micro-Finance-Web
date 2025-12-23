const express = require("express");
const router = express.Router();

router.use("/api/v1", require("./v1"));

router.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

module.exports = router;
