const {Foods} = require("../models/foods")
const validarTipo = async (req, res, next) =>{
    try {
        const food = await Foods.findOne({tipo: req.params.tipo});
        if (food !== null) {
            next()
        } else {
           res.status(400).json({msg: "el tipo es invalido"}) 
        }
    } catch (error) {
        console.log("entre")
        res.status(500).json(error)
    }
}

module.exports = { validarTipo }