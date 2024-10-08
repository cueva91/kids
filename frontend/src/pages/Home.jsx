import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const lastGames = [
    {
      title: 'Diferenciar Características de una Persona',
      thumbnail: '/miniaturajuego10.jpg',
      link: '/game-player/10'
    },
    {
      title: 'Pensamiento Matemático',
      thumbnail: '/miniaturajuego9.jpg',
      link: '/game-player/9'
    },
    {
      title: 'Aprendizaje de Inglés',
      thumbnail: '/miniaturajuego8.jpg',
      link: '/game-player/8'
    },
    {
      title: 'Animales Terrestres y Acuáticos',
      thumbnail: '/miniaturajuego7.jpg',
      link: '/game-player/7'
    },
    {
      title: 'Ruleta de Países',
      thumbnail: '/miniaturajuego6.jpg',
      link: '/game-player/6'
    }
  ];

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
        const sortedVideos = data.slice(-9).reverse();
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
      <div className="relative flex flex-col items-center justify-center py-4 md:py-12 overflow-hidden">
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
        <div className="flex flex-col items-center md:flex-row justify-between w-full max-w-7xl mx-auto relative z-10 space-y-4 md:space-y-0">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full md:w-1/2 px-4">
            {videos.slice(0, 4).map((video, index) => (
              <Link key={index} to={`/video-player/${encodeURIComponent(video.url)}`} className="w-full">
                <img
                  src={extractThumbnail(video.url)}
                  alt={`Video educativo ${index + 1}`}
                  className="w-full h-28 md:h-32 object-cover shadow-md transform transition-transform hover:scale-110 hover:shadow-lg border-4 border-white"
                  style={{ aspectRatio: "16/9" }}
                />
                <p className="text-white text-center mt-2 text-xs md:text-base">{video.title}</p>
              </Link>
            ))}
          </div>

          <Link to="/coloring" className="w-full md:w-1/2 flex justify-center">
            <img
              src="imgcolor.png"
              loading="lazy"
              alt="Juego de colorear educativo para niños"
              className="coloring-image w-48 md:w-[80%] border-8 border-white cursor-pointer transition-transform transform hover:scale-105 z-10"
            />
          </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 mt-8">
          <Link to="/game">
            <button className="bg-[#F41971] text-white text-lg md:text-2xl px-4 py-2 md:px-8 md:py-8 transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600 shadow-lg font-comic-neue font-regular">
              🎮 Juegos
            </button>
          </Link>

          <Link to="/coloring">
            <button className="bg-[#F41971] text-white text-lg md:text-2xl px-4 py-2 md:px-8 md:py-8 transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600 shadow-lg font-comic-neue font-regular">
              🎨 Pintar
            </button>
          </Link>

          <Link to="/stories">
            <button className="bg-[#F41971] text-white text-lg md:text-2xl px-4 py-2 md:px-8 md:py-8 transform transition-transform duration-300 hover:scale-110 hover:bg-pink-600 shadow-lg font-comic-neue font-regular">
              📚 Cuentos
            </button>
          </Link>
        </div>
      </div>

      {/* Sección de contenido optimizada */}
      <div className="bg-[#A6EF18] flex flex-col justify-center items-center py-4 md:py-8">
        <div className="text-center mt-4 mb-4 md:mt-8 md:mb-8">
          <div className="text-center mt-2 mb-4 md:mb-8 text-xl md:text-3xl text-blue-500 transform transition duration-700 ease-in-out hover:scale-110 hover:text-[#F41971] hover:rotate-3 hover:skew-y-3 font-comic-neue font-bold">
            🎥 ¡Videos Educativos Impresionantes para Niños!
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
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

      {/* Sección de Juegos */}
      <div className="bg-yellow-500 text-center py-8 md:py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6 font-comic-neue">🆕 Últimos Juegos Agregados</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-1.5">
          {lastGames.map((game, index) => (
            <Link key={index} to={game.link} className="w-36 md:w-44 mx-auto">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-36 md:h-40 object-cover rounded-lg shadow-md transition-transform transform hover:scale-110"
              />
              <p className="mt-1 text-sm md:text-base text-white">{game.title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Nueva Sección Mejorada: Cuentos */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-center py-16 md:py-24 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-comic-neue">📚 ¡Explora los Cuentos!</h2>
          <p className="text-base md:text-xl text-white mb-6 font-light">
            ¡Sumérgete en historias fascinantes y educativas para niños!
          </p>

          {/* Imagen central con efecto hover y clic */}
          <Link to="/stories" className="inline-block transform transition-transform hover:scale-110">
            <img
              src="/cuentos.jpg"
              alt="Historias y Cuentos para Niños"
              className="w-[80%] md:w-[50%] mx-auto rounded-xl shadow-2xl border-8 border-white transition-transform transform hover:rotate-3 hover:scale-105"
            />
          </Link>
        </div>

        {/* Animación decorativa */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-300 rounded-full opacity-40 transform -translate-x-10 -translate-y-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400 rounded-full opacity-40 transform translate-x-10 translate-y-10 animate-pulse"></div>
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
