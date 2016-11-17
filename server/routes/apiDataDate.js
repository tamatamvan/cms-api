const express = require('express');
const router = express.Router();
const dataDateController = require('../controllers/dataDateController');

/* GET users listing. */
router.get('/', dataDateController.getAllDataDate);
router.post('/search_letter/:date', dataDateController.getDataDateByDate);
router.post('/search_frequency/:freq', dataDateController.getDataDateByFreq);
router.post('/', dataDateController.createNewDataDate);
router.put('/:id', dataDateController.updateDataDateById);
router.delete('/:id', dataDateController.deleteDataDateById);

module.exports = router;
