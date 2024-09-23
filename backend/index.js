const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const videoRoutes = require('./routes/VideoRoutes');
const pdfRoutes = require('./routes/PdfRoutes');  // Nueva ruta
const multer = require('multer');  // Para gestionar los archivos
const path = require('path');  // Para manejar rutas de archivos

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://abckidslearning.com',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true
}));
app.use(bodyParser.json());

// Configurar la carpeta donde se almacenarán los PDFs
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/pdf');  // Carpeta donde se almacenarán los PDFs
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware para servir archivos estáticos (para acceder a los PDFs desde la web)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/api/videos', videoRoutes);
app.use('/api/pdf', pdfRoutes);  // Nueva ruta para PDFs

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Servidor corrieno en el puerto ${PORT}`);
    });
  })
  .catch(err => console.log('Error al sincronizar base de datos:', err));
