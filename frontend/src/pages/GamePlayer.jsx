import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondoJuego from '../../public/fondojuego.jpg';
import hoverSound from '../assets/sound/soundgame.mp3';
import winnerSound from '../assets/sound/soundwinner.mp3';

const GamePlayer = () => {
  const [numbers, setNumbers] = useState(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleNumberClick = (number) => {
    // Si ya hay un número seleccionado, intercambia las posiciones
    if (selectedNumber !== null) {
      const newNumbers = [...numbers];
      const fromIndex = newNumbers.indexOf(selectedNumber);
      const toIndex = newNumbers.indexOf(number);

      // Intercambiar los números seleccionados
      [newNumbers[fromIndex], newNumbers[toIndex]] = [newNumbers[toIndex], newNumbers[fromIndex]];
      setNumbers(newNumbers);
      setSelectedNumber(null); // Deseleccionar el número
    } else {
      // Si no hay un número seleccionado, selecciona el número tocado
      setSelectedNumber(number);
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
    setShowModal(false);
    setNumbers(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    setSelectedNumber(null); // Deselecciona cualquier número
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
        ¡Diviértete y Aprende!
      </h2>

      <h3 className="text-3xl sm:text-5xl font-bold text-purple-800 mb-6 sm:mb-8 text-center">
        ¡Toca el numero, despues toca el espacio donde crees que va!
      </h3>
      
      <main className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-4xl mt-8 mx-4">
        <h1 className="text-2xl sm:text-4xl font-black text-purple-800 mb-6 sm:mb-8 font-comic-neue">
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
          className="bg-green-500 text-white text-lg sm:text-xl font-comic-neue font-regular py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Verificar Orden
        </button>
      </main>

      {/* Botón para volver atrás */}
      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-lg sm:text-xl font-comic-neue font-regular py-2 sm:py-3 px-4 sm:px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      {/* Modal para jugar de nuevo */}
      {showModal && (
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
