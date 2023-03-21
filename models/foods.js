const mongoose = require("mongoose")

const Schema = mongoose.Schema
const comida = new Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
})

const Foods = mongoose.model('Food',comida)
module.exports = {Foods}