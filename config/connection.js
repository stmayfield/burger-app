const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else if (process.env.PORT) {
    connection = mysql.createConnection({
        port: 3306,
        host: 'o61qijqeuqnj9chh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'p85wxsjts1341y30',
        password: 'yi6z1xh2f0q017rw',
        database: 'rlelx6qyre1np09o'
    })
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
};

module.exports = connection;