const Pdf = require('../models/Pdf');
const cloudinary = require('../cloudinary');

// Subir un nuevo PDF a Cloudinary
exports.uploadPdf = async (req, res) => {
  try {
    const { titulo } = req.body;
    if (!req.file || !titulo) {
      return res.status(400).json({ error: 'El archivo PDF y el título son requeridos' });
    }

    // Subir el archivo a Cloudinary usando un buffer (porque estamos usando memoryStorage)
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: 'raw' }, // Especifica que el recurso es un archivo PDF
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(req.file.buffer); // Usar el buffer en lugar de la ruta del archivo
    });

    // Generar una URL firmada para descargar el PDF
    const pdfSignedUrl = cloudinary.utils.sign_url(result.secure_url, {
      type: 'authenticated',
      expires_at: Math.floor(Date.now() / 1000) + 60 * 60, // Expira en 1 hora
    });

    // Guardar la URL firmada del PDF y el título en la base de datos
    const newPdf = await Pdf.create({
      titulo,
      pdf_path: pdfSignedUrl // Guardamos la URL firmada
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
