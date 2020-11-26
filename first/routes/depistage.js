const express = require('express');
const router  = express.Router();
const depistageCtrl = require('../controllers/depistageController');
const auth = require('../middlewares/auth');


router.post('/', auth, depistageCtrl.createDepistage);
router.get('/', auth, depistageCtrl.getAllDepistage);
router.get('/:id', auth, depistageCtrl.getOneDepistage);
router.put('/:id', auth, depistageCtrl.modifyDepistage);
router.delete('/:id', auth, depistageCtrl.deleteDepistage);
router.get('/suivi/:suivi', auth, depistageCtrl.suiviDepistage);

module.exports = router;