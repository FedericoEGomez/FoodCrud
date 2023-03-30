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

    async guardarComida(req, res){
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                const foods = new Foods(req.body);
                await foods.save();
                console.log(foods);
                res.status(201).json({foods});
            } else {
                console.log(err);
                res.status(501).json(err);
            }
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        } 
    },

    async editarLaComida (req, res){
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                await Foods.findByIdAndUpdate(req.params.id,req.body);
                console.log("comida editada");
                res.status(201).json(req.body);
            } else {
               console.log(err) 
               res.status(501).json(err);
            }  
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        }
    },

    async eliminarComida(req, res){
        const foods = await Foods.findByIdAndDelete(req.params.id);
        console.log({msg: "adios comida", foods});
        res.status(200).json({msg: "adios comida", foods});
    }
}