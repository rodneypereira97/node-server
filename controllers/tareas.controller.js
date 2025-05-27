const Tarea = require('../models/tarea');

// Crear una tarea
exports.crearTarea = async (req, res) => {
  try {
    const tarea = await Tarea.create(req.body);
    res.status(201).json(tarea);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear tarea' });
  }
};

// Obtener todas las tareas
exports.obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
};

// Obtener una tarea por ID
exports.obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tarea' });
  }
};

// Actualizar tarea
exports.actualizarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    await tarea.update(req.body);
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar tarea' });
  }
};

// Eliminar tarea
exports.eliminarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    await tarea.destroy();
    res.json({ mensaje: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
};
