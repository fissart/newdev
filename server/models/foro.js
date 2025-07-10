const { Schema, model, ObjectId } = require("mongoose");

const userSchema = new Schema(
  {
    title: String,
    type: String,
    descriptionnew: String,
    description: String,
    foreign: {
      type: Schema.Types.ObjectId,
    },
    user: {
      type: Schema.Types.ObjectId,
    }
  },
  {
    timestamps: true,
    collation: { locale: 'es' }
  }
);

module.exports = model("Foro", userSchema);
