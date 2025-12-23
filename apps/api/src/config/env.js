const dotenv = require("dotenv");

const envFile =
  process.env.NODE_ENV === "production" ? ".env.prod" : ".env.local";

dotenv.config({ path: envFile });

let MONGO_URI;

if (process.env.NODE_ENV === "production") {
  if (!process.env.MONGO_URI) {
    throw new Error("❌ MONGO_URI is missing in production environment");
  }
  MONGO_URI = process.env.MONGO_URI;
} else {
  MONGO_URI =
    process.env.MONGO_URI || "mongodb://localhost:27017/microfinance";
}

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

module.exports = {
  MONGO_URI,
  PORT,
  HOST,
};
