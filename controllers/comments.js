const Comment = require('../models/comment')

const reply = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
    comment.replies.push(req.body)
    comment.save()
    res.send(comment)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { reply }
