'use strict'
const Users = require('../models/Users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
let ejwt = require('express-jwt');
let jwt = require('jsonwebtoken');

let register = (req, res, next) => {
  Users.register({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username
  }, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      res.send(err, { alert: 'Oh, snap! Your regisration was unsuccessfull!'})
    } else {
      passport.authenticate('local')(req, res, () => {
        res.status(200).json(user);
      })
    }
  })
}

let login = (req, res, next) => {
  passport.authenticate('local', {}, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      const token = jwt.sign({
        username: user.username,
        id: user._id,
        name: user.name,
        email: user.email
      }, 'secret', {expiresIn : 60 * 60});
      res.json({
        token: token
      })
    }

  })(req, res, next)
}

module.exports = {
  register: register,
  login: login
}
