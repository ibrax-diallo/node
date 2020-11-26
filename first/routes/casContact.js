const express = require('express');
const router = express.Router();
const casContactCtrl = require('../controllers/CasContactControllers');
const auth = require('../middlewares/auth');


router.post('/', auth, casContactCtrl.createCasContact);
router.get('/', auth, casContactCtrl.getAllCasContact);
router.get('/:id', auth, casContactCtrl.getOneCasContact);
router.get('/positives/:positive', auth, casContactCtrl.getPositiveCasContact);
router.put('/:id', auth, casContactCtrl.modifyCasContact);
router.delete('/:id', auth, casContactCtrl.deleteCasContact);
module.exports = router;