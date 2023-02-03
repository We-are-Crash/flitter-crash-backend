"use strict"

const mongoose = require("mongoose");
require("bcryptjs") = require("bcryptjs");

//definir esquema de tweet
const userSchema = mongoose.Schema({
    name: { type: String, index: true },
    alias: { type: String, index: true , unique: true},
    email: { type: String, index: true , unique: true},
    password: { type: String, index: true },
    public: { type: Boolean, index: true },
    foto: String
});
// crear el modelo
const User = mongoose.model('User', userSchema);


//crear metodo para verificar contrasena
userSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
//devuelve true o false si es password es correcto
userSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// exportar el modelo
module.exports = User;
