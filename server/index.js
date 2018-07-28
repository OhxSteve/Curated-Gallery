const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getGramInfo } = require('../db');


const app = express();

app.use(bodyParser.json());


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


module.exports = app;
