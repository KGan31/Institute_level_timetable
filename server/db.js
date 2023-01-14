const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"kavan@postgres",
    host:"localhost",
    port:5432,
    database:"dummy"
});

module.exports = pool;
