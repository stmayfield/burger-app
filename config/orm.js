const connection = require("./connection.js");

const orm = {
    selectAll: function (table, cb) {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function (err, res) {
            if (err) {
                return res.status(500).end() || err;
            };
            cb(res);
        })

    }/*,
    insertOne: function (table, cols, val, cb) {
        let queryString = `INSERT INTO ${table} (${cols.toString()}, devoured) VALUES ("${val}", false);`
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });

    },
    updateOne: function () {

    }*/
};

module.exports = orm;