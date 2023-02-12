const Flit = require("../models/Flit");
const User = require("../models/User");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

// exportar modelo de flit
exports.getFlits = async (req, res, next) => {
  try {
    const flits = await Flit.find()
      .populate("id_user", {
        name: 1,
        avatar: 1,
      })
      .sort({ createdAt: -1 });
    res.status(200).json({
      successMessage: "Lista de flits obtenida",
      flits: flits,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.createFlit = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(
      "Validación fallida, los datos introducidos no son válidos."
    );
    // 422 = error de validación
    error.statusCode = 422;
    throw error;
  }
  const message = req.body.message;
  const id_user = req.body.id_user;
  const author = req.body.author;
  const flit = new Flit({
    id_user: id_user,
    message: message,
  });
  // aquí se crea el flit en la base de datos
  try {
    const savedFlit = await flit.save();
    const flitCreator = await User.findById(id_user);
    console.log(flitCreator);
    console.log(savedFlit);
    flitCreator.flits.push(savedFlit);
    const creator = await flitCreator.save();
    res.status(201).json({
      successMessage: "Flit creado",
      flit: savedFlit,
      creator: { _id: creator._id, name: creator.name },
    });
  } catch (error) {
    if (error.statusCode) {
      // 500 = error de servidor
      error.statusCode = 500;
    }
    // como el código es asíncrono, mandamos el error al próximo middleware
    next(error);
  }
};

exports.getFlit = async (req, res, next) => {
  const flitId = req.params.flitId;
  try {
    if (!mongoose.Types.ObjectId.isValid(flitId)) {
      const error = new Error("No se pudo encontrar el flit.");
      error.statusCode = 404;
      throw error;
    }
    const flit = await Flit.findById(flitId);
    console.log(flit);
    res.status(200).json({ successMessage: "Flit obtenido.", flit: flit });
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
