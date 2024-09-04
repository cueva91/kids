const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const videoRoutes = require('./routes/videoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/videos', videoRoutes);

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync({ force:false })
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Servidor corrieno en el puerto ${PORT}`);
    });
  })
  .catch(err => console.log('Error al sincronizar base de datos:', err));
