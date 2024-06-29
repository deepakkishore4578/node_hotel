const mongoose = require('mongoose');
require('dotenv').config();
// define mongodb url connection
// const mongourl = 'mongodb://localhost:27017/hotel';
const mongourl=process.env.mongodb_url;

mongoose.connect(mongourl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
           
const db = mongoose.connection;
 
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;
