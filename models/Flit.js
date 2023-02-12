"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//definir esquema de tweet

const flitSchema = new Schema(
  {
    id_user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true, index: true },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flit", flitSchema);
