const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

/* GET users listing. */
router.get('/', dataController.getAllData);
router.get('/search_letter/:letter', dataController.getDataByLetter);
router.get('/search_frequency/:freq', dataController.getDataByFreq);
router.post('/', dataController.createNewData);
router.put('/:id', dataController.updateDataById);
router.delete('/:id', dataController.deleteDataById);

module.exports = router;
