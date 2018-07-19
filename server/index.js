const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
const PORT = 3000

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(bodyParser.json())






app.listen(PORT, () => console.log('Listening!'))