const fs = require('fs');
const faker = require('faker');
const { seedData } = require('./db');


const out = fs.createWriteStream('/tmp/shoes.csv');
const records = Array(500).fill().map((e, i) => {
  return `https://s3-us-west-1.amazonaws.com/wornshoes/${i % 34}.jpg,@${faker.internet.userName()},${faker.random.number()},${faker.date.past().getTime()},${(i) % 100}`;
});
records.forEach((i) => {
  out.write(`${i}\n`);
});

setTimeout(() => {
  seedData();
}, 5000);
