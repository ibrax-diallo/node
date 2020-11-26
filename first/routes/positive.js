const express = require('express');
const router = express.Router();
const positiveCtrl = require('../controllers/positiveController');
const auth = require('../middlewares/auth');


router.post('/', auth, positiveCtrl.createPositive);
router.get('/', auth, positiveCtrl.getAllPositive);
router.get('/:id', auth, positiveCtrl.getOnePositive);
router.put('/:id', auth, positiveCtrl.modifyPositive);
router.delete('/:id', auth, positiveCtrl.deletePositive);
module.exports = router;