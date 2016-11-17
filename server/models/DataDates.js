'use strict'
const mongoose = require('mongoose');

let dataDatesSchema = new mongoose.Schema({
  date: String,
  frequency: Number
})

let dataDates = mongoose.model('dataDates', dataDatesSchema);

module.exports = dataDates;
