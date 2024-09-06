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

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 w-full max-w-full">
            <div className="relative w-full max-w-full">
              <Link to="/game-player/1">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl w-full max-w-full">
                  <img src="/miniaturajuego.png" alt="Nuevo juego educativo" className="w-full h-full object-cover" />
                  <span className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1">NUEVO</span>
                </div>
              </Link>
            </div>
            {[2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl w-full max-w-full">
                <img src={`https://placehold.co/180x120`} alt={`Juego educativo ${num}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0 w-full max-w-full">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-full">
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 overflow-x-auto w-full max-w-full">
              <button className="bg-blue-800 text-white px-2 py-1 rounded-full">TODOS LOS ESPECTÁCULOS EDUCATIVOS</button>
              <div className="flex space-x-2 overflow-x-auto w-full max-w-full">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <img key={num} src={`https://placehold.co/40x40`} alt={`Personaje infantil ${num}`} className="w-10 h-10 rounded-full" />
                ))}
              </div>
              <button className="bg-blue-800 text-white px-2 py-1 rounded-full">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full max-w-full">
        <GameSection title="Juegos Nuevos" color="bg-cyan-500" moreGames="35 más juegos nuevos" />
        <GameSection title="Juegos Populares" color="bg-pink-500" moreGames="114 más juegos populares" />
        <GameSection title="Juegos de Verano" color="bg-yellow-500" moreGames="27 más juegos de verano" />
        <GameSection title="Juegos de Lectura" color="bg-pink-500" moreGames="28 más juegos de lectura" />
        <GameSection title="Juegos de Naturaleza" color="bg-cyan-500" moreGames="71 más juegos de naturaleza" />
        <MoreTopics />
      </section>

      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-xl font-comic-neue font-regular py-2 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
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
        <div key={num} className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl w-full max-w-full">
          <img src={`https://placehold.co/150x100`} alt={`${title} ${num}`} className="w-full h-full object-cover" />
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
