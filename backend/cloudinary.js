const cloudinary = require('cloudinary').v2;

// Configurar Cloudinary con tus credenciales
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Coloca aquí tu Cloud Name
  api_key: process.env.CLOUDINARY_API_KEY, // Coloca aquí tu API Key
  api_secret: process.env.CLOUDINARY_API_SECRET, // Coloca aquí tu API Secret
});

module.exports = cloudinary;
