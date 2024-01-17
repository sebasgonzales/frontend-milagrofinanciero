//Pool va a poder establecer una conexión
const {Pool} = require ('pg')

const pool = new Pool ({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'milagrofinanciero-g1'
})
 module.exports = pool;