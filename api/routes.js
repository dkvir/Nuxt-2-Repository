const express = require("express");
const router = express.Router();

const homeRouters = require("./routes/home");

router.use("/home", homeRouters);

module.exports = router;
