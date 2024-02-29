const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    body: { type: String, required: true },
    artId: { type: Schema.Types.ObjectId, ref: "Art" },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model("Comment", commentSchema)
