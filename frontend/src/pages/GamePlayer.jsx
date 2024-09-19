import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { DndContext, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import fondoJuego from '../../public/fondojuego.jpg';
import hoverSound from '../assets/sound/soundgame.mp3';
import winnerSound from '../assets/sound/soundwinner.mp3';
import { FiClock, FiHeart, FiAward } from 'react-icons/fi';

// Componente Sortable para Juego 1 (Organiza los números)
const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none',
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-br from-blue-300 to-blue-500 text-lg sm:text-2xl font-bold text-white p-2 sm:p-4 rounded-full shadow-lg cursor-pointer"
    >
      {id}
    </motion.div>
  );
};

const GamePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [numbers, setNumbers] = useState(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  const [score, setScore] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [bubbles, setBubbles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(60);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  useEffect(() => {
    if (numbers.join('') === '12345678910') {
      setShowModal(true);
      playSound(winnerSound);
    }
  }, [numbers]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setNumbers((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }

    playSound(hoverSound);
  };

  const handleBubbleClick = (clickedNumber) => {
    if (clickedNumber === currentNumber) {
      setScore(score + 1);
      setCurrentNumber(currentNumber === 10 ? 1 : currentNumber + 1);
      setBubbles(bubbles.filter((bubble) => bubble.number !== clickedNumber));

      if (score + 1 === 15 * level) {
        setLevel((prevLevel) => prevLevel + 1);
        setTimer((prevTimer) => prevTimer + 20);
        setLives((prevLives) => Math.min(prevLives + 1, 3));
      }

      playSound(hoverSound);
    } else {
      setLives((prevLives) => prevLives - 1);
      if (lives === 1) {
        setGameOver(true);
      }
    }
  };

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const handleRestart = () => {
    setShowModal(false);
    setGameOver(false);
    setTimer(60);
    setLives(3);
    setLevel(1);
    setScore(0);
    setCurrentNumber(1);
    setBubbles([]);

    if (id === '1') {
      setNumbers(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    }
  };

  const handleBack = () => {
    navigate('/game');
  };

  return (
    <div
      className="font-sans min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${fondoJuego})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-purple-800 mb-6 sm:mb-8 text-center">
        {id === '10'
          ? 'Juego 10: Diferenciar Características de una Persona'
          : id === '9'
          ? 'Juego 9: Pensamiento Matemático'
          : id === '8'
          ? 'Juego 8: Aprendizaje de Inglés'
          : id === '7'
          ? 'Juego 7: Animales Terrestres y Acuáticos'
          : id === '6'
          ? 'Juego 6: Ruleta de Países'
          : id === '5'
          ? 'Juego 5: Anagramas Infantiles'
          : id === '4'
          ? 'Juego 4: Sopa de Letras'
          : id === '3'
          ? 'Juego 3: Tablas de Multiplicar'
          : id === '2'
          ? 'Juego 2: ¡Burbujas Numéricas!'
          : 'Juego 1: ¡Organiza los números!'}
      </h2>

      <main className="text-center bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-4xl mt-8">
        {id === '10' ? (
          <div>
            {/* Juego 10: Diferenciar Características de una Persona */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/es/embed/9a5d86e4758e4d70abcac2c9418b3ce6?themeId=41&templateId=76&fontStackId=0"
              width="500"
              height="380"
              frameBorder="0"
              allowFullScreen
              title="Diferenciar Características de una Persona"
            ></iframe>
          </div>
        ) : id === '9' ? (
          <div>
            {/* Juego 9: Pensamiento Matemático */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/es/embed/eabd8a94678143ea857e689bcba774fa?themeId=41&templateId=30&fontStackId=0"
              width="500"
              height="380"
              frameBorder="0"
              allowFullScreen
              title="Pensamiento Matemático"
            ></iframe>
          </div>
        ) : id === '8' ? (
          <div>
            {/* Juego 8: Aprendizaje de Inglés */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/es/embed/f083c797e09a489e83074ff8b63f237a?themeId=21&templateId=30&fontStackId=0"
              width="500"
              height="380"
              frameBorder="0"
              allowFullScreen
              title="Aprendizaje de Inglés"
            ></iframe>
          </div>
        ) : id === '7' ? (
          <div>
            {/* Juego 7: Animales Terrestres y Acuáticos */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/es/embed/d2bf56eeb6bd4f8e90b391d467335863?themeId=1&templateId=2&fontStackId=0"
              width="500"
              height="380"
              frameBorder="0"
              allowFullScreen
              title="Animales Terrestres y Acuáticos"
            ></iframe>
          </div>
        ) : id === '6' ? (
          <div>
            {/* Juego 6: Ruleta de Países */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/es/embed/80546088b47849b386e66db29c89253e?themeId=1&templateId=8&fontStackId=0"
              width="500"
              height="380"
              frameBorder="0"
              allowFullScreen
              title="Ruleta de Países"
            ></iframe>
          </div>
        ) : id === '5' ? (
          <div>
            {/* Juego 5: Anagramas Infantiles */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/es/embed/31e3ca3d97de4066badf32fdfcde158c?themeId=44&templateId=38&fontStackId=0"
              width="500"
              height="380"
              frameBorder="0"
              allowFullScreen
              title="Anagramas Infantiles"
            ></iframe>
          </div>
        ) : id === '4' ? (
          <div>
            {/* Juego 4: Sopa de Letras */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/es/embed/f5ef9a048c06437490315837fb383b27?themeId=3&templateId=10&fontStackId=0"
              width="500"
              height="380"
              frameBorder="0"
              allowFullScreen
              title="Sopa de Letras"
            ></iframe>
          </div>
        ) : id === '3' ? (
          <div>
            {/* Juego 3: Tablas de Multiplicar */}
            <iframe
              style={{ maxWidth: '100%' }}
              src="https://wordwall.net/es/embed/1d3e6b5574ed4b969eb84d196cc37e55?themeId=21&templateId=69&fontStackId=0"
              width="500"
              height="380"
              frameBorder="0"
              allowFullScreen
              title="Tablas de Multiplicar"
            ></iframe>
          </div>
        ) : id === '2' ? (
          <div>
            {/* Juego 2: Burbujas Numéricas */}
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <FiClock className="mr-2 text-blue-600" />
                <span className="font-bold">{timer}s</span>
              </div>
              <div className="flex items-center">
                <FiAward className="mr-2 text-yellow-600" />
                <span className="font-bold">Nivel {level}</span>
              </div>
              <div className="flex items-center">
                <FiHeart className="mr-2 text-red-600" />
                <span className="font-bold">{lives}</span>
              </div>
            </div>

            <div className="relative h-[60vh]">
              <div className="absolute top-4 left-4 text-2xl font-bold text-purple shadow-lg">Puntos: {score}</div>
              <div className="absolute top-4 right-4 text-2xl font-bold text-purple shadow-lg">
                Busca el: {currentNumber}
              </div>
              <AnimatePresence>
                {bubbles.map((bubble) => (
                  <motion.button
                    key={bubble.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute rounded-full bg-gradient-to-br from-green-300 to-yellow-500 flex items-center justify-center text-2xl font-bold text-white cursor-pointer shadow-lg"
                    style={{
                      left: `${bubble.x}%`,
                      bottom: `${bubble.y}%`,
                      width: `${bubble.size}px`,
                      height: `${bubble.size}px`,
                    }}
                    onClick={() => handleBubbleClick(bubble.number)}
                  >
                    {bubble.number}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div>
            {/* Juego 1: Organiza los números */}
            <h1 className="text-2xl sm:text-4xl font-black text-purple-800 mb-6 sm:mb-8">
              ¡Organiza los números del 1 al 10!
            </h1>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={numbers} strategy={verticalListSortingStrategy}>
                <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {numbers.map((number) => (
                    <SortableItem key={number} id={number} />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>
        )}
      </main>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBack}
        className="mt-4 bg-yellow-500 text-white text-lg sm:text-xl py-2 sm:py-3 px-4 sm:px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        ⬅️ Volver Atrás
      </motion.button>

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center mx-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">¡Felicidades!</h2>
            <p className="mb-4">Has completado el juego.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 text-lg"
              onClick={handleRestart}
            >
              Jugar de nuevo
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// Función para mezclar un array
function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default GamePlayer;
