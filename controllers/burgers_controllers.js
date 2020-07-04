const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// API ROUTES

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObj = { burger: data }
        res.render("index", hbsObj);
        // console.log(hbsObj.burger);
        // console.log(typeof hbsObj.burger[0].burger_name)

    });
});

router.post("/api/burger", function (req, res) {
    burger.insertOne("burger_name", req.body.burger, function (data) {
        console.log({ id: data.insertId });
        res.json({ id: data.insertId });
    });
});

router.put("/api/burger:id", function (req, res) {
    const condition = `id = ${req.params.id}`
    burger.updateOne("burger_name", { burger_name: req.body.burgerUpdate }, condition, function (data) {
        console.log(data);
        res.end();
    });
});



module.exports = router;



