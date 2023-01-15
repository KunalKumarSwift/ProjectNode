const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");
const { products } = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
});
module.exports = router;
