const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    idstudent: {
      type: Schema.Types.ObjectId,
    },
    idteacher: {
      type: Schema.Types.ObjectId,
    },
    idcurso: {
      type: Schema.Types.ObjectId,
    },
    codigo: String,
    year: String,
    ciclo: String,
    mencion: String,
    items: [{}]
  },
  {
    timestamps: true,
  }
);

module.exports = model("Encuesta", userSchema);
