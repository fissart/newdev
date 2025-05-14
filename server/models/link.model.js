const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    curse: {
      type: Schema.Types.ObjectId,
    },
    user: {
      type: Schema.Types.ObjectId,
    },
    file: { type: String },
    name: { type: String },
    detail: { type: String },
    type: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Editor", userSchema);
