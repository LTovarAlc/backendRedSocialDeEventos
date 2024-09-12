const express = require('express');
const app = express();

// Middleware para manejar los datos JSON en las solicitudes
app.use(express.json());

// Importar las rutas de usuarios
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Servidor corriendo!');
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });