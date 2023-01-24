const express = require("express");
const router = express.Router();
const path = require("path");
const shopController = require("../controllers/shop");

router.get("/shop", shopController.getIndex);
router.get("/cart", shopController.getCart);
router.get("/products", shopController.getProducts);
router.get("/checkout", shopController.getCheckout);
router.get("/", shopController.getIndex);
module.exports = router;
