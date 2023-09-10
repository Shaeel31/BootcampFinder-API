const bootcamp = require('../models/Bootcamp')
const ErrorResponse = require('../utils/errorResponse')
exports.getBootcamps = (req, res, next) => {
    debugger
    res.status(200).json({
        status: true,
        msg: 'all bootcamps'
    })
}

exports.getSingleBootcamp = async (req, res, next) => {
    debugger;
    let id = req.params.id;
    try {
        let data = await bootcamp.findById(id);
        console.log(data)
        if (data) {
            res.status(200).json({
                success: true,
                response: data
            })
        }
        res.status(400).json({
            success: false,
            message: 'Cannot Find Document'
        })
    }
    catch (err) {
        next(new ErrorResponse(`Bootcamp not found with id ${id}` , 404))
        // console.log(err)
    }

}
exports.createBootcamp = async (req, res, next) => {
    let bootcampData = req.body
    let data = await bootcamp.create(bootcampData, (err, response) => {
        if (err) {
            res.status(400).json(err.message)
        }
        else {
            res.status(200).json({
                success: true,
                response: response
            });
        }
    })

    // res.status(200).json('chaska here')
    // res.status(200).json({
    //     status: true,
    //     bootcamp: 'created Bootcamp'
    // })
}
exports.updateBootcamp = async (req, res, next) => {
    debugger;
    let bootcampId = req.params.id
    let bootcampData = req.body
    try {
        debugger
        const data = await bootcamp.findByIdAndUpdate(bootcampId, bootcampData);
        debugger
        if (!data) {
            res.status(200).json('No Document Found');
        }
        else {
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json(error.message)
        res.end()

    }

    // let id = req.params.id
    // res.status(200).json({
    //     status: true,
    //     bootcamp: `updated Bootcamp with id ${id}`
    // })
}

exports.deleteBootcamp = async (req, res, next) => {
    let id = req.params.id
    const data = await bootcamp.findByIdAndDelete(id);
    try {

        if (data) {
            res.status(200).json({
                success: true,
                response: data
            })
        }
        else {
            res.status(400).json('No document Found')
        }
    }
    catch (err) {
        res.status(400).json(err.message);
        res.end()
    }

}
