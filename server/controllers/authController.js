'use strict'
const Users = require('../models/Users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtokent');
const ejwt = require('express-jwt');

let register = (req, res, next) => {

}
let login = (req, res, next) => {

}

module.exports = {
  register,
  login
}
