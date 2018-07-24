const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const faker = require ('faker')

const app = express();
const PORT = 1337;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

// // const records = Array(500).fill().map((e, i) => i);
// fs.writeFile('shoes.csv', 'test,test,test')

const out = fs.createWriteStream('/tmp/shoes.csv');
const records = Array(500).fill().map((e, i) => {
  return `https://s3-us-west-1.amazonaws.com/wornshoes/${i % 35}.jpg,@${faker.internet.userName()},${faker.random.number()},${faker.date.past().getTime()},${(i) % 100}`;
});
console.log(records);
records.forEach((i) => {
  out.write(`${i}\n`);
});

app.listen(PORT, () => console.log('Listening!'));
