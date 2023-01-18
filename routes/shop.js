const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/product");

router.get("/", productsController.getProduct);
module.exports = router;
