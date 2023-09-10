
const errorHandler = (err , req , res , next) => {
    console.log(err.message.red)
    res.status(err.statusCode || 500).json(err.message || 'Server Error')
}

module.exports = errorHandler

