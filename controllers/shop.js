const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "All Products",
      path: "shop/products",
    });
  });
};

exports.getProductById = (req, res, next) => {
  const productId = req.params.productId;
  const products = Product.fetchProductById(productId, (product) => {
    res.render("shop/product-detail", {
      prods: product,
      docTitle: "All Products",
      path: "shop/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      docTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    docTitle: "Your Cart",
    path: "shop/cart",
  });
};

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  Product.fetchProductById(productId, (product) => {
    Cart.addProduct(product.id, product.price, (cart) => {
      res.redirect("/cart");
      //  , {
      //   docTitle: "Your Cart",
      //   path: "shop/cart",
      //   cart: cart,
      // }
    });
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    docTitle: "Your Orders",
    path: "shop/orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    docTitle: "Checkout",
    path: "shop/checkout",
  });
};
