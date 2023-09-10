var express = require('express');
var router = express.Router();
const {getBootcamps , getSingleBootcamp , createBootcamp , updateBootcamp , deleteBootcamp}  = require('../controllers/bootcamps')


/** 
 * @swagger 
 * /api/v1/bootcamps/get-all-bootcamps: 
 *   get: 
 *     description: Get all Bootcamps 
 *     responses:  
 *       200: 
 *         description: Success    
 * paths:
 *  /api/v1/bootcamps/
 *   
 */

router.route('/').get(getBootcamps).post(createBootcamp)

/** 
 * @swagger 
 * /api/v1/bootcamps/get-single-bootcamp: 
 *   get: 
 *     description: Get all Bootcamps 
 *     responses:  
 *       200: 
 *         description: Success    
 * paths:
 *  /api/v1/bootcamps/getSingleBootcamp
 *   
 */
router.route('/:id').get(getSingleBootcamp).put(updateBootcamp).delete(deleteBootcamp)
module.exports = router;
