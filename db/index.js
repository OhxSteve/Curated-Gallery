const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gram',
});

connection.connect();

// connection.query(
//   `LOAD DATA INFILE '/tmp/shoes.csv'
//   INTO TABLE photos
//   FIELDS TERMINATED BY ','
//   LINES TERMINATED BY '\n' 
//   (photo,user,likes,posted_on,product)`, (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
//   },
// );

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
};
