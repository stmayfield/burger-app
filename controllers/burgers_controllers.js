const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


// HTTP/HANDLEBAR ROUTES
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObj = { burger: data }
        res.render("index", hbsObj);
        console.log(hbsObj.burger);
        console.log(typeof hbsObj.burger[0].burger_name)

    });
});

router.post("/api/burger", function (req, res) {
    burger.insertOne("burger_name", req.body.burger, function (data) {
        console.log({ id: data.insertId });
        res.json({ id: data.insertId });
    });
});

// API ROUTES

module.exports = router;