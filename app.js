require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, PATH_MONGO } = require('./utils/config');
const allRoutes = require('./routes/index');

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(PATH_MONGO, {
  useNewUrlParser: true,
});

app.use(helmet());
app.use(bodyParser.json());
app.use(requestLogger);

app.use('/', allRoutes);
app.use(errorLogger);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT} ...`);
});
