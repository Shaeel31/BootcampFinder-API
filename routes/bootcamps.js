var express = require('express');
var router = express.Router();
const {getBootcamps , getSingleBootcamp , createBootcamp , updateBootcamp , deleteBootcamp}  = require('../controllers/bootcamps')


// /** 
//  * @swagger 
//  * /getAllBootcamps: 
//  *   get: 
//  *     description: Get all Bootcamps 
//  *     responses:  
//  *       200: 
//  *         description: Success    
//  * paths:
//  *  /api/v1/bootcamps/
//  *   
//  */
router.route('/').get(getBootcamps).post(createBootcamp)
router.route('/:id').get(getSingleBootcamp).put(updateBootcamp).delete(deleteBootcamp)
module.exports = router;
