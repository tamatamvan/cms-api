'use strict'
const Users = require('../models/Users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
let jwt = require('jsonwebtoken');
let ejwt = require('express-jwt');

let register = (req, res, next) => {
  Users.register({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
  }, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      res.send(err, {alert: 'Oh, Snap! Your regisration was failed!'});
    } else {
      passport.authenticate('local')(req, res, () => {
        res.status(200).json(user);
      })
    }
  })
}
let login = (req, res, next) => {
  Users.authenticate('local', {}, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      const token = jwt.sign({
        // id: user._id,
        username: user.username,
        name: user.name,
        email: user.email
      }, 'secretlalala', {expiresIn : 60 * 60});
      res.json({
        token: token
      })
    }
  })(req, res, next)
}

// let login = (req, res, next) => {
//   passport.authenticate('local', {}, (err, user) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const token = jwt.sign({
//         username: user.username,
//         id: user._id,
//         name: user.name,
//         email: user.email
//       }, 'secretlalala', {expiresIn : 60 * 60});
//       res.json({
//         token: token
//       })
//     }
//   })(req, res, next)
// }

module.exports = {
  register,
  login
}
