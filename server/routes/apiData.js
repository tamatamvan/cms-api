const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

/* GET users listing. */
router.get('/', dataController.getAllData);
router.post('/search_letter/', dataController.getDataByLetter);
router.post('/search_frequency/', dataController.getDataByFreq);
router.post('/', dataController.createNewData);
router.put('/:id', dataController.updateDataById);
router.delete('/:id', dataController.deleteDataById);

module.exports = router;
