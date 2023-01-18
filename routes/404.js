const path = require("path");
const express = require("express");
const router = express.Router();

const resourceNotFoundController = require("../controllers/404");

router.use(resourceNotFoundController.resourceNotFound);

module.exports = router;
