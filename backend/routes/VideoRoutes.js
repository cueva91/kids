const express = require('express');
const { createVideo, getVideos } = require('../controllers/VideoController');
const router = express.Router();

router.post('/', createVideo);
router.get('/', getVideos);

module.exports = router;
