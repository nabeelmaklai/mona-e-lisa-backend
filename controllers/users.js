const User = require('../models/user')

const show = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate([
      'artIds',
      'collectionIds',
      'following'
    ])
    await user.populate('collectionIds.artIds')
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

const unfollow = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          following: req.body.userId
        }
      }
    )
    res.send('Unfollowed')
  } catch (error) {
    console.log(error)
  }
}

const editBio =async (req,res)=>{
  try {
    const update = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    res.send(update)
  } catch (error) {
    
  }
}

const getFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('following')
    const following = user.following.map((user) => ({
      _id: user._id,
      name: user.name
    }))
    res.send(following)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { show, getCollections, follow, unfollow,editBio, getFollowing }
