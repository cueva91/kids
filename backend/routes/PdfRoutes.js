// PdfRoutes.js
const express = require('express');
const { uploadPdf, getPdfs } = require('../controllers/PdfController');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configura multer para almacenar temporalmente los archivos antes de subir a Cloudinary
const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads')); // Carpeta temporal
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Ruta para subir el PDF
router.post('/', upload.single('pdf'), uploadPdf);

// Ruta para obtener todos los PDFs
router.get('/', getPdfs);

module.exports = router;
