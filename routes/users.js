var express = require('express');
var router = express.Router();
const {addUser , loginUser} = require('../controllers/users');
/* GET users listing. */

/** 
 * @swagger 
 * /getAllUsers: 
 *   get: 
 *     description: Get all Users 
 *     responses:  
 *       200: 
 *         description: Success    
 * paths:
 *  /api/v1/users/
 *   
 */
router.route('/').post(addUser)

/** 
 * @swagger 
 * /login: 
 *   get: 
 *     description: Login
 *     responses:  
 *       200: 
 *         description: Success    
 * paths:
 *  /api/v1/users/login
 *   
 */
router.route('/login').post(loginUser)





module.exports = router