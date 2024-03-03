const mongoose = require("mongoose")
const Schema = mongoose.Schema

const collectionSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    artIds: [{ type: Schema.Types.ObjectId, ref: "Art" }],
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model("Collection", collectionSchema)


