var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    port            : '3306',
    user            : 'root',
    password        : '',
    database        : 'projetwebril8'
  });
  
module.exports = pool;