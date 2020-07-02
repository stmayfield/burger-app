const orm = require("../config/orm.js");


const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });

    },
    insertOne: function (cols, val, cb) {
        orm.insertOne("burgers", cols, val, function (res) {
            cb(res);
        });

    },

    updateOne: function () {
        orm.updateOne();
    }
};

module.exports = burger;



/*
const orm = {
    all: function (varA, cbORM) {
        let query = "SELECT * FROM " + varA + ";";
        connection.query(query, function (err, res) {
            if (err) throw err;
            cbORM(res);
        });
    }
};

const cat = {
    all: function (cbCAT) {
        orm.all("varA", function (res) {
            cbCAT(res);
        });
    }
}

router.get("/", function (req, res) {
    cat.all(function (varA) {
        const hbsObject = {
            cats: varA
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
*/
