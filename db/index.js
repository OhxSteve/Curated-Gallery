const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gram',
});

connection.connect();

connection.query(
  `LOAD DATA INFILE '/tmp/shoes.csv'
  INTO TABLE photos
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  (photo,user,likes,posted_on,product)`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  },
);

connection.end();
