const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const errorHandlers = require('./middlewares/errors');

const api = "/api/v1";

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

// API Endpoints
app.use(`${api}/users`, require('./routes/users'));

// Error Handlers
app.use(errorHandlers.pageNotFound);
app.use(errorHandlers.defaultErrorHandler);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Running at port ${listener.address().port}`);
});

module.exports = app;
