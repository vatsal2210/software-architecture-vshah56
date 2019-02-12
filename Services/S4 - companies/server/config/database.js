const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vatsal",
    database: "software-architecture-s4"
});

connection.connect(function (error) {
    if (error) {
        console.log("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;