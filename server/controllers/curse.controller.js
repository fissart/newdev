const notesww = {};
const fs = require("fs");

const Curse = require("../models/curse.model");
const User = require("../models/auth.model");
const Cursesource = require("../models/cursesource.model");
const Integer = require("../models/mycurse.model");
const Encuesta = require("../models/encuesta");

notesww.getUu = async (req, res) => {
  const notes = await Curse.find();
  res.json(notes);
};

notesww.createU = async (req, res) => {
  console.log(req.body)  // var cursor = db.cursesources.find();
  const note = await Cursesource.find({
    ciclo: "3",
    mencion: "E",
    codigo: "CAFVI203",
  })

  try {
    const wwwww = new Integer({
      "ciclo": note[0].ciclo,
      "mencion": note[0].mencion,
      "codigo": note[0].codigo,
      "title": note[0].title,
      "teoria": note[0].teoria,
      "practica": note[0].practica,
      "credito": note[0].credito,
      "requisito": note[0].requisito,
      "user": req.body.user,
      "curse": req.body.curse,
      "userteacher": req.body.userteacher,
      "year": new Date(),
      "description": "www3www",
      "date": new Date()
    })
    // console.log(wwwww)
    await wwwww.save()
  } catch (err) {
    console.error(err)
  }
  // Integer.insertMany(data)

  // const {
  //   category,
  //   nombre,
  //   contenido,
  //   tarea,
  //   test,
  //   fechaexamen,
  //   fechatarea,
  //   timexa,
  // } = req.body;
  // const newNote = new Curse({
  //   category,
  //   nombre,
  //   contenido,
  //   tarea,
  //   test,
  //   fechaexamen,
  //   fechatarea,
  //   timexa,
  // });
  // console.log(newNote)
  // await newNote.save()
  res.json("New Note added");
};
notesww.createEncuesta = async (req, res) => {
  var mongoose = require('mongoose')
  console.log(req.body)  // var cursor = db.cursesources.find();
  const year = new Date().getFullYear()
  const { idstudent, idteacher, idcurso, codigo, ciclo, mencion, w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20 } = req.body
  console.log(req.body)
  const newCurse = { idstudent, idteacher, idcurso, year, codigo, ciclo, mencion, items: [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20] };
  const Cursew = new Encuesta.default(newCurse);
  await Cursew.save()

  return res.json({
    msgok: "ok",
  })
  // try {
  //     const wwwww = new Integer({
  //       "ciclo": note[0].ciclo,
  //       "mencion": note[0].mencion,
  //       "codigo": note[0].codigo,
  //       "title": note[0].title,
  //       "teoria": note[0].teoria,
  //       "practica": note[0].practica,
  //       "credito": note[0].credito,
  //       "requisito": note[0].requisito,
  //       "user": req.body.user,
  //       "curse": req.body.curse,
  //       "userteacher": req.body.userteacher,
  //       "year": new Date(),
  //       "description": "www3www",
  //       "date": new Date()
  //     })
  //     // console.log(wwwww)
  //     await wwwww.save()
  //   } catch (err) {
  //     console.error(err)
  //   }

};

notesww.getSTDcurses = async (req, res) => {
  const { ObjectId } = require("mongodb");
  const id = ObjectId(req.params.id)
  const ciclo = req.params.ciclo
  const mencion = req.params.mencion
  const year = new Date().getFullYear()
  const user = ObjectId(id)
  console.log(ciclo, mencion, year)
  const integers = await Curse.aggregate([
    {
      $match: { $expr: { $and: [{ $eq: ["$ciclo", ciclo] }, { $eq: ["$mencion", mencion] }, { $eq: ["$year", year + ""] }, { $eq: ["$show", "true"] }] } },
    },
    {
      $lookup: {
        from: "users",
        let: { www: "$user" },
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
        ],
        as: "userw",
      },
    },
    {
      $lookup: {
        from: "encuestas",
        let: { www: "$codigo" },
        pipeline: [
          { $match: { $expr: { $and: [{ $eq: ["$idstudent", user] }, { $eq: ["$ciclo", ciclo] }, { $eq: ["$mencion", mencion] }, { $eq: ["$codigo", "$$www"] }, { $eq: ["$year", year + ""] }] } } },
        ],
        as: "encuestas",
      },
    },
  ])
  // console.log(integers)
  return res.json(integers)
}

notesww.getCURSOUser = async (req, res) => {
  // req.io.on("wwwww", async (www) => {
  //   console.log("www2768")
  // })
  const { ObjectId } = require("mongodb");
  const id = ObjectId(req.params.iduser);
  const user = ObjectId(id);
  const curseshow = req.params.true;
  console.log(req.params.true, req.params.iduser, "www")
  const Curses = await User.aggregate([
    {
      $match: {
        _id: user,
      },
    },
    {
      $lookup: {
        from: "curses",
        let: { www: "$_id" },
        pipeline: [

          { $match: { $expr: { $and: [{ $eq: ["$user", "$$www"] }, { $eq: ["$show", curseshow] },] } } },

          {
            $lookup: {
              from: "integers",
              let: { curse: "$_id" },
              pipeline: [
                { $match: { $expr: { $eq: ["$curse", "$$curse"] } } }
              ],
              as: "integers",
            },

          },
        ],
        as: "curses",
      },
    },
  ])
  console.log("Curses")
  // req.io.emit("www", { content: Curses })
  //const Curses = await Curse.find();

  return res.json(Curses)
  // return res.send({success: true})
};


notesww.getCURSOThemes = async (req, res) => {
  const { ObjectId } = require("mongodb");
  const curse = ObjectId(req.params.id);
  const user = ObjectId(req.params.idw);
  console.log(curse, user)
  const Curseuser = await Curse.aggregate([
    {
      $match: {
        _id: curse,
      },
    },
    {
      $lookup: {
        from: "sections",
        let: { www: "$_id" },
        pipeline: [
          { $match: { $expr: { $eq: ["$curse", "$$www"] } } },
          {
            $lookup: {
              from: "themes",
              let: { www: "$_id" },
              pipeline: [
                { $match: { $expr: { $eq: ["$unidad", "$$www"] } } },
                {
                  $lookup: {
                    from: "tasks",
                    let: { www: "$_id" },
                    pipeline: [
                      {
                        $match: {
                          $expr: {
                            $and: [
                              { $eq: ["$theme", "$$www"] },
                              {
                                $eq: ["$user", user],
                              },
                            ]
                          }
                        }
                      }
                    ],
                    as: "usertask",
                  },
                },
                {
                  $lookup: {
                    from: "tasks",
                    let: { www: "$_id", usser: "$user" },
                    pipeline: [
                      {
                        $match: {
                          $expr: {
                            $and: [
                              { $eq: ["$theme", "$$www"] },
                              {
                                $eq: ["$user", "$$usser"],
                              },
                            ]
                          }
                        }
                      }
                    ],
                    as: "usertaskteacher",
                  },
                }
              ],
              as: "temas",
            },
          },
        ],
        as: "unidades",
      },
    },
    {
      $lookup: {
        from: "sections",
        let: { www: "$codigo" },
        pipeline: [
          { $match: { $expr: { $eq: ["$codecurse", "$$www"] } } },
          {
            $lookup: {
              from: "themes",
              let: { www: "$_id" },
              pipeline: [
                { $match: { $expr: { $eq: ["$unidad", "$$www"] } } },
              ],
              as: "temascopy",
            },
          },
        ],
        as: "unidadescopy",
      },
    },
    {
      $lookup: {
        from: "filecurses",
        let: { www: "$_id" },
        pipeline: [
          { $match: { $expr: { $eq: ["$curse", "$$www"] } } },
        ],
        as: "archivos",
      },
    },
  ]);
  // console.log(Curseuser);
  return res.json(Curseuser);
}

notesww.getCURSOstd = async (req, res) => {
  const { ObjectId } = require("mongodb");
  const id = ObjectId(req.params.id);
  const user = ObjectId(id)
  const integers = await Curse.aggregate([
    {
      $match: {
        $expr: { $and: [{ $eq: ["$user", user] }, { $eq: ["$show", "true"] }] }

      },
    },
    {
      $lookup: {
        from: "users",
        let: { www: "$userteach" },
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
        ],
        as: "userw",
      },
    },
    {
      $lookup: {
        from: "curses",
        let: { ww: "$curse" },
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$ww"] } } },
        ],
        as: "cursse",
      },
    },
  ]);
  console.log(integers);
  return res.json(integers);
}

notesww.getCURSOrefresh = async (req, res) => {
  const note = await Curse.find({
    _id: req.params.id,
    category: req.params.categ,
  });
  res.json(note);
};

notesww.deleteU = async (req, res) => {
  await Integer.findByIdAndDelete(req.params.id);
  res.json("Note Deleted");
};

notesww.updateU = async (req, res) => {
  if (req.files) {
    const note = await Curse.findById(req.params.id);
    const file = note.img;

    try { fs.unlinkSync("files/asignature/" + file); } catch (err) { console.error(err); }

    const myFile = req.files.foto;
    myFile.mv(`files/asignature/${req.params.id + "_" + myFile.name}`);
    const nEw = {
      img: req.params.id + "_" + myFile.name,
      title: req.body.title,
      description: req.body.description,
    };
    await Curse.findByIdAndUpdate(req.params.id, nEw);
  } else {
    const nEw = {
      title: req.body.title,
      description: req.body.description,
    };
    await Curse.findByIdAndUpdate(req.params.id, nEw);
  }

  res.json("Note Updated");
};

module.exports = notesww;
