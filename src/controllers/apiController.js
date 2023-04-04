const {Foods} = require("../models/foods");
const {validationResult} = require("express-validator");

module.exports = {

    async verComidas (req, res) {
        const foods = await Foods.find();
        console.log(foods);
        res.status(200).json({foods});
    },

    async verComidaPorId (req, res) {
        const food = await Foods.findById(req.params.id);
        console.log(food);
        res.status(200).json({food});
    },

    async buscarComida (req, res) {
        const foods = await Foods.findOne({tipo: req.params.tipo});
        console.log(foods);
        res.status(200).json({foods});
    },

    async guardarComida(req, res) {
        try {
            const foods = new Foods(req.body);
            await foods.save();
            console.log(foods);
            res.status(201).json({foods});
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        } 
    },

    async editarLaComida (req, res) {
        try {
            await Foods.findByIdAndUpdate(req.params.id,req.body);
            console.log("comida editada");
            res.status(201).json(req.body);
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        }
    },

    async editarLaComidaPorTipo (req, res) {
        try { 
            await Foods.findOneAndUpdate({tipo: req.params.tipo},req.body);
            console.log("comida editada");
            res.status(201).json(req.body);
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        }
    },

    async eliminarComida (req, res) {
        const foods = await Foods.findByIdAndDelete(req.params.id);
        console.log({msg: "adios comida", foods});
        res.status(200).json({msg: "adios comida", foods});
    },

    async eliminarComidaPorTipo (req, res) {
        const foods = await Foods.findOneAndDelete({tipo: req.params.tipo});
        console.log({msg: "adios comida", foods});
        res.status(200).json({msg: "adios comida", foods});
    },
}