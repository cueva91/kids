const Pdf = require('../models/Pdf');
const cloudinary = require('../cloudinary');
const axios = require('axios');

// Subir un nuevo PDF a Cloudinary con validación de reCAPTCHA
exports.uploadPdf = async (req, res) => {
  try {
    const { titulo, captchaToken } = req.body;

    // Validar que el archivo PDF, el título y el token de CAPTCHA estén presentes
    if (!req.file || !titulo || !captchaToken) {
      return res.status(400).json({ error: 'El archivo PDF, el título y el CAPTCHA son requeridos' });
    }

    // Verificar el token de reCAPTCHA con la API de Google
    const captchaSecret = '6Ley008qAAAAALItOtqW6tQrvVJXGLic_3hy_Rv0'; // Reemplaza con tu clave secreta de reCAPTCHA
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${captchaToken}`;

    const captchaVerification = await axios.post(verificationUrl);

    if (!captchaVerification.data.success) {
      return res.status(400).json({ error: 'Fallo la verificación de reCAPTCHA' });
    }

    // Subir el archivo a Cloudinary usando un buffer (porque estamos usando memoryStorage)
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { 
          resource_type: 'raw', 
          format: 'pdf',          // Forzar que el formato sea PDF
          access_mode: 'public'   // Asegura que el archivo sea accesible públicamente
        }, 
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(req.file.buffer);
    });

    // Guardar la URL del PDF y el título en la base de datos
    const newPdf = await Pdf.create({
      titulo,
      pdf_path: result.secure_url // Guardamos la URL segura proporcionada por Cloudinary
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
