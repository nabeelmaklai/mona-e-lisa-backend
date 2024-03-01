const Collections = require('../models/collection')
const User = require('../models/user')

const showCollections = async (req, res) => {
  try {
    const collectionId = await req.params.id
    const collection = await Collections.findById(collectionId).populate(
      'artIds'
    )
    const collectionArt = await collection.artIds
    res.send(collectionArt)
  } catch (error) {
    console.log('could not show collection')
  }
}

const createCollection = async (req, res) => {
  try {
    const newCollection = await Collections.create(req.body)
    const userId = await req.body.userId
    const currentUser = await User.findById(userId)
    currentUser.push(newCollection._id)
    await currentUser.save()
  } catch (error) {
    console.log('could not create collection')
  }
}

const updateCollection = async (req, res) => {
  try {
    await Collections.findOneAndUpdate({ _id: req.params.id }, req.body)
  } catch (error) {
    console.log('Could not update the collection')
  }
}

module.exports = {
  showCollections,
  createCollection,
  updateCollection
}
