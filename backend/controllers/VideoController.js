const Video = require('../models/Video');
const axios = require('axios');

exports.createVideo = async (req, res) => {
  try {
    const { url, title, captchaToken } = req.body; // Asegúrate de recibir el token de CAPTCHA

    if (!url || !title || !captchaToken) {
      return res.status(400).json({ error: 'El URL, el título y el token de CAPTCHA son requeridos' });
    }

    // Verificar el token de reCAPTCHA con la API de Google
    const captchaSecret = '6Ley008qAAAAALItOtqW6tQrvVJXGLic_3hy_Rv0';  // Reemplaza con tu clave secreta de reCAPTCHA
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${captchaToken}`;

    // Hacemos la petición a la API de Google para verificar el CAPTCHA
    const captchaVerification = await axios.post(verificationUrl);

    if (!captchaVerification.data.success) {
      return res.status(400).json({ error: 'Fallo la verificación de reCAPTCHA' });
    }

    // Si el CAPTCHA es válido, crea el nuevo video
    const newVideo = await Video.create({ url, title });
    res.status(201).json(newVideo);

  } catch (err) {
    console.error('Error al crear el video:', err);
    res.status(500).json({ error: 'Error interno al crear el video' });
  }
};

exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};
