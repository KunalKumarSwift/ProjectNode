// ? The general criteria is to use model name as class names.
/*
 !!! Here We just add business logic which get consumed at the router files.
 !!! This file links models and views.
 */

const Product = require("../models/product");

exports.getEditProduct = (req, res, next) => {
  //? this is how we read query params
  //? res.query.key
  const isEditing = req.query.edit;
  const productId = req.params.productId;
  Product.fetchProductById(productId, (product) => {
    res.render("admin/edit-product", {
      docTitle: "Edit product",
      path: "admin/edit-product",
      editing: isEditing,
      prods: product,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  //? this is how we read query params
  //? res.query.key
  const isEditing = req.query.edit;
  const productId = req.params.productId;
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );

  Product.updateProductById(productId, product);

  res.redirect("/");
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    docTitle: "Add product",
    path: "admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.deleteProductById(productId);
  res.redirect("/products");
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
