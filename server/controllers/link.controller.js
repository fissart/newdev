const notesww = {};
const fs = require("fs");
const Link = require("../models/link.model");
const Land = require("../models/cursesourcew")
const Foro = require("../models/foro")
const News = require("../models/new");
// const cursesourcew = require("../models/cursesourcew");

// notesww.getLink = async (req, res) => {
//   const ww = await Link.find({
//     curse: req.params.idcurso,
//   }).sort({ _id: -1 })
//   res.json(ww);
// };


notesww.getLands = async (req, res) => {
  // const ww = await Land.find().sort({ _id: -1 })
  const data = await Land.aggregate([
    {
      $group: {
        _id: "$type",
        notas: { $sum: 1 },
        mencion: { $first: '$mencion' },
        sumacreditos: { "$sum": { $multiply: [1, { $toInt: '$credito' }] } },
        sumanotas: { "$sum": { $multiply: [1, { $toInt: '$nota' }] } },
        total: { "$sum": { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
        records: { $push: "$$ROOT" }
      }
    },
    {
      $lookup: {
        from: "cursesources", let: { ciclo: "$_id", wwwww: "$mencion" },
        pipeline: [
          { $match: { $expr: { $and: [{ $eq: ["$ciclo", "$$ciclo"] }, { $eq: ["$mencion", "$$wwwww"] }] } } },
        ],
        as: "cursesource"
      }
    },
    { $match: { details: { $ne: [] } } },
    { $sort: { "_id": 1 } }
  ])

  res.json(data)
}
notesww.createLand = async (req, res) => {
  console.log(req)
  if (req.files) {
    const myFile = req.files.img
    myFile.mv(`uploads/link/${req.body.curse + "_" + myFile.name}`)
    const newNote = new Land({
      user: req.body.user,
      title: req.body.title,
      codigo: req.body.codigo,
      type: req.body.type,
      img: req.body.curse + "_" + myFile.name,
      blogspot: req.body.blogspot,
      youtube: req.body.youtube,
      instagram: req.body.instagram,
      whatsapp: req.body.whatsapp,
      facebook: req.body.facebook,
      description: req.body.description,
      curse: req.body.curse,
    });
    await newNote.save();
  } else {
    const newNote = new Land({
      user: req.body.user,
      title: req.body.title,
      codigo: req.body.codigo,
      type: req.body.type,
      img: "img",
      blogspot: req.body.blogspot,
      youtube: req.body.youtube,
      instagram: req.body.instagram,
      whatsapp: req.body.whatsapp,
      facebook: req.body.facebook,
      description: req.body.description,
      curse: req.body.curse,
    });
    await newNote.save()
  }
  res.json("Creado correctamente")
}


notesww.deleteLand = async (req, res) => {
  // const note = await Foro.findById(req.params.id);
  // const file = note.file;
  console.log(req.params.id)
  // try {
  //   fs.unlinkSync("files/file/" + file);
  // } catch (err) {
  //   console.error(err);
  // }
  await Land.findByIdAndDelete(req.params.id);
  res.json("Limpiado");
};
// notesww.deleteForo = async (req, res) => {
//   console.log(req.params.id)
//   await Foro.findByIdAndDelete(req.params.id);
//   res.json("Limpiado");
// };

notesww.updateLand = async (req, res) => {
  console.log(req.body);
  // const { link, name } = req.body;
  // console.log(req.params.id, req.body, 'req.body')
  // await Foro.findByIdAndUpdate(req.params.id, req.body)
  res.json("Updated");
}



notesww.getForos = async (req, res) => {
  // const ww = await Land.find().sort({ _id: -1 })
  const data = await Foro.aggregate([
    { $match: { $expr: { $eq: ["$type", "theme"] } } },
    {
      $lookup: {
        from: "foros",
        let: { www: "$_id" },
        pipeline: [
          { $match: { $expr: { $eq: ["$foreign", "$$www"] } } },
          {
            $lookup: {
              from: "foros",
              let: { wwwww: "$_id" },
              pipeline: [
                { $match: { $expr: { $eq: ["$foreign", "$$wwwww"] } } },
                {
                  $lookup: {
                    from: "foros",
                    let: { www: "$_id" },
                    pipeline: [
                      { $match: { $expr: { $eq: ["$foreign", "$$www"] } } },
                      {
                        $lookup: {
                          from: "foros",
                          let: { wwwww: "$_id" },
                          pipeline: [
                            { $match: { $expr: { $eq: ["$foreign", "$$wwwww"] } } },
                          ],
                          as: "comentas",
                        },
                      },
                      { $sort: { "_id": -1 } },
                      {
                        $lookup: {
                          from: "users",
                          let: { usser: "$user" },
                          pipeline: [
                            { $match: { $expr: { $eq: ["$_id", "$$usser"] } } },
                          ],
                          as: "usser",
                        },
                      },
                    ],
                    as: "comentass",
                  },
                },
                { $sort: { "_id": -1 } },
                {
                  $lookup: {
                    from: "users",
                    let: { usser: "$user" },
                    pipeline: [
                      { $match: { $expr: { $eq: ["$_id", "$$usser"] } } },
                    ],
                    as: "usser",
                  },
                },
              ],
              as: "comentas",
            },
          },
          { $sort: { "_id": -1 } },
          {
            $lookup: {
              from: "users",
              let: { usser: "$user" },
              pipeline: [
                { $match: { $expr: { $eq: ["$_id", "$$usser"] } } },
              ],
              as: "usser",
            },
          },
        ],
        as: "comenta",
      },
    },
    {
      $lookup: {
        from: "users",
        let: { ww: "$user" },
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$ww"] } } },
        ],
        as: "usser",
      },
    },
    { $sort: { "_id": -1 } }
  ])
  //    console.log(integers);
  return res.json(data)
}



notesww.createForo = async (req, res) => {
  console.log(req.body)
  const newNote = new Foro({
    title: req.body.title,
    foreign: req.body.foreign,
    user: req.body.user,
    description: req.body.description,
    type: req.body.type,
  });
  await newNote.save()
  res.json("Creado correctamente")
}
notesww.deleteForo = async (req, res) => {
  // const note = await Foro.findById(req.params.id);
  // const file = note.file;
  console.log(req.params.id)
  // try {
  //   fs.unlinkSync("files/file/" + file);
  // } catch (err) {
  //   console.error(err);
  // }
  await Foro.findByIdAndDelete(req.params.id);
  res.json("Limpiado");
};
// notesww.deleteForo = async (req, res) => {
//   console.log(req.params.id)
//   await Foro.findByIdAndDelete(req.params.id);
//   res.json("Limpiado");
// };

notesww.updateForo = async (req, res) => {
  // console.log(req.body);
  // const { link, name } = req.body;
  console.log(req.params.id, req.body, 'req.body')
  await Foro.findByIdAndUpdate(req.params.id, req.body)
  res.json("Actualizado");
}



// notesww.getupdateLink = async (req, res) => {
//   const note = await Link.find({
//     _id: req.params.id,
//   });
//   res.json(note);
// };


notesww.getLinks = async (req, res) => {
  const ww = await Link.find({
    type: req.params.type,
  }).sort({ _id: -1 })
  res.json(ww);
}

notesww.createLink = async (req, res) => {
  console.log(req)
  const newNote = new Link(req.body)
    await newNote.save()
  res.json("Creado correctamente")
}


notesww.updateLink = async (req, res) => {
  // console.log(req.files);
  // console.log(req.body);
  // const { link, name } = req.body;
  // console.log(req.body)

  if (req.files) {
    const note = await Link.findById(req.params.id);
    const file = note.file;
    try {
      fs.unlinkSync("files/link/" + file);
    } catch (err) {
      console.error(err);
    }
    const myFile = req.files.archivo;
    myFile.mv(`files/link/${req.body.curse + "_" + myFile.name}`);

    await Link.findByIdAndUpdate(req.params.id, {
      file: req.body.curse + "_" + myFile.name,
      title: req.body.name,
      description: req.body.detail,
    });
  } else {
    await Link.findByIdAndUpdate(req.params.id, {
      title: req.body.name,
      description: req.body.detail,
    });
  }


  res.json("Actualizado");
};

notesww.deleteLink = async (req, res) => {
  const note = await Link.findById(req.params.id);
  const file = note.file;
  console.log(file);
  try {
    fs.unlinkSync("files/file/" + file);
  } catch (err) {
    console.error(err);
  }
  await Link.findByIdAndDelete(req.params.id);
  res.json("Limpiado");
};




notesww.getNews = async (req, res) => {
  // const ww = await Land.find().sort({ _id: -1 })
  const data = await News.aggregate([
    {
      $lookup: {
        from: "users",
        let: { www: "$user" },
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$www"] } } }
        ],
        as: "user",
      },
    }, {
      $lookup: {
        from: "integers",
        let: { curse: "$_id" },
        pipeline: [
          { $match: { $expr: { $eq: ["$curse", "$$curse"] } } }
        ],
        as: "integer",
      },
    },
  ])
  res.json(data)
}
notesww.createNew = async (req, res) => {
  console.log(req.body)
  const newNote = new News({
    title: req.body.title,
    show: req.body.show,
    user: req.body.user,
    description: req.body.description,
  });
  await newNote.save()
  res.json("Comunicado creado correctamente")
}
notesww.updateNew = async (req, res) => {
  // console.log(req.body);
  // const { link, name } = req.body;
  console.log(req.params.id, req.body, 'req.body')
  await News.findByIdAndUpdate(req.params.id, req.body)
  res.json("Actualizado");
}

notesww.deleteNew = async (req, res) => {
  console.log(req.params.id)
  await News.findByIdAndDelete(req.params.id);
  res.json("Limpiado");
};

module.exports = notesww;
