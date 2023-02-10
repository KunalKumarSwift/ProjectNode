const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const Cart = require("../models/cart");
const products = [];
const filePath = path.join(rootDir, "..", "..", "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (error, fileContent) => {
    if (error) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      // ! Must use an arrow function here, otherwise this will not refer to the class scope, instead it will refer to the function context.
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log("err :>> ", err);
      });
    });
  }

  static updateProductById(id, product) {
    getProductsFromFile((products) => {
      const indexOfProduct = products.findIndex((p) => p.id === id);
      product.id = id;
      products[indexOfProduct] = product;

      // ! Must use an arrow function here, otherwise this will not refer to the class scope, instead it will refer to the function context.
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log("err :>> ", err);
      });
    });
  }

  static deleteProductById(id) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      const updatedProducts = products.filter((p) => p.id !== id);
      // ! Must use an arrow function here, otherwise this will not refer to the class scope, instead it will refer to the function context.
      fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
        console.log("err :>> ", err);
      });
      Cart.deleteProductFromCartWith(id, product.price, (cart) => {
        console.log("cart :>> ", cart);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static fetchProductById(id, cb) {
    getProductsFromFile((products) => {
      const matchedProduct = products.find((p) => p.id === id);
      console.log("matchedProduct :>> ", matchedProduct);
      cb(matchedProduct);
    });
  }
};
