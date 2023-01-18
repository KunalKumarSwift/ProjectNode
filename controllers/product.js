/*
 !!! Here We just add business logic which get consumed at the router files.
 !!! This file links models and views.
 */

const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Add product", path: "/add-product" });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
};
