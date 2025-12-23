const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'production'
    ? '.env.prod'
    : '.env.local',
  quiet: true
});

// Environment variables
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/microfinance';
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

module.exports = {
  MONGO_URI,
  PORT,
  HOST,
};
