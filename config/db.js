const mongoose = require('mongoose');
const config = require('config');

if (process.env.NODE_ENV !== 'production') {
  const db = config.get('MONGODB_URI');
} else {
  const db = process.env.MONGODB_URI;
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log('We are connected to the db!');
  } catch (error) {
    console.error(error);
    // Exit process with "Uncaught Fatal Exception" code (1)
    process.exit(1);
  }
};

module.exports = connectDB;
