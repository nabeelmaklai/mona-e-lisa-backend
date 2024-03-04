const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    commentIds: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Art', artSchema)
