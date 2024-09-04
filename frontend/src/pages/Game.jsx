import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Navegar a la página anterior
  };

  return (
    <div className="bg-blue-500 text-white min-h-screen font-sans overflow-x-hidden"> {/* Asegura que no haya scroll horizontal */}
      {/* Header */}
      <header className="bg-yellow-400 p-4 flex flex-col md:flex-row justify-between items-center w-full max-w-full">
        <a href="#" className="text-red-600">Newsletter</a>
        <nav className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-blue-800">APPS</a>
          <a href="#" className="text-blue-800">HELP</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="bg-yellow-300 p-4 w-full max-w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 w-full max-w-full">
          <button className="bg-blue-800 text-white px-4 py-2 mb-4 md:mb-0">PARENTS</button>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full max-w-full text-center">
            <button className="bg-blue-400 text-white px-4 py-2">NEW SHOW</button>
            <span className="text-black text-center md:text-left w-full max-w-full">
              Creative problem-solving is fun with "Lyla in the Loop," a new show for kids ages 4-8.{' '}
              <a href="#" className="text-blue-800">Learn More</a>
            </span>
          </div>
        </div>

        <div className="bg-yellow-400 p-4 w-full max-w-full">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 justify-center sm:justify-start w-full max-w-full">
            <div className="bg-blue-800 text-white p-4 rounded-full text-center font-comic font-bold text-3xl">ABC kids learning</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">JUEGOS</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 w-full max-w-full">
            <div className="relative w-full max-w-full">
              {/* Ajusta la miniatura del nuevo juego */}
              <Link to="/game-player/1">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl w-full max-w-full">
                  <img src="/miniaturajuego.png" alt="New Game" className="w-full h-full object-cover" />
                  <span className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1">NUEVO</span>
                </div>
              </Link>
            </div>
            {[2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl w-full max-w-full">
                <img src={`https://placehold.co/180x120`} alt={`Game ${num}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0 w-full max-w-full">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-full">
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 overflow-x-auto w-full max-w-full">
              <button className="bg-blue-800 text-white px-2 py-1 rounded-full">TODOS LOS ESPECTÁCULOS</button>
              <div className="flex space-x-2 overflow-x-auto w-full max-w-full">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <img key={num} src={`https://placehold.co/40x40`} alt={`Character ${num}`} className="w-10 h-10 rounded-full" />
                ))}
              </div>
              <button className="bg-blue-800 text-white px-2 py-1 rounded-full">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Games Sections */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full max-w-full">
        <GameSection title="New Games" color="bg-cyan-500" moreGames="35 More New Games" />
        <GameSection title="Popular Games" color="bg-pink-500" moreGames="114 More Popular Games" />
        <GameSection title="Summer Games" color="bg-yellow-500" moreGames="27 More Summer Games" />
        <GameSection title="Reading Games" color="bg-pink-500" moreGames="28 More Reading Games" />
        <GameSection title="Nature Games" color="bg-cyan-500" moreGames="71 More Nature Games" />
        <MoreTopics />
      </section>

      {/* Botón para volver atrás */}
      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-xl font-comic py-2 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      {/* Footer */}
      <footer className="bg-blue-800 text-center text-white p-4 w-full max-w-full">
        <div className="text-black">
          Política de privacidad | Términos de uso | pbskids.org © 2024
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
    <h2 className="text-xl md:text-2xl font-bold">More Topics</h2>
    <div className="grid grid-cols-1 gap-2 mt-2 w-full max-w-full">
      {["Space Games", "ABC Games", "Shapes Games", "Play Together Games", "Engineering Games", "Spanish Games"].map((topic) => (
        <button key={topic} className="bg-teal-600 text-white px-4 py-2 text-sm md:text-base w-full max-w-full">{topic}</button>
      ))}
    </div>
    <a href="#" className="text-white">24 More Topics</a>
  </div>
);

export default Game;
