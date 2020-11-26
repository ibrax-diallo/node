const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const suiviCtrl = require('../controllers/suiviController');


router.post('/', auth, suiviCtrl.createSuivi);
router.get('/', auth, suiviCtrl.getAllSuivi);
router.put('/:id', auth, suiviCtrl.modifySuivi);
router.get('/:id', auth, suiviCtrl.getOneSuivi);
router.delete('/:id', auth, suiviCtrl.deleteOneSuivi);
router.get('/casContact/:casContact', auth, suiviCtrl.getContactSuivi);

module.exports = router;