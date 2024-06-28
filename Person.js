const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensure name is required
  },
  age: {
    type: Number,
    required: true, // Ensure age is required
  },
  work:{
    type:String,
    enum:['chef','waiter','manager'],
    required:true
  },
  mobile:{
          type:String,
          required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  address:{
    type:String
  },
  salary:{
    type:Number,
    required:true
  }
});

// creare person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
