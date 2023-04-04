const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { validarID } = require('../middleware/validarID');
const {validarTipo} = require('../middleware/validarTipo')
const checks = require('../middleware/checks');
const {validarCheck} = require('../middleware/validarChecks');

router.get('/ver',apiController.verComidas);
router.get('/ver/:id',apiController.verComidaPorId);
router.get('/buscar/:tipo',apiController.buscarComida);
router.post('/crear' ,checks ,validarCheck ,apiController.guardarComida);
router.put('/editar/:id',validarID ,checks ,validarCheck ,apiController.editarLaComida);
router.put('/editartipo/:tipo' ,checks ,validarCheck ,apiController.editarLaComidaPorTipo);
router.delete('/eliminar/:id',validarID, apiController.eliminarComida);
router.delete('/eliminartipo/:tipo' ,apiController.eliminarComidaPorTipo);

module.exports = router;