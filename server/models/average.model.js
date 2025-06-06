const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    nota: String,
    codigo: String,
    teacher: {
      type: Schema.Types.ObjectId,
    },
    user: {
      type: Schema.Types.ObjectId,
    },
    curse: {
      type: Schema.Types.ObjectId,
    },
    title: String,
    ciclo: String,
    credito: String,
    mencion: String,
    year: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Average", noteSchema);
