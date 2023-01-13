const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"aNqzbbvNct29nKiASLWr",
    host:"containers-us-west-36.railway.app",
    port:6221,
    database:"railway"
});

module.exports = pool;
