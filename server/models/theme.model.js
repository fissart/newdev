const { Schema, model, ObjectId } = require("mongoose");

const userSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    img: { type: String },
    test: { type: String },
    codecurse: { type: String },
    task: { type: String },
    time: { type: String },
    timeex: { type: String },
    conceptual: { type: String },
    procedimental: { type: String },
    actitudinal: { type: String },
    curse: {
      type: Schema.Types.ObjectId,
    },
    user: {
      type: Schema.Types.ObjectId,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Theme", userSchema);
