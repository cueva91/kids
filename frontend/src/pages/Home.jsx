import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Importa Helmet

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
      <Helmet>
        <title>ABC Kids Learning - Juegos y Videos Educativos</title>
        <meta name="description" content="Disfruta de juegos y videos educativos para niños. ABC Kids Learning ayuda a los niños a aprender con creatividad." />
        <meta name="keywords" content="juegos para niños, videos educativos, aprender jugando, juegos interactivos, creatividad infantil" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="ABC Kids Learning" />
        <link rel="canonical" href="https://www.tusitio.com" />
      </Helmet>

      {/* Sección de encabezado */}
      <div className="bg-teal-600 text-white flex flex-col md:flex-row justify-between items-center p-2 md:px-4 md:py-4">
        <div className="flex flex-col md:flex-row items-center">
          <button className="bg-red-500 px-4 py-2 rounded mb-2 md:mb-0 md:mr-4">Padres</button>
          <div className="text-center md:text-left">
            <button className="bg-blue-500 px-4 py-2 rounded">Nuevo Show Educativo</button>
            <span className="ml-2 text-sm md:text-base block md:inline">
              Resuelve problemas con creatividad con "Lyla en el Loop."{' '}
              <a href="#" className="underline">Aprende Más</a>
            </span>
          </div>
        </div>
      </div>

      {/* Banner optimizado con palabra clave "ABC Kids Learning" */}
      <div className="bg-blue-900 text-white flex justify-center items-center py-4 md:py-6">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-comic-neue font-bold">ABC Kids Learning</div>
        </div>
      </div>

      {/* Sección del banner con abejas, imagen en primer plano y miniaturas de videos */}
      <div className="relative flex flex-col items-center justify-center py-4 h-[22rem] md:h-[38rem] overflow-hidden">
        {/* Imagen de fondo del banner */}
        <img
          src="banner2.jpg"
          loading="lazy"
          alt="Aprendizaje para niños - Fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Abejas animadas */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            src="bee.png"
            alt="Abeja volando en el banner educativo"
            className="bee1 absolute w-10 md:w-16 h-10 md:h-16 top-[15%] md:top-[20%] left-[10%] md:left-[15%] transform scale-x-[-1] z-20"
          />
          <img
            src="bee.png"
            alt="Abeja animada en el banner para niños"
            className="bee3 absolute w-10 md:w-16 h-10 md:h-16 bottom-[20%] md:bottom-[30%] left-[5%] md:left-[10%] transform scale-x-[-1] z-20"
          />
          <img
            src="bee.png"
            alt="Abeja volando para interactuar con niños"
            className="bee2 absolute w-10 md:w-16 h-10 md:h-16 top-[20%] md:top-[30%] right-[20%] md:right-[25%] z-20"
          />
          <img
            src="bee.png"
            alt="Abeja animada en banner interactivo"
            className="bee4 absolute w-10 md:w-16 h-10 md:h-16 bottom-[20%] md:bottom-[30%] right-[5%] md:right-[10%] z-20"
          />
          <img
            src="bee.png"
            alt="Abeja interactiva en sitio web infantil"
            className="bee5 absolute w-10 md:w-16 h-10 md:h-16 top-[10%] md:top-[15%] left-[70%] md:left-[80%] z-20"
          />
        </div>

        {/* Contenedor de imagen de primer plano y miniaturas */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full relative z-10 ml-8 md:ml-16 mr-16">
          {/* Imagen en primer plano */}
          <Link to="/coloring" className="w-full flex justify-center md:w-3/4">
            <img
              src="imgcolor.png"
              loading="lazy"
              alt="Juego de colorear educativo para niños"
              className="coloring-image w-48 md:w-[45rem] border-8 border-white cursor-pointer transition-transform transform hover:scale-105 z-10"
            />
          </Link>

          {/* Miniaturas de videos */}
          <div className="grid grid-cols-2 gap-4 md:w-1/2 px-8">
            {videos.slice(0, 4).map((video, index) => (
              <Link key={index} to={`/video-player/${encodeURIComponent(video.url)}`} className="w-full">
                <img
                  src={extractThumbnail(video.url)}
                  alt={`Video educativo ${index + 1}`}
                  className="w-full h-28 md:h-32 object-cover rounded-lg shadow-md transform transition-transform hover:scale-110 hover:shadow-lg"
                  style={{ aspectRatio: "16/9" }} // Miniaturas alargadas horizontalmente
                />
                <p className="text-white text-center mt-2 text-xs md:text-base">{video.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Botones de JUEGOS y VIDEOS alineados en las esquinas inferiores */}
        <div className="w-full flex justify-between items-end absolute bottom-4 left-0 right-0 px-12 pb-4">
          <Link to="/game">
            <button className="bg-[#F41971] text-white text-lg md:text-2xl px-4 py-2 md:px-8 md:py-8 transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600 shadow-lg font-comic-neue font-regular">
              🎮 Juegos
            </button>
          </Link>

          <Link to="/video">
            <button className="bg-[#F41971] text-white text-lg md:text-2xl px-4 py-2 md:px-8 md:py-8 transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600 shadow-lg font-comic-neue font-regular">
              🎨 Videos
            </button>
          </Link>
        </div>
      </div>

      {/* Sección de contenido optimizada */}
      <div className="bg-[#A6EF18] flex flex-col justify-center items-center py-4 md:py-8">
        <div className="text-center mt-4 mb-4 md:mt-8 md:mb-8">
          <div className="text-center mt-2 mb-4 md:mb-8 text-xl md:text-3xl text-blue-500 transform transition duration-700 ease-in-out hover:scale-110 hover:text-[#F41971] hover:rotate-3 hover:skew-y-3 font-comic-neue font-regular">
            🎥 ¡Videos Educativos Impresionantes para Niños!
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
                    loading="lazy"
                    alt={`Video educativo ${index + 1} para niños`}
                    className="w-full h-20 md:h-28 object-cover"
                  />
                  <div className="mt-2 text-white text-center text-xs md:text-base font-comic-neue font-regular">{video.title}</div>
                </Link>
              </div>
            ))}
            {/* Botón centrado */}
            <div className="col-span-2 md:col-span-3 flex justify-center mt-8 md:mt-14">
              <Link to="/video">
                <button className="bg-blue-500 text-xl md:text-3xl text-white px-16 md:px-36 py-4 md:py-8 rounded transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600 shadow-lg hover:shadow-blue-500 font-comic-neue font-regular">
                  🎥 TODOS LOS VIDEOS
                </button>
              </Link>
            </div>
          </div>

          <Link to="/coloring">
            <div className="bg-white w-full md:w-[30rem] h-[25rem] md:h-[45rem] mt-8 md:ml-24 md:mr-12">
              <img src="sectioncoloring.png" alt="Juegos de colorear para niños" className="w-full h-[25rem] md:h-[45rem]" />
            </div>
          </Link>
        </div>
      </div>

      {/* Footer ajustado para móviles */}
      <footer className="bg-[#A6EF18] text-center py-2 md:py-4">
        <div className="text-sm md:text-base text-black">
          Política de privacidad | Términos de uso | ABC Kids Learning © 2024
        </div>
      </footer>
    </div>
  );
};

export default Home;
