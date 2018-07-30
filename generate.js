const fs = require('fs');
const faker = require('faker');
const { connection } = require('./db');


const out = fs.createWriteStream('/tmp/shoes.csv');
const records = Array(500).fill().map((e, i) => {
  return `https://s3-us-west-1.amazonaws.com/wornshoes/${i % 31}.jpg, https://s3-us-west-1.amazonaws.com/wornshoes/peeps/${i % 16}.jpg, @${faker.internet.userName()},${faker.random.number()},${faker.date.past().getTime()},${(i) % 100}`;
});
records.forEach((i) => {
  out.write(`${i}\n`);
});


const seedData = () => {
  connection.query(
    'TRUNCATE TABLE photos', (error, results, fields) => {
      if (error) throw error;
      console.log(results);
    },
  );
  connection.query(
    `LOAD DATA LOCAL INFILE '/tmp/shoes.csv'
    INTO TABLE photos
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n' 
    (photo,user_pic,user,likes,posted_on,product)`, (error, results, fields) => {
      if (error) throw error;
      console.log(results);
    },
  );
  connection.end();
};

seedData();
