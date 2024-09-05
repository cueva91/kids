import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });

    timeline.to(".bee1", { x: 10, y: -10, duration: 1 })
            .to(".bee1", { x: -10, y: 10, duration: 1 })
            .to(".bee1", { x: 5, y: -5, duration: 1 });

    timeline.to(".bee2", { x: -15, y: 15, duration: 1 })
            .to(".bee2", { x: 15, y: -15, duration: 1 })
            .to(".bee2", { x: -10, y: 10, duration: 1 });

    timeline.to(".bee3", { x: 12, y: 12, duration: 1 })
            .to(".bee3", { x: -12, y: -12, duration: 1 })
            .to(".bee3", { x: 10, y: 10, duration: 1 });

    timeline.to(".bee4", { x: -12, y: 8, duration: 1 })
            .to(".bee4", { x: 12, y: -8, duration: 1 })
            .to(".bee4", { x: -8, y: 12, duration: 1 });

    timeline.to(".bee5", { x: 15, y: -15, duration: 1 })
            .to(".bee5", { x: -15, y: 15, duration: 1 })
            .to(".bee5", { x: 10, y: -10, duration: 1 });

    const fetchVideos = async () => {
      try {
        const response = await fetch('https://kids-nine.vercel.app/api/videos');
        const data = await response.json();
        const sortedVideos = data.slice(-9).reverse(); // Obtener los últimos 9 videos y ordenarlos del más nuevo al más viejo
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

  return (
    <div className="w-full">
      {/* Sección de encabezado */}
      <div className="bg-teal-600 text-white flex flex-col md:flex-row justify-between items-center p-2 md:px-4 md:py-4">
        <div className="flex flex-col md:flex-row items-center">
          <button className="bg-red-500 px-4 py-2 rounded mb-2 md:mb-0 md:mr-4">PARENTS</button>
          <div className="text-center md:text-left">
            <button className="bg-blue-500 px-4 py-2 rounded">NEW SHOW</button>
            <span className="ml-2 text-sm md:text-base block md:inline">
              Creative problem-solving is fun with "Lyla in the Loop."{' '}
              <a href="#" className="underline">Learn More</a>
            </span>
          </div>
        </div>
      </div>

      {/* Banner de PBS KIDS */}
      <div className="bg-blue-900 text-white flex justify-center items-center py-4 md:py-6">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-comic-neue font-bold">ABC kids learning</div>
        </div>
      </div>

      {/* Sección del banner con abejas */}
      <div className="relative flex flex-col items-center justify-center py-4 h-[25rem] md:h-[38rem] overflow-hidden">
        {/* Imagen de fondo del banner */}
        <img
          src="banner2.jpg" // Reemplaza con la ruta de tu imagen de fondo
          alt="Background Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Abejas animadas */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            src="bee.png"
            alt="Flying Bee"
            className="bee1 absolute w-8 md:w-12 h-8 md:h-12 top-[15%] md:top-[20%] left-[10%] md:left-[15%] transform scale-x-[-1] z-20"
          />
          <img
            src="bee.png"
            alt="Flying Bee"
            className="bee3 absolute w-8 md:w-12 h-8 md:h-12 bottom-[20%] md:bottom-[30%] left-[5%] md:left-[10%] transform scale-x-[-1] z-20"
          />
          <img
            src="bee.png"
            alt="Flying Bee"
            className="bee2 absolute w-8 md:w-12 h-8 md:h-12 top-[20%] md:top-[30%] right-[20%] md:right-[25%] z-20"
          />
          <img
            src="bee.png"
            alt="Flying Bee"
            className="bee4 absolute w-8 md:w-12 h-8 md:h-12 bottom-[20%] md:bottom-[30%] right-[5%] md:right-[10%] z-20"
          />
          <img
            src="bee.png"
            alt="Flying Bee"
            className="bee5 absolute w-8 md:w-12 h-8 md:h-12 top-[10%] md:top-[15%] left-[70%] md:left-[80%] z-20"
          />
        </div>

        {/* Imagen en primer plano */}
        <Link to="/coloring">
          <img
            src="imgcolor.png"
            alt="Road Repair show image"
            className="coloring-image w-48 md:w-[30rem] border-8 border-white cursor-pointer transition-transform transform hover:scale-105 mx-auto z-10 relative"
          />
        </Link>

        {/* Botones de JUEGOS y VIDEOS */}
        <div className="flex justify-around w-full mt-4 md:mt-0">
          <Link to="/game">
            <button className="bg-[#F41971] text-white text-lg md:text-2xl px-6 py-4 md:px-8 md:py-8 transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600 shadow-lg font-comic-neue font-regular">
              🎮 JUEGOS
            </button>
          </Link>

          <Link to="/video">
            <button className="bg-[#F41971] text-white text-lg md:text-2xl px-6 py-4 md:px-8 md:py-8 transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600 shadow-lg font-comic-neue font-regular">
              🎨 VIDEOS
            </button>
          </Link>
        </div>
      </div>

      {/* Sección de contenido */}
      <div className="bg-[#A6EF18] flex flex-col justify-center items-center py-4 md:py-8">
        <div className="text-center mt-4 mb-4 md:mt-8 md:mb-8">
          <div className="text-center mt-2 mb-4 md:mb-8 text-xl md:text-3xl text-blue-500 transform transition duration-700 ease-in-out hover:scale-110 hover:text-[#F41971] hover:rotate-3 hover:skew-y-3 font-comic-neue font-regular">
            🎥 Videos impresionantes para niños!
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Miniaturas de video */}
            {videos.map((video, index) => (
              <div key={index} className="relative bg-[#581c87] p-2 rounded">
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
                    NUEVO
                  </div>
                )}
                <Link to={`/video-player/${encodeURIComponent(video.url)}`}>
                  <img
                    src={extractThumbnail(video.url)}
                    alt={`Video ${index + 1}`}
                    className="w-full h-24 md:h-28 object-cover"
                  />
                  <div className="mt-2 text-white text-center text-sm md:text-base font-comic-neue font-regular">{video.title}</div>
                </Link>
              </div>
            ))}
            {/* Botón centrado */}
            <div className="col-span-2 md:col-span-3 flex justify-center mt-8 md:mt-14">
              <Link to="/video">
                <button className="bg-blue-500 text-xl md:text-3xl text-white px-20 md:px-36 py-4 md:py-8 rounded transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600 shadow-lg hover:shadow-blue-500 font-comic-neue font-regular">
                  🎥 TODOS LOS VIDEOS
                </button>
              </Link>
            </div>
          </div>

          <Link to="/coloring">
            <div className="bg-white w-full md:w-[30rem] h-[30rem] md:h-[45rem] mt-8 md:ml-24 md:mr-12">
              <img src="sectioncoloring.png" alt="Neighbor Day" className="w-full h-[30rem] md:h-[45rem]" />
            </div>
          </Link>
        </div>
      </div>

      {/* Footer ajustado para móviles */}
      <footer className="bg-green-100 text-center py-2 md:py-4">
        <div className="text-sm md:text-base text-black">
          Política de privacidad | Términos de uso | pbskids.org © 2024
        </div>
      </footer>
    </div>
  );
};

export default Home;
