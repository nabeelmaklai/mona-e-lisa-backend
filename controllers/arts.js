const Art = require('../models/art')
const Comment = require('../models/comment')

const createArt = async (req, res) => {
  try {
    const post = await Art.create({ ...req.body })
    res.send(post)
  } catch (error) {
    console.log(error)
  }
}

const show = async (req, res) => {
  try {
    const art = await Art.findById(req.params.id).populate([
      'userID',
      'commentIds'
    ])
    res.send(art)
  } catch (error) {
    console.log(error)
  }
}

const index = async (req, res) => {
  try {
    const arts = await Art.find({}).populate(['userID', 'commentIds'])
    res.send(arts)
  } catch (error) {
    console.log(error)
  }
}

const addComment = async (req, res) => {
  try {
    const comment = Comment.create({ ...req.body })
    const art = Art.findById(req.params.id)
    art.commentIds.push(comment._id)
    art.save()
    res.send(art)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { createArt, show, index, addComment }
