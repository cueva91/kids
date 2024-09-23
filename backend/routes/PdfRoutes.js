const express = require('express');
const { uploadPdf, getPdfs } = require('../controllers/PdfController');
const multer = require('multer');
const router = express.Router();

// Reutiliza el middleware de multer desde tu archivo `index.js`
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/pdf');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.pdf');
  }
});

const upload = multer({ storage: storage });

// Ruta para subir el PDF, asegurándote de que `upload.single('pdf')` se utiliza para procesar el archivo
router.post('/', upload.single('pdf'), uploadPdf);

// Ruta para obtener todos los PDFs
router.get('/', getPdfs);

module.exports = router;
