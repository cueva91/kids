const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const videoRoutes = require('./routes/VideoRoutes');
const pdfRoutes = require('./routes/PdfRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS
const allowedOrigins = ['https://abckidslearning.com', 'https://otro-dominio.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(bodyParser.json());

// Middleware para servir archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/api/videos', videoRoutes);
app.use('/api/pdf', pdfRoutes);

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => console.log('Error al sincronizar base de datos:', err));
