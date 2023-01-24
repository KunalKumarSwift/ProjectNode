// ? The general criteria is to use model name as class names.
/*
 !!! Here We just add business logic which get consumed at the router files.
 !!! This file links models and views.
 */

const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add product",
    path: "admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      docTitle: "Admin Products",
      path: "admin/products",
    });
  });
};
