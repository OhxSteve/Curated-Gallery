const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gram',
});

connection.connect();

const getGramInfo = (id, cb) => {
  connection.query('select * from photos where product = ?', [id], (error, results, fields) => {
    if (error) {
      cb(error);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  getGramInfo,
  connection,
};
