const PORT = 3000;

let { JWT_SECRET, PATH_MONGO } = process.env;
if (process.env.NODE_ENV !== 'production') {
  JWT_SECRET = 'development-key';
  PATH_MONGO = 'mongodb://127.0.0.1:27017/bitfilmsdb';
}

module.exports = { PORT, PATH_MONGO, JWT_SECRET };
