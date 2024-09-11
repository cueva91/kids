import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';

const VideoPlayer = () => {
  const { videoUrl } = useParams();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://kids-nine.vercel.app/api/videos');
        const data = await response.json();
        const sortedVideos = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Ordenar por fecha de creación
        setVideos(sortedVideos);
      } catch (error) {
        console.error('Error al cargar los videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const extractThumbnail = (url) => {
    const videoId = url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  const handleBack = () => {
    navigate('/video'); // Navegar a la vista de videos
  };

  const handleThumbnailClick = (videoUrl) => {
    navigate(`/video-player/${encodeURIComponent(videoUrl)}`);
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center">
      <header className="w-full bg-blue-500 p-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0 mt-0">
          <div className="bg-blue-800 text-white p-2 sm:p-4 rounded-full text-center font-comic-neue font-bold text-xl sm:text-3xl">
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

        {/* Carrusel de videos debajo del reproductor */}
        <div className="bg-white p-4 shadow-lg mt-8">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={20}  // Ajustar porcentaje para miniaturas visibles
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} className="absolute z-20 left-2 top-1/2 transform -translate-y-1/2">
                  <img src={leftArrow} alt="Anterior" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="absolute z-20 right-2 top-1/2 transform -translate-y-1/2">
                  <img src={rightArrow} alt="Siguiente" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain" />
                </button>
              )
            }
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer"
                onClick={() => handleThumbnailClick(video.url)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={extractThumbnail(video.url)}
                    alt={`Miniatura del video ${index}`}
                    className="h-24 md:h-32 lg:h-40 object-cover w-full rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </main>

      {/* Botón para volver atrás */}
      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-lg sm:text-xl font-comic-neue font-regular py-2 px-4 sm:px-8 mt-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
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
