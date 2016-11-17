'use strict'
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

let usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String
},
{
  timestamps: true
})

usersSchema.plugin(passportLocalMongoose);
let users = mongoose.model('users', usersSchema);

module.exports = users;
