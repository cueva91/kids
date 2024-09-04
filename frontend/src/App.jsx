import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Coloring from './pages/Coloring';
import Game from './pages/Game';
import VideoPlayer from './pages/VideoPlayer';
import UploadVideo from './pages/UploadVideo';
import GamePlayer from './pages/GamePlayer';

import './index.css';

const App = () => {
  return (
    <Router>
      <div className="bg-purple-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/coloring" element={<Coloring />} />
          <Route path="/game" element={<Game />} />
          <Route path="/upload-video" element={<UploadVideo />} />
          <Route path="/video-player/:videoUrl" element={<VideoPlayer />} />
          {/* Nueva ruta para GamePlayer */}
          <Route path="/game-player/:id" element={<GamePlayer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
