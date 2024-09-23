import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Loading from './components/Loading';  // Importa el componente de carga

// Implementar lazy loading para las páginas
const Home = lazy(() => import('./pages/Home'));
const Video = lazy(() => import('./pages/Video'));
const Coloring = lazy(() => import('./pages/Coloring'));
const Stories = lazy(() => import('./pages/Stories'));
const Game = lazy(() => import('./pages/Game'));
const VideoPlayer = lazy(() => import('./pages/VideoPlayer'));
const UploadVideo = lazy(() => import('./pages/UploadVideo'));
const UploadPdf = lazy(() => import('./pages/UploadPdf'));
const GamePlayer = lazy(() => import('./pages/GamePlayer'));

import './index.css';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-purple-900 min-h-screen">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video" element={<Video />} />
              <Route path="/coloring" element={<Coloring />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/game" element={<Game />} />
              <Route path="/upload-video" element={<UploadVideo />} />
              <Route path="/upload-pdf" element={<UploadPdf />} />
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
