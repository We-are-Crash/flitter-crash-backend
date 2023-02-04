"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//definir esquema de tweet

const flitSchema = new Schema(
  {
    id_user: { type: Number, index: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    message: { type: String, required: true, index: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flit", flitSchema);
