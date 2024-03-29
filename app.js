require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, PATH_MONGO } = require('./utils/config');
const allRoutes = require('./routes/index');
const errorMiddleware = require('./middlewares/error');
const { apiLimiter } = require('./middlewares/api-limiter');
const { cors } = require('./middlewares/cors');

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(PATH_MONGO, {
  useNewUrlParser: true,
});

app.use(cors);
app.use(helmet());
app.use(bodyParser.json());
app.use(requestLogger);
app.use(apiLimiter);

app.use('/', allRoutes);

app.use(errorLogger);
app.use(errors());
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT} ...`);
});
