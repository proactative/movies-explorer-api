const { PORT = 3000, PATH_MONGO = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;
module.exports = { PORT, PATH_MONGO };
