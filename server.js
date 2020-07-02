const express = require("express");
const exphandlbars = require("express-handlebars");
const routes = require("./controllers/burgers_controllers.js");


const PORT = process.env.PORT || 8080;

const app = express();
// Location of static content
app.use(express.static("public"));
// Needed for POST and PUT requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configures Express to use Handlebars

app.engine("handlebars", exphandlbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Server routes
app.use(routes);
// Listen response request
app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});


