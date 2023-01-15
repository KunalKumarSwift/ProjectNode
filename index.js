const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// Setting view engine
// examples ejs / pug / express handlebars
app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use(adminData.routes);
// app.use('/admin, 'adminRoutes);
// can also use this to filter urls with some common pattern
// eg - localhoast:3000/admin/add-products will be called using these
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render("404");
});
app.listen(3000);
