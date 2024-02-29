const User = require('../models/user')

const show = async (req, res) => {
  try {
    const user = User.findById(req.params.id).populate([
      'artIds',
      'collectionIds'
    ])
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { show }
