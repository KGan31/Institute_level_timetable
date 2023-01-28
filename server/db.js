const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"postgre1",
    host:"localhost",
    port:5432,
    database:"db"
});

module.exports = pool;
