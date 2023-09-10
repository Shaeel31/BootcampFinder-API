const db = require('mongoose');
exports.connectDB = async function () {
try {
        const conn = await db.connect(process.env.MONGO_URI  , {
   
            useNewUrlParser: true,
            userCreateIndex: true,
            userFindAndModify: false,
            useUnifiedTopology: true,  
        } , );
        console.log('Connection Established')
    }
    catch(err){
        console.log(err.message)
    }

}


// module.exports = {connectDB}