const express = require("express");
const router = express.Router();
const path = require("path");
const shopController = require("../controllers/shop");

router.get("/shop", shopController.getIndex);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.post("/delete-cart-item", shopController.postDeleteCart);
router.get("/orders", shopController.getOrders);
router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProductById);
router.get("/checkout", shopController.getCheckout);
router.get("/", shopController.getIndex);
module.exports = router;
