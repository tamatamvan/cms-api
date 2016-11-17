'use strict'
const mongoose = require('mongoose');

let datasSchema = new mongoose.Schema({
  letter: String,
  frequency: Number
})

let datas = mongoose.model('datas', datasSchema);

module.exports = datas;
