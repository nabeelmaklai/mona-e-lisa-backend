const mongoose = require("mongoose")
const Schema = mongoose.Schema

const collectionSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    userId: { Type: Schema.Types.ObjectId, ref: "User" },
    artIds: [{ Type: Schema.Types.ObjectId, ref: "Art" }],
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model("Collection", collectionSchema)
