const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// ? Setting view engine
// ? examples ejs / pug / express handlebars
app.set("view engine", "ejs");
// ? Here we tell express that we are setting the views folder as the default location for views.5
// ? This could be changed to something custom like templates or something fancy!! :)
app.set("views", "views");

const adminRoutes = require("../../routes/admin");
const shopRoutes = require("../../routes/shop");
const resourceRoutes = require("../../routes/404");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "..")));
// * app.use(adminRoutes);
app.use("/admin", adminRoutes);
// ? Install 'Better Comments' VS Code extension to see these comments beautifully

// ! app.use('/admin, 'adminRoutes);
// ! can also use this to filter urls with some common pattern
// ! eg - localhoast:3000/admin/add-products will be called using these

/*
 * The pattern matching depends on which url we register first.
 * In this case we have admin route first and then shop routes and then latly it will match 404.
 */
app.use(shopRoutes);
app.use(resourceRoutes);
app.listen(3000);
