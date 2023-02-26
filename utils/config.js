const PORT = 3000;
const PATH_MONGO = 'mongodb://127.0.0.1:27017/bitfilmsdb';

let { JWT_SECRET } = process.env;
if (process.env.NODE_ENV !== 'production') {
  JWT_SECRET = 'development-key';
}

module.exports = { PORT, PATH_MONGO, JWT_SECRET };
