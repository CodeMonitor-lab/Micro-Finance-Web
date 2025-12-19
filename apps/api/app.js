const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});
