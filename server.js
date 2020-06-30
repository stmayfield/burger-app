const express = require("express");
const exphandlbars = require("express-handlebars");
const routes = require("./controllers/burgers_controllers.js");

const PORT = process.env.PORT || 8080;

const app = express();
// Location of static content
app.use(express.static("public"));
// Needed for POST and PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configures Express to use Handlebars
app.set("view engine", "handlebars");
app.engine("handlebars", exphandlbars({ defaultLayout: "main" }));

//Server routes
app.use(routes);

app.listen(PORT, function () {
    console.log(`localhost:${PORT}`);
});