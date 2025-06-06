const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, },
    message: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    id: { type: String, required: true },
    ip: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Chat", noteSchema);
