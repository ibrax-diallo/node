const express = require('express');
const userCtrl = require('../controllers/userController')
const router = express.Router();
const muter = require('../middlewares/multer-config');
const auth = require('../middlewares/auth')
const { check, validationResult } = require('express-validator');
const validate = [
    check('username').isLength({ min: 3 }),
    check('email').isEmail(),
    check('password').isLength({ min: 5 })
  ];

router.post('/signup', validate  ,userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/:id', auth, userCtrl.getOneUser);
router.get('/',auth, userCtrl.getAllUser);



module.exports = router;