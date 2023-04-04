const {validationResult} = require("express-validator");

const validarCheck = (req, res, next) =>{
    const err = validationResult(req);
    if (err.isEmpty()) {
        next();
    } else {
       console.log(err) 
       res.status(501).json(err);
    }  
}

module.exports = {validarCheck}