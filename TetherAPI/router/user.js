const express = require('express')
const router = express.Router();
const userHelper = require('../helper/authhelper');
const verify = require('../middleware/jwt')
const auth=require('../controller/authController')

router.post('/signup',auth.signup);
router.post('/login',auth.login);
router.post('/updateUser',auth.updateUser)




module.exports = router