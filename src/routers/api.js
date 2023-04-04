const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { validarID } = require('../middleware/validarID');
const {validarTipo} = require('../middleware/validarTipo')
const checks = require('../middleware/checks');
const {validarCheck} = require('../middleware/validarChecks');

router.get('/ver',apiController.verComidas);
router.get('/ver/:id',validarID ,apiController.verComidaPorId);
router.get('/buscar/:tipo',validarTipo ,apiController.buscarComida);
router.get('/buscador',apiController.buscador);
router.post('/crear' ,checks ,validarCheck ,apiController.guardarComida);
router.put('/editar/:id',validarID ,checks ,validarCheck ,apiController.editarLaComida);
router.put('/editartipo/:tipo',validarTipo ,checks ,validarCheck ,apiController.editarLaComidaPorTipo);
router.delete('/eliminar/:id',validarID, apiController.eliminarComida);
router.delete('/eliminartipo/:tipo',validarTipo ,apiController.eliminarComidaPorTipo);

module.exports = router;