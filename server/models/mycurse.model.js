const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    title: String,
    description: String,
    img: String,
    especialidad: String,
    mencion: String,
    credito: String,
    ciclo: String,
    meet: String,
    show: String,
    codigo: String,
    requisito: String,
    year: String,
    curse: {
      type: Schema.Types.ObjectId,
    },
    user: {
      type: Schema.Types.ObjectId,
    },
    userteacher: {
      type: Schema.Types.ObjectId,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Integer", userSchema);
