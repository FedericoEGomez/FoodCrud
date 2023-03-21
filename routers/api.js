const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")
const { validarID } = require("../middleware/validarID")
const {check} = require("express-validator")

// un metodo http - una exprecion - middleware - callback
router.get("/ver",apiController.verComida)
router.post("/crear",[
    check("nombre").not().isEmpty().withMessage("el campo nombre es obligatorio").isLength({max:25,min:3}).withMessage("el campo nombre debe contar con un maximo de 25 caracteres y un minimo de 3"),
    check("precio").not().isEmpty().withMessage("el campo precio es obligatorio"),
    check("descripcion").not().isEmpty().withMessage("el campo descripcion es obligatorio")
],apiController.guardarComida)
router.put("/editar/:id",validarID,[
    check("nombre").not().isEmpty().withMessage("el campo nombre es obligatorio").isLength({max:25,min:3}).withMessage("el campo nombre debe contar con un maximo de 25 caracteres y un minimo de 3"),
    check("precio").not().isEmpty().withMessage("el campo precio es obligatorio"),
    check("descripcion").not().isEmpty().withMessage("el campo descripcion es obligatorio")
], apiController.editarLaComida)
router.delete("/eliminar/:id",validarID, apiController.eliminarComida)

module.exports = router