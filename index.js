const express = require('express');


const app = express();
const router = require('./routes/routes');
const bodyParser = require('body-parser');

const PORT = '3002';
const url = 'localhost';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, url, () => {
  console.log(`App is now running on http://${url}:${ PORT }`);  // eslint-disable-line no-console
});