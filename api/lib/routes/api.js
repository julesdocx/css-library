const express = require("express");
const versionsController = require("../controllers/versions.controller");

let router = express.Router();

router.use("/css", versionsController);



module.exports = router;
