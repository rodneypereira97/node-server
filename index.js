const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // <--- Habilita CORS para todas las rutas
app.use(express.json()); // Para parsear JSON

// Rutas
app.use('/tareas', require('./routes/tareas.routes'));

const sequelize = require('./models');
const Tarea = require('./models/tarea');

sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar DB', err));


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

