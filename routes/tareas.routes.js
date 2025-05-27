const express = require('express');
const router = express.Router();
const controller = require('../controllers/tareas.controller');

router.post('/', controller.crearTarea);
router.get('/', controller.obtenerTareas);
router.get('/:id', controller.obtenerTarea);
router.put('/:id', controller.actualizarTarea);
router.delete('/:id', controller.eliminarTarea);

module.exports = router;
