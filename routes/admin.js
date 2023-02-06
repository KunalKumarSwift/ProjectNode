/*
 !!! Here we export routers with different REST endpoints that consume controller methods.
 */

const path = require("path");
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProducts);
router.get("/edit-product/:productId", adminController.getEditProduct);
router.post("/edit-product/:productId", adminController.postEditProduct);
router.post("/add-product", adminController.postAddProduct);
router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
