const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const products = [];
const filePath = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (error, fileContent) => {
    if (error) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      // ! Must use an arrow function here, otherwise this will not refer to the class scope, instead it will refer to the function context.
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log("err :>> ", err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
