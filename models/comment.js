const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    body: { type: String, required: true },
    artId: { type: Schema.Types.ObjectId, ref: 'Art' },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    replies: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        body: { type: String, required: true }
      }
    ]
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Comment', commentSchema)
