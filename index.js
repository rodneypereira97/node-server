const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('./models/index'); // 👈 ESTE ES EL CORRECTO
const Tarea = require('./models/tarea'); // Importa el modelo después de sequelize

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/tareas', require('./routes/tareas.routes'));

// Sincronizar base de datos
sequelize.sync({ force: false })
  .then(() => console.log('✅ Base de datos sincronizada'))
  .catch(err => console.error('❌ Error al sincronizar DB', err));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
