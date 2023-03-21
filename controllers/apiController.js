const {Foods} = require("../models/foods")
const {validationResult} = require("express-validator")

module.exports = {
    async verComida (req, res) {
        const items = await Foods.find()//nos trae todo
        console.log(items)
        res.status(200).json({items})
    },
    async guardarComida(req, res){
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const item = new Foods(req.body)
                await item.save()
                console.log(item)
                res.status(201).json({item})
            } else {
                console.log(err)
                res.status(501).json(err)
            }
        } catch (error) {
            console.log(error)
            res.status(501).json(error)
        } 
    },
    async editarLaComida (req, res){
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await Foods.findByIdAndUpdate(req.params.id,req.body)
                console.log("comida editada")
                res.status(201).json(req.body)
            } else {
               console.log(err) 
               res.status(501).json(err) 
            }  
        } catch (error) {
            console.log(error)
            res.status(501).json(error)
        }
    },
    async eliminarComida(req, res){
        const seleccion = await Foods.findByIdAndDelete(req.params.id)
        console.log({msg: "adios comida", seleccion})
        res.status(200).json({msg: "adios comida", seleccion})
    }
}