const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    teacher: { type: Schema.Types.ObjectId, },
    user: { type: Schema.Types.ObjectId, },
    curse: { type: Schema.Types.ObjectId, },
    title: { type: String, required: true },
    practica: { type: String, required: true },
    teoria: { type: String, required: true },
    mencion: { type: String, required: true },
    requisito: { type: String, required: true },
    credito: { type: String, required: true },
    ciclo: { type: String, required: true },
    nota: { type: String, required: true },
    year: { type: String, required: true },
    codigo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cursesource", noteSchema);
