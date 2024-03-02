const User = require('../models/user')

const show = async (req, res) => {
  console.log('got to show in the controller')
  try {
    const user = await User.findById(req.params.id).populate([
      'artIds',
      'collectionIds'
    ])

    res.send(user)
  } catch (error) {
    console.log('Show error', error)
  }
}

module.exports = { show }
