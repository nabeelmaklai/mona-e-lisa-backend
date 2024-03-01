const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    bio: { type: String },
    artIds: [{ type: Schema.Types.ObjectId, ref: 'Art' }],
    collectionIds: [{ type: Schema.Types.ObjectId, ref: 'Collection' }]
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('User', userSchema)
