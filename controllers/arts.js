const Art = require('../models/art')
const Comment = require('../models/comment')
const User = require('../models/user')

const createArt = async (req, res) => {
  // console.log(req.body.userId)
  try {
    const userId = await User.findById(req.body.userId)
    const post = await Art.create({ ...req.body })
    console.log('This is the new art id', userId.artIds)
    await userId.artIds.push(post._id)
    await userId.save()
    res.send(post)
  } catch (error) {
    console.log(error)
  }
}

const show = async (req, res) => {
  try {
    const art = await Art.findById(req.params.id).populate([
      'userId',
      'commentIds'
    ])
    for (let i = 0; i < art.commentIds.length; i++) {
      await art.commentIds[i].populate('userId')
    }
    res.send(art)
  } catch (error) {
    console.log(error)
  }
}

const index = async (req, res) => {
  try {
    const arts = await Art.find({}).populate(['userId', 'commentIds'])
    res.send(arts)
  } catch (error) {
    console.log(error)
  }
}

const addComment = async (req, res) => {
  try {
    const comment = new Comment({ ...req.body })
    comment.save()
    const art = await Art.findById(req.params.id)
    art.commentIds.push(comment._id)
    art.save()
    res.send(art)
  } catch (error) {
    console.log(error)
  }
}
const deleteComment = async (req, res) => {
  console.log('Art ID', req.params.id)
  console.log('comment ID', req.params.commentId)
  // console.log('Done', req.body.data)

  try {
    const artId = await Art.findById(req.params.id)
    await Art.findByIdAndUpdate(
      artId,
      { $pull: { commentIds: req.params.commentId } },
      { new: true }
    )
    await Comment.findOneAndDelete({ _id: req.params.commentId })
    console.log('deleted')
  } catch (error) {
    console.log('error in delete comment controller', error)
  }
}

const like = async (req, res) => {
  try {
    const art = await Art.findById(req.params.id)
    art.likes.push(req.body.userId)
    art.save()
    res.send(art)
  } catch (error) {
    console.log(error)
  }
}

const removeLlike = async (req, res) => {
  try {
    await Art.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          likes: req.body.userId
        }
      }
    )
    res.send('')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createArt,
  show,
  index,
  addComment,
  deleteComment,
  like,
  removeLlike
}
