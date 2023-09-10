const User = require('../models/user');
const bcrypt = require('bcryptjs')



function authenticateUser(req, res) {
console.log(req.body)

  }

exports.addUser = authenticateUser ,  async  (req, res, next) => {
    let { name, email, role, password } = req.body
    try {
        const user = {
            name: name,
            email: email,
            role: role,
            password: password
        }
        await User.create(user, (err, response) => {
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
    } catch (error) {
        res.status(400).json(error.message)
    }

}

exports.loginUser =  async (req, res, next) => {
    debugger
    let { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json('Please Provide Email and Password')
    }
    let user = await User.findOne({ email }, 'email password role')
    if (user) {
        const comparePass = await bcrypt.compare(password, user.password);
        if (comparePass) {
            const jwttoken = await user.getSignedJWToken();
            delete user.password
            user = JSON.parse(JSON.stringify(user))
            delete user.password
            const response = {
                user: user,
                token: jwttoken
            }
            res.status(200).json(response)
        }
        else {
            return res.status(200).json('Invalid Credientals')
        }
    }
    else {
        res.status(404).json('No user found')
    }




}
