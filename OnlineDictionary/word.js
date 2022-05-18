

const mysql2 = require('mysql2');
const mysqlWitPromise = require('mysql2/promise');

module.exports.getDictionaryResult = async function(searchword){

    const connection = await mysqlWitPromise.createConnection({
        host: 'localhost',
        database: 'entries',
        user: 'root',
        password: 'MPP_password2022'
      });

    const [rows, fields,err] = await connection.execute(`SELECT * FROM entries where word='${searchword}'`, ['Morty', 14]);

    if(err){
        console.log(err);
        return error;
    }
    else{
        console.log(rows);
        console.log(fields);
        return rows;
    }
}
