import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Navegar a la página principal
  };

  return (
    <div className="bg-blue-500 text-white min-h-screen font-sans overflow-x-hidden">
      {/* Header optimizado */}
      <header className="bg-yellow-400 p-4 flex flex-col md:flex-row justify-between items-center w-full max-w-full">
        <a href="#" className="text-red-600">Newsletter para padres</a>
        <nav className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-blue-800">APPS educativas</a>
          <a href="#" className="text-blue-800">Ayuda para padres</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="bg-yellow-300 p-4 w-full max-w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 w-full max-w-full">
          <button className="bg-blue-800 text-white px-4 py-2 mb-4 md:mb-0">PARENTS</button>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full max-w-full text-center">
            <button className="bg-blue-400 text-white px-4 py-2">NUEVO SHOW EDUCATIVO</button>
            <span className="text-black text-center md:text-left w-full max-w-full">
              Resolver problemas de forma creativa es divertido con "Lyla en el Bucle," un nuevo show para niños de 4 a 8 años.{' '}
              <a href="#" className="text-blue-800">Aprende más</a>
            </span>
          </div>
        </div>

        <div className="bg-yellow-400 p-4 w-full max-w-full">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 justify-center sm:justify-start w-full max-w-full">
            <div className="bg-blue-800 text-white p-4 rounded-full text-center font-comic-neue font-bold text-3xl">
              ABC Kids Learning
            </div>
            <h1 className="text-3xl sm:text-4xl font-comic-neue font-bold text-center sm:text-left">JUEGOS EDUCATIVOS PARA NIÑOS</h1>
          </div>

          {/* Juegos con miniaturas ajustadas y organizadas */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mt-4 w-full max-w-full">
            {/* Juego 10 (más reciente con la etiqueta "NUEVO") */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/10">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego10.jpg" alt="Juego 10" className="w-full h-auto object-cover" />
                  <span className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1">NUEVO</span>
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Diferenciar Características de una Persona</p>
            </div>

            {/* Juego 9 */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/9">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego9.jpg" alt="Juego 9" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Pensamiento Matemático</p>
            </div>

            {/* Juego 8 */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/8">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego8.jpg" alt="Juego 8" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Aprendizaje de Inglés</p>
            </div>

            {/* Juego 7 */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/7">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego7.jpg" alt="Juego 7" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Animales Terrestres y Acuáticos</p>
            </div>

            {/* Juego 6 */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/6">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego6.jpg" alt="Juego 6" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Ruleta de Países</p>
            </div>

            {/* Juego 5 */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/5">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego5.jpg" alt="Juego 5" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Anagramas Infantiles</p>
            </div>

            {/* Juego 4 */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/4">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego4.jpg" alt="Juego 4" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Sopa de Letras</p>
            </div>

            {/* Juego 3 */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/3">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego3.jpg" alt="Juego 3" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Tablas de Multiplicar</p>
            </div>

            {/* Juego 2 */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/2">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego2.jpg" alt="Juego 2" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Burbujas Numéricas</p>
            </div>

            {/* Juego 1 (más antiguo) */}
            <div className="relative w-full max-w-[140px]">
              <Link to="/game-player/1">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[140px]">
                  <img src="/miniaturajuego.jpg" alt="Juego 1" className="w-full h-auto object-cover" />
                </div>
              </Link>
              <p className="text-center mt-2 text-white">Organiza los Números</p>
            </div>
          </div>
        </div>
      </main>

      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-pink-600 text-white text-xl font-comic-neue font-regular py-2 px-8 rounded-full shadow-lg hover:bg-pink-400 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      <footer className="bg-blue-800 text-center text-white p-4 w-full max-w-full">
        <div className="text-black">
          Política de privacidad | Términos de uso | ABC Kids Learning © 2024
        </div>
      </footer>
    </div>
  );
};

const GameSection = ({ title, color, moreGames }) => (
  <div className={`${color} p-4 w-full max-w-full`}>
    <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
    <div className="grid grid-cols-2 gap-2 mt-2 w-full max-w-full">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl w-full max-w-xs">
          <img src={`https://placehold.co/150x100`} alt={`${title} ${num}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
    <a href="#" className="text-white">{moreGames}</a>
  </div>
);

const MoreTopics = () => (
  <div className="bg-teal-500 p-4 w-full max-w-full">
    <h2 className="text-xl md:text-2xl font-bold">Más Temas Educativos</h2>
    <div className="grid grid-cols-1 gap-2 mt-2 w-full max-w-full">
      {["Juegos Espaciales", "Juegos de ABC", "Juegos de Formas", "Juegos para Jugar Juntos", "Juegos de Ingeniería", "Juegos en Español"].map((topic) => (
        <button key={topic} className="bg-teal-600 text-white px-4 py-2 text-sm md:text-base w-full max-w-full">{topic}</button>
      ))}
    </div>
    <a href="#" className="text-white">24 más temas educativos</a>
  </div>
);

export default Game;
