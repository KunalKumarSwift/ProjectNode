/*
 !!! Here We just add business logic which get consumed at the router files.
 !!! This file links models and views.
 */

const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Add product", path: "/add-product" });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
  });
};
