const express = require('express');
const { uploadPdf, getPdfs } = require('../controllers/PdfController');
const multer = require('multer');

const router = express.Router();

// Ruta para subir PDF
router.post('/', uploadPdf);

// Ruta para obtener todos los PDFs
router.get('/', getPdfs);

module.exports = router;
