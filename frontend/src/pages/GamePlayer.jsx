import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fondoJuego from '../../public/fondojuego.jpg';
import hoverSound from '../assets/sound/soundgame.mp3';
import winnerSound from '../assets/sound/soundwinner.mp3';

const GamePlayer = () => {
  const { id } = useParams(); // Obtén el id del juego desde la URL
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [numbers, setNumbers] = useState(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  const [score, setScore] = useState(0); // Estado para el juego 2
  const [currentNumber, setCurrentNumber] = useState(1); // Estado para el número objetivo en el juego 2
  const [bubbles, setBubbles] = useState([]); // Burbujas del juego 2
  const [gameOver, setGameOver] = useState(false); // Estado de fin de juego para el juego 2

  // Lógica para el juego 2: Generar burbujas
  useEffect(() => {
    if (id === '2' && !gameOver) {
      const interval = setInterval(() => {
        setBubbles(prevBubbles => [
          ...prevBubbles,
          {
            id: Math.random(),
            number: Math.floor(Math.random() * 10) + 1,
            x: Math.random() * 80 + 10,
            y: 100
          }
        ]);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [gameOver, id]);

  // Lógica para el juego 2: Mover las burbujas
  useEffect(() => {
    if (id === '2' && !gameOver) {
      const interval = setInterval(() => {
        setBubbles(prevBubbles =>
          prevBubbles
            .map(bubble => ({
              ...bubble,
              y: bubble.y - 1,
            }))
            .filter(bubble => bubble.y > 0)
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [gameOver, id]);

  const handleBubbleClick = (clickedNumber) => {
    if (clickedNumber === currentNumber) {
      setScore(score + 1);
      setCurrentNumber(currentNumber === 10 ? 1 : currentNumber + 1);
      setBubbles(bubbles.filter(bubble => bubble.number !== clickedNumber));
    } else {
      setGameOver(true);
    }
  };

  const handleNumberClick = (number) => {
    if (id === '1') {
      // Lógica del Juego 1
    } 
  };

  const checkOrder = () => {
    if (numbers.join('') === '12345678910') {
      playWinnerSound();
      setShowModal(true);
    } else {
      alert('Ups, algo no está bien. ¡Inténtalo de nuevo!');
    }
  };

  const playSound = () => {
    const audio = new Audio(hoverSound);
    audio.play();
  };

  const playWinnerSound = () => {
    const audio = new Audio(winnerSound);
    audio.play();
  };

  const handleRestart = () => {
    if (id === '1') {
      setShowModal(false);
      setNumbers(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
      setSelectedNumber(null);
    } else {
      setScore(0);
      setCurrentNumber(1);
      setBubbles([]);
      setGameOver(false);
    }
  };

  const handleBack = () => {
    navigate('/game');
  };

  return (
    <div
      className="font-sans min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${fondoJuego})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-purple-800 mb-6 sm:mb-8 text-center">
        {id === '1' ? 'Juego 1: ¡Organiza los números!' : 'Juego 2: ¡Burbujas Numéricas!'}
      </h2>

      <main className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-4xl mt-8 mx-4">
        {/* Lógica del juego dependiendo del id */}
        {id === '1' ? (
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-purple-800 mb-6 sm:mb-8">
              ¡Organiza los números del 1 al 10!
            </h1>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {numbers.map((number, index) => (
                <div
                  key={index}
                  onClick={() => handleNumberClick(number)}
                  onMouseEnter={playSound}
                  className={`bg-white text-lg sm:text-2xl font-comic-neue font-regular text-blue-800 p-2 sm:p-4 rounded-full shadow-lg cursor-pointer transform transition duration-300 hover:scale-110 ${
                    selectedNumber === number ? 'bg-yellow-300' : ''
                  }`}
                >
                  {number}
                </div>
              ))}
            </div>
            <button
              onClick={checkOrder}
              className="bg-green-500 text-white text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              Verificar Orden
            </button>
          </div>
        ) : (
          <div className="relative h-screen">
            {/* Implementación del Juego 2 */}
            <div className="absolute top-4 left-4 text-2xl font-bold">
              Puntos: {score}
            </div>
            <div className="absolute top-4 right-4 text-2xl font-bold">
              Busca el: {currentNumber}
            </div>
            {bubbles.map(bubble => (
              <button
                key={bubble.id}
                className="absolute w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center text-2xl font-bold cursor-pointer transition-transform hover:scale-110"
                style={{
                  left: `${bubble.x}%`,
                  bottom: `${bubble.y}%`
                }}
                onClick={() => handleBubbleClick(bubble.number)}
              >
                {bubble.number}
              </button>
            ))}
          </div>
        )}
      </main>

      {/* Botón para volver atrás */}
      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-lg sm:text-xl py-2 sm:py-3 px-4 sm:px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      {/* Modal para jugar de nuevo */}
      {showModal && id === '1' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center mx-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">¡Ganaste! 🎉</h2>
            <p className="mb-4">¿Quieres jugar de nuevo?</p>
            <button
              onClick={handleRestart}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Jugar de Nuevo
            </button>
          </div>
        </div>
      )}

      {/* Modal para juego 2 */}
      {gameOver && id === '2' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center mx-4">
            <p className="text-xl font-bold">¡Juego terminado! 🎉</p>
            <p className="text-lg">Puntuación final: {score}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleRestart}
            >
              Jugar de nuevo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Función para desordenar los números
function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default GamePlayer;
