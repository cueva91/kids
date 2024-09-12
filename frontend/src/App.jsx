import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Implementar lazy loading para las páginas
const Home = lazy(() => import('./pages/Home'));
const Video = lazy(() => import('./pages/Video'));
const Coloring = lazy(() => import('./pages/Coloring'));
const Game = lazy(() => import('./pages/Game'));
const VideoPlayer = lazy(() => import('./pages/VideoPlayer'));
const UploadVideo = lazy(() => import('./pages/UploadVideo'));
const GamePlayer = lazy(() => import('./pages/GamePlayer'));
const GamePlayer2 = lazy(() => import('./pages/GamePlayer2'));

import './index.css';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-purple-900 min-h-screen">
          {/* Suspense envuelve todas las rutas para manejar la carga de componentes */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video" element={<Video />} />
              <Route path="/coloring" element={<Coloring />} />
              <Route path="/game" element={<Game />} />
              <Route path="/upload-video" element={<UploadVideo />} />
              <Route path="/video-player/:videoUrl" element={<VideoPlayer />} />
              <Route path="/game-player/:id" element={<GamePlayer />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;

