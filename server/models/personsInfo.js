//schema 

const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  person: String,
  time: Date,
  location: String,
  file: Buffer,
});

const person = module.exports = mongoose.model('person', PersonSchema);

// module.exports.person = person;



