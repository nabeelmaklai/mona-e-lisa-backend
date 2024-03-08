const Collections = require('../models/collection')
const User = require('../models/user')

const showCollections = async (req, res) => {
  try {
    const collectionId = await req.params.id
    const collection = await Collections.findById(collectionId).populate(
      'artIds'
    )
    res.send(collection)
  } catch (error) {
    console.log('could not show collection')
  }
}

const createCollection = async (req, res) => {
  try {
    const newCollection = await Collections.create(req.body)
    const userId = await req.body.userId
    const currentUser = await User.findById(userId)
    currentUser.collectionIds.push(newCollection._id)
    await currentUser.save()
  } catch (error) {
    console.log(error)
  }
}

const updateCollection = async (req, res) => {
  try {
    await Collections.findOneAndUpdate({ _id: req.params.id }, req.body)
  } catch (error) {
    console.log('Could not update the collection')
  }
}

const add = async (req, res) => {
  try {
    const collection = await Collections.findById(req.params.id)
    collection.artIds.push(req.body.artId)
    collection.save()
    res.send(collection)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    await Collections.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          artIds: req.body.artId
        }
      }
    )
    res.send('removed')
  } catch (error) {
    console.log(error)
  }
}

const deleteCollection = async (req, res) => {
  try {
    const collection = await Collections.findById(req.params.id)
    await User.updateOne(
      { _id: collection.userId },
      {
        $pull: {
          collectionIds: req.params.id
        }
      }
    )
    await Collections.findByIdAndDelete(req.params.id)
    res.send('deleted')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  showCollections,
  createCollection,
  updateCollection,
  add,
  remove,
  delete: deleteCollection
}
