const Pdf = require('../models/Pdf');
const path = require('path');

// Subir un nuevo PDF
exports.uploadPdf = async (req, res) => {
  try {
    const { titulo } = req.body;
    if (!req.file || !titulo) {
      return res.status(400).json({ error: 'El archivo PDF y el título son requeridos' });
    }

    // Guardar la ruta del PDF y el título en la base de datos
    const newPdf = await Pdf.create({
      titulo,
      pdf_path: `/uploads/pdf/${req.file.filename}`
    });

    res.status(201).json(newPdf);
  } catch (err) {
    console.error('Error al subir el PDF:', err);
    res.status(500).json({ error: 'Error interno al subir el PDF' });
  }
};

// Obtener todos los PDFs
exports.getPdfs = async (req, res) => {
  try {
    const pdfs = await Pdf.findAll();
    res.status(200).json(pdfs);
  } catch (err) {
    console.error('Error al obtener los PDFs:', err);
    res.status(500).json({ error: 'Error al obtener los PDFs' });
  }
};
