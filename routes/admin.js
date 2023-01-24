/*
 !!! Here we export routers with different REST endpoints that consume controller methods.
 */

const path = require("path");
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

module.exports = router;
