var express = require('express');
var router = express.Router();
const {addUser , loginUser} = require('../controllers/users');
/* GET users listing. */
router.route('/').post(addUser)
router.route('/login').post(loginUser)





module.exports = router