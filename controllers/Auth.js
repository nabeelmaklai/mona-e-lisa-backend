const { User } = require('../models/user')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { email, name, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await Users.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with the email has already been registered')
    } else {
      const user = await Users.create({ email, passwordDigest, name })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: user._id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({user:payload,token})
    }
    res.status(400).send({status:"Error",msg:"Unauthorized"})
  } catch (error) {
    res.status(401).send({status:"Error",msg:"Anerror has occured"})
  }
}

const updatePAssword = async (req,res)=>{
  try {
    const {oldPAssword,newPassword}=req.body
    let user=await User.findById(req.params.user_id)
    let matched = await middleware.comparePassword(user.passwordDigest,oldPAssword) 
    if (matched){
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id,{passwordDigest})
      let payload={
        id: user.id,
        email:user.email
      }
      return res.send({status:"Password Updated!", user:payload})
    }
    res.status(401).send({status:"Error",msg:"Old Password did not match"})
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'An error has occurred updating password!' })
    
  }
}
