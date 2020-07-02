const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


// HTTP/HANDLEBAR ROUTES
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burger: data });
        console.log({ burger: data });

    });
});

router.post("/api/burger", function (req, res) {
    burger.insertOne(req.body.name, function (data) {
        console.log({ id: data.insertId });
        res.json({ id: data.insertId });
    });
});

// API ROUTES

module.exports = router;