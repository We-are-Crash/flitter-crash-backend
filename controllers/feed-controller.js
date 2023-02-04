const Flit = require("../models/Flit");

// exportar modelo de fleet (temporal, con dummy data)
exports.getFlits = (req, res, next) => {
  Flit.find()
    .then((flits) => {
      res.status(200).json({
        successMessage: "Lista de flits obtenida",
        flits: flits,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // res.status(200).json({
  //   id: 1,
  //   id_user: 1,
  //   timestamp: "2023-02-01T19:23:32.547Z",
  //   message: "hello world",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
  // });
};

exports.createFlit = (req, res, next) => {
  const message = req.body.message;
  const id_user = req.body.id_user;
  const flit = new Flit({
    id_user: id_user,
    message: message,
  });
  // aquí se crea el flit en la base de datos
  flit
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        successMessage: "Fleet creado",
        flit: {
          result,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
