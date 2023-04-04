const {Foods} = require("../models/foods")
const validarID = async (req, res, next) =>{
    try {
        const food = await Foods.findById(req.params.id)
        if (food !== null) {
            next()
        } else {
           res.status(500).json({msg: "el id es invalido"}) 
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { validarID }