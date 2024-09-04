import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const VideoPlayer = () => {
  const { videoUrl } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/video'); // Navegar a la vista de videos
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center">
      <header className="w-full bg-blue-500 p-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0 mt-0">
          <div className="bg-blue-800 text-white p-2 sm:p-4 rounded-full text-center font-comic font-bold text-xl sm:text-3xl">
            ABC kids learning
          </div>
          <div className="flex space-x-4 text-white">
            <Link to="/game" className="flex items-center space-x-1 hover:underline text-sm sm:text-base">
              <i className="fas fa-gamepad"></i>
              <span>JUEGOS</span>
            </Link>
            <Link to="/video" className="flex items-center space-x-1 hover:underline text-sm sm:text-base">
              <i className="fas fa-video"></i>
              <span>VIDEOS</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative w-full max-w-4xl mt-8 px-4 sm:px-0">
        {/* Contenedor con marco infantil y ajuste de tamaño */}
        <div className="relative p-4 bg-white rounded-lg shadow-lg border-8 border-pink-500 w-full max-w-3xl mx-auto">
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={decodeURIComponent(videoUrl)}
              title="Video Player"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-md"
            ></iframe>
          </div>
        </div>
      </main>

      {/* Botón para volver atrás */}
      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-lg sm:text-xl font-comic py-2 px-4 sm:px-8 mt-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      <footer className="w-full bg-blue-800 text-white mt-14 py-4">
        <div className="flex justify-center space-x-4 mt-4 flex-wrap">
          <a href="#" className="hover:underline">Política de privacidad</a>
          <a href="#" className="hover:underline">Términos de uso</a>
        </div>
        <p className="text-center mt-4">pbskids.org © 2024</p>
      </footer>
    </div>
  );
};

export default VideoPlayer;
