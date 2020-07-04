const connection = require("./connection.js");

const orm = {
    selectAll: function (table, cb) {
        let queryString = `SELECT * FROM ${table} ORDER BY id DESC;`;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })

    },
    insertOne: function (table, cols, val, cb) {
        let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${val}");`
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(queryString);
            cb(res);
        });

    },
    updateOne: function (table, cols, vals, condition, cb) {
        let queryString = `UPDATE ${table} SET ${cols} = ${vals} WHERE ${condition};`;
        connection.query(queryString, function (err, res) {
            if (err) throw err
            cb(res);
        });
    }
};

module.exports = orm;