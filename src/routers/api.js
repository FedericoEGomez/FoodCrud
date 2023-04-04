const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const { validarID } = require("../middleware/validarID");
const checks = require('../middleware/checks');
const {validarCheck} = require('../middleware/validarChecks')

router.get("/ver",apiController.verComidas);
router.post("/crear" ,checks ,validarCheck ,apiController.guardarComida);
router.put("/editar/:id",validarID ,checks ,validarCheck ,apiController.editarLaComida);
router.delete("/eliminar/:id",validarID, apiController.eliminarComida);

module.exports = router;