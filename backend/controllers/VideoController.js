const Video = require('../models/Video');

exports.createVideo = async (req, res) => {
  try {
    const { url, title } = req.body;
    if (!url || !title) {
      return res.status(400).json({ error: 'El URL y el título son requeridos' });
    }
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

