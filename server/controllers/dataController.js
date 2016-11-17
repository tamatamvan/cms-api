const Datas = require('../models/Datas');

let getAllData  = (req, res, next) => {
  Datas.find({}, (err, datas) => {
    if (err) {
      console.log(err);
    } else {
      res.json(datas);
    }
  })
}

let getDataByLetter  = (req, res, next) => {
  Datas.find({
    letter: req.body.letter
  }, (err, datas) => {
    if (err) {
      console.log(err);
    } else {
      res.json(datas);
    }
  })
}
let getDataByFreq  = (req, res, next) => {
  Datas.find({
    frequency: req.body.frequency
  }, (err, datas) => {
    if (err) {
      console.log(err);
    } else {
      res.json(datas);
    }
  })
}
let createNewData  = (req, res, next) => {
  Datas.create({
    letter: req.body.letter,
    frequency: req.body.frequency
  }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  })
}
let updateDataById  = (req, res, next) => {
  Datas.update({
    _id: req.params.id
  }, req.body, (err, updated) => {
    if (err) {
      console.log(err);
    } else {
      res.json(updated);
    }
  })
}
let deleteDataById  = (req, res, next) => {
  Datas.remove({
    _id: req.params.id
  }, (err, deleted) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deleted);
    }
  })
}

module.exports = {
  getAllData,
  getDataByFreq,
  getDataByLetter,
  createNewData,
  updateDataById,
  deleteDataById
}
