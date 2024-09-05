import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [randomVideo, setRandomVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://kids-nine.vercel.app/api/videos');
        const data = await response.json();
        const sortedVideos = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Ordenar por fecha de creación
        setVideos(sortedVideos);
        setRandomVideo(sortedVideos[Math.floor(Math.random() * sortedVideos.length)]); // Seleccionar un video aleatorio
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
    navigate('/'); // Navegar a la página de inicio o donde prefieras
  };

  const handleThumbnailClick = (videoUrl) => {
    navigate(`/video-player/${encodeURIComponent(videoUrl)}`);
  };

  return (
    <div className="w-full text-white">
      <header className="text-center relative z-20">
        <div className="relative w-full">
          <img 
            src="bannervideo.jpg" 
            alt="Featured Show" 
            className="w-full h-[40vh] md:h-[60vh] lg:h-[85vh] object-cover"
          />

          <div className="absolute top-0 left-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 p-4 z-30 w-full justify-between">
            <div className="flex flex-col items-center md:flex-row md:items-center justify-center w-full md:justify-start md:w-auto">
              <div className="bg-blue-800 text-white p-2 md:p-4 text-xl md:text-3xl rounded-full text-center font-comic-neue font-bold">
                ABC kids learning
              </div>
              <div className="flex space-x-2 justify-center w-full md:ml-4 mb-4 md:mb-0">
                <Link to="/game">
                  <button className="bg-[#db2777] text-white px-2 md:px-4 py-1 md:py-2 rounded-full font-comic-neue font-regular text-sm md:text-base">
                    Juegos
                  </button>
                </Link>
                <Link to="/video">
                  <button className="bg-[#db2777] text-white px-2 md:px-4 py-1 md:py-2 rounded-full font-comic-neue font-regular text-sm md:text-base">
                    Videos
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Foreground Image with Random Video */}
          {randomVideo && (
            <div className="absolute inset-0 flex justify-center items-center z-10 mt-16 md:mt-32">
              <Link to={`/video-player/${encodeURIComponent(randomVideo.url)}`}>
                <img
                  src={extractThumbnail(randomVideo.url)}
                  alt="Random Video"
                  className="coloring-image mt-6 w-[14rem] md:w-[20rem] lg:w-[26rem] border-8 border-white cursor-pointer transition-transform transform hover:scale-105"
                />
              </Link>
            </div>
          )}
        </div>
      </header>

      <section>
        {/* Carousel Section */}
        <div className="bg-white p-4 shadow-lg z-10 relative">
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
                  <img src={leftArrow} alt="left arrow" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="absolute z-20 right-2 top-1/2 transform -translate-y-1/2">
                  <img src={rightArrow} alt="right arrow" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain" />
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
                    alt={`Thumbnail for video ${index}`} 
                    className="h-24 md:h-32 lg:h-40 object-cover w-full rounded-lg" 
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold mt-6 mb-8 font-comic-neue font-regular">TODOS LOS VIDEOS</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-4 md:px-8 lg:px-16 mb-[10rem] md:mb-[15rem] lg:mb-[20rem]">
          {videos.map((video, index) => (
            <div key={index} className="mb-2 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
              <Link to={`/video-player/${encodeURIComponent(video.url)}`}>
                <div className="relative w-full h-28 bg-black rounded-lg overflow-hidden shadow-md">
                  <img
                    src={extractThumbnail(video.url)}
                    alt={`Thumbnail for video ${index}`}
                    className="w-full h-28 md:h-32 lg:h-40 object-cover"
                  />
                </div>
              </Link>
              <p className="mt-2 text-center text-white text-xs md:text-sm font-comic-neue font-regular">{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Botón para volver atrás */}
      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-sm md:text-lg lg:text-xl font-comic-neue font-regular py-2 px-4 md:py-2 md:px-6 lg:py-2 lg:px-8 mt-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      <footer className="text-center py-4 pt-6 bg-green-200">
        <div className='text-black'>
        Política de privacidad  | Términos de uso | pbskids.org © 2024</div> 
      </footer>
    </div>
  );
};

export default Video;
