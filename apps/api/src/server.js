const mongoose = require('mongoose');
const colors = require('colors-cli');

const app = require('./app');
const { MONGO_URI, PORT, HOST } = require('./config/env');
console.log('MONGO_URI:', MONGO_URI);

const success = colors.x13;
const errorColor = colors.red;

async function startServer() {
  try {
    // Connect DB
    await mongoose.connect(MONGO_URI);
    console.log(success('Database Connected!'));

    // Start server
    app.listen(PORT, () => {
      console.log('ENV :', process.env.NODE_ENV);
      console.log(
        success(`Server is running on: http://${HOST}:${PORT}`)
      );
    });

  } catch (error) {
    console.log(errorColor(error.message));
    console.log(errorColor('Server startup failed'));
    process.exit(1);
  }
}

startServer();


