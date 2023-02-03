const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const filePath = path.join(rootDir, "..", "..", "data", "cart.json");

const getCartProductsFromFile = (cb) => {
  fs.readFile(filePath, (error, fileContent) => {
    if (error) {
      return cb({ products: [], totalPrice: 0.0 });
    }
    cb(JSON.parse(fileContent));
  });
};

const saveCart = (cart, cb) => {
  fs.writeFile(filePath, JSON.stringify(cart), (error) => {
    if (error) {
      console.log("Error writing to cart file:", error);
      return;
    }
    cb();
  });
};

module.exports = class Cart {
  static addProduct(productId, productPrice, cb) {
    getCartProductsFromFile((cart) => {
      const existingProductIndex = cart.products.findIndex(
        (product) => product.id === productId
      );
      if (existingProductIndex >= 0) {
        cart.products[existingProductIndex].quantity += 1;
        cart.totalPrice =
          parseFloat(cart.totalPrice) + parseFloat(productPrice);
        return saveCart(cart, () => cb(cart));
      }

      cart.products.push({ id: productId, quantity: 1 });
      cart.totalPrice = parseFloat(cart.totalPrice) + parseFloat(productPrice);
      saveCart(cart, () => cb(cart));
    });
  }
};
