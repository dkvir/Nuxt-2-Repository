const express = require("express");
const router = express.Router();
const HomeController = require(`${__basedir}/controllers/HomeController`);

router.get("/", HomeController.all);

module.exports = router;
