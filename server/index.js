const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const faker = require('faker');
const { getGramInfo } = require('../db');
const router = express.Router();

const app = express();
const PORT = 1337;


app.use(bodyParser.json());

// const out = fs.createWriteStream('/tmp/shoes.csv');
// const records = Array(500).fill().map((e, i) => {
//   return `https://s3-us-west-1.amazonaws.com/wornshoes/${i % 34}.jpg,@${faker.internet.userName()},${faker.random.number()},${faker.date.past().getTime()},${(i) % 100}`;
// });
// records.forEach((i) => {
//   out.write(`${i}\n`);
// });
app.get('/', (req, res) => {
  res.redirect('/product/0');
});

app.use('/product/:product', express.static(path.join(__dirname, '../client/dist')));

app.get('/product/:product/gram', (req, res) => {
  getGramInfo(req.params.product, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});


app.listen(PORT, () => console.log('Listening!'));
