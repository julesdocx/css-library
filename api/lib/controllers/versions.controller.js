const express = require("express");
let router = express.Router();

router.get("/v0", (req, res) => {
  console.log("insert styles here")
  res.status(200).send("gucci")
});

module.exports = router; 