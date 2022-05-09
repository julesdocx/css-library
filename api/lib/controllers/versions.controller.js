const express = require("express");
let router = express.Router();
const fs = require("fs");

router.get("/v0", (req, res) => {
  console.log("insert styles here")
        res.writeHead(200, { "Content-type": "text/css" });
        let fileContents = fs.readFileSync(`${process.cwd()}/css/index.css`, {
          encoding: "utf8",
        });
        res.write(fileContents);
        res.end();
});



module.exports = router; 