const {Foods} = require("../models/foods")
const validarTipo = async (req, res, next) =>{
    try {
        const team = await Foods.findOne({tipo: req.params.tipo});
        if (team !== null) {
            next()
        } else {
           res.status(500).json({msg: "el tipo es invalido"}) 
        }
    } catch (error) {
        console.log("entre")
        res.status(500).json(error)
    }
}

module.exports = { validarTipo }