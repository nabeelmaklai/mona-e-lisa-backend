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

const getCollections = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('collectionIds')
    res.send(user.collectionIds)
  } catch (error) {
    console.log(error)
  }
}

const follow = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    user.following.push(req.body.userId)
    user.save()
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { show, getCollections, follow }
