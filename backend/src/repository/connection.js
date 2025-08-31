import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
})

console.log('--> DB conectado <--');
export default con;