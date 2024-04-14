const sql = require('mssql');

const sqlConfig = {
    user: 'USER',
    password: 'PASSWORD',
    database: 'DATABASE NAME',
    server: 'localhost',
}

const executeQuery = async (queryString) => {
    try {
        await sql.connect(sqlConfig);
        const result = await sql.query(queryString);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

let myQuery = 'SELECT * FROM myTable';
executeQuery(myQuery);