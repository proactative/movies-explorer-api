const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const allRoutes = require('./routes/index');

const app = express();

const { PORT = 3000, PATH_MONGO = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;
mongoose.set('strictQuery', false);
mongoose.connect(PATH_MONGO, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(requestLogger);

app.use('/', allRoutes);
app.use(errorLogger);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT} ...`);
});
