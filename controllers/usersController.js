// Función para obtener usuarios (solo un ejemplo básico)
const getUsers = (req, res) => {
    res.send('Obteniendo usuarios...');
  };
  
  // Función para crear un nuevo usuario
  const createUser = (req, res) => {
    res.send('Usuario creado.');
  };
  
  module.exports = {
    getUsers,
    createUser
  };
  