const jawsConnect;
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    jawsConnect = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    jawsConnect = mysql.createConnection({
        host: "o61qijqeuqnj9chh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "p85wxsjts1341y30",
        password: "yi6z1xh2f0q017rw",
        database: "rlelx6qyre1np09o"
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected: ID ${connection.threadId}`);
});

module.exports = connection;