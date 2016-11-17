const DataDates = require('../models/DataDates');

let getAllDataDate  = (req, res, next) => {
  DataDates.find({}, (err, datas) => {
    if (err) {
      console.log(err);
    } else {
      res.json(datas);
    }
  })
}

let getDataDateByDate  = (req, res, next) => {
  DataDates.find({
    date: req.body.date
  }, (err, datas) => {
    if (err) {
      console.log(err);
    } else {
      res.json(datas);
    }
  })
}
let getDataDateByFreq  = (req, res, next) => {
  DataDates.find({
    frequency: req.body.frequency
  }, (err, datas) => {
    if (err) {
      console.log(err);
    } else {
      res.json(datas);
    }
  })
}
let createNewDataDate  = (req, res, next) => {
  DataDates.create({
    date: req.body.date,
    frequency: req.body.frequency
  }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  })
}
let updateDataDateById  = (req, res, next) => {
  DataDates.update({
    _id: req.params.id
  }, req.body, (err, updated) => {
    if (err) {
      console.log(err);
    } else {
      res.json(updated);
    }
  })
}
let deleteDataDateById  = (req, res, next) => {
  DataDates.remove({
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
  getAllDataDate,
  getDataDateByFreq,
  getDataDateByDate,
  createNewDataDate,
  updateDataDateById,
  deleteDataDateById
}
