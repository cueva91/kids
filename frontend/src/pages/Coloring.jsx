import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const categories = {
  princesas: [
    { id: 1, name: 'Princesa Sofía', img: '/princesa.jpg', pdf: '/pdf/princesa.pdf' },
    { id: 2, name: 'Princesa Aurora', img: '/princesa1.jpg', pdf: '/pdf/princesa1.pdf' },
    { id: 3, name: 'Princesa Camila', img: '/princesa2.jpg', pdf: '/pdf/princesa2.pdf' },
    { id: 4, name: 'Princesa Violeta', img: '/princesa3.jpg', pdf: '/pdf/princesa3.pdf' },
    { id: 5, name: 'Princesa Luisa', img: '/princesa4.jpg', pdf: '/pdf/princesa4.pdf' },
    { id: 6, name: 'Princesa Laura', img: '/princesa5.jpg', pdf: '/pdf/princesa5.pdf' },
    { id: 7, name: 'Princesa Andrea', img: '/princesa6.jpg', pdf: '/pdf/princesa6.pdf' },
    { id: 8, name: 'Princesa Natalia', img: '/princesa7.jpg', pdf: '/pdf/princesa7.pdf' },
    { id: 9, name: 'Princesa Peta', img: '/princesa8.jpg', pdf: '/pdf/princesa8.pdf' }
  ],
  superhéroes: [
    { id: 1, name: 'Superhéroe Martin', img: '/superheroe1.jpg', pdf: '/pdf/superheroe1.pdf' },
    { id: 2, name: 'Superhéroe Fuerza', img: '/superheroe2.jpg', pdf: '/pdf/superheroe2.pdf' },
    { id: 3, name: 'Superhéroe Volar', img: '/superheroe3.jpg', pdf: '/pdf/superheroe3.pdf' },
    { id: 4, name: 'Superhéroe Rayo', img: '/superheroe4.jpg', pdf: '/pdf/superheroe4.pdf' },
    { id: 5, name: 'Superhéroe Flores', img: '/superheroe5.jpg', pdf: '/pdf/superheroe5.pdf' },
    { id: 6, name: 'Superhéroe Fuego', img: '/superheroe6.jpg', pdf: '/pdf/superheroe6.pdf' },
    { id: 7, name: 'Superhéroe Tierra', img: '/superheroe7.jpg', pdf: '/pdf/superheroe7.pdf' },
    { id: 8, name: 'Superhéroe Laura', img: '/superheroe8.jpg', pdf: '/pdf/superheroe8.pdf' },
    { id: 9, name: 'Superhéroe Salomé', img: '/superheroe9.jpg', pdf: '/pdf/superheroe9.pdf' },
    { id: 10, name: 'Superhéroe Hierro', img: '/superheroe10.jpg', pdf: '/pdf/superheroe10.pdf' }
  ],
  carros: [
    { id: 1, name: 'carro1', img: '/carro1.jpg', pdf: '/pdf/carro1.pdf' },
    { id: 2, name: 'carro2', img: '/carro2.jpg', pdf: '/pdf/carro2.pdf' },
    { id: 3, name: 'carro3', img: '/carro3.jpg', pdf: '/pdf/carro3.pdf' },
    { id: 4, name: 'carro4', img: '/carro4.jpg', pdf: '/pdf/carro4.pdf' },
    { id: 5, name: 'carro5', img: '/carro5.jpg', pdf: '/pdf/carro5.pdf' },
    { id: 6, name: 'crro6', img: '/carro6.jpg', pdf: '/pdf/carro6.pdf' },
    { id: 7, name: 'carro7', img: '/carro7.jpg', pdf: '/pdf/carro7.pdf' },
    { id: 8, name: 'carro8', img: '/carro8.jpg', pdf: '/pdf/carro8.pdf' },
    { id: 9, name: 'carro9', img: '/carro9.jpg', pdf: '/pdf/carro9.pdf' },
    { id: 10, name: 'carro10', img: '/carro10.jpg', pdf: '/pdf/carro10.pdf' }
  ],
  robots: [
    { id: 1, name: 'Robot Guardián', img: '/robot1.jpg', pdf: '/pdf/robot1.pdf' },
    { id: 2, name: 'Robot Amigo', img: '/robot2.jpg', pdf: '/pdf/robot2.pdf' },
    { id: 3, name: 'Robot Roby', img: '/robot3.jpg', pdf: '/pdf/robot3.pdf' },
    { id: 4, name: 'Robot Bolt', img: '/robot4.jpg', pdf: '/pdf/robot4.pdf' },
    { id: 5, name: 'Robot Sparky', img: '/robot5.jpg', pdf: '/pdf/robot5.pdf' },
    { id: 6, name: 'Robot Zippy', img: '/robot6.jpg', pdf: '/pdf/robot6.pdf' },
    { id: 7, name: 'Robot Tito', img: '/robot7.jpg', pdf: '/pdf/robot7.pdf' },
    { id: 8, name: 'Robot Chispas', img: '/robot8.jpg', pdf: '/pdf/robot8.pdf' },
  ],
  animales: [
    { id: 1, name: 'Manolo', img: '/animal.jpg', pdf: '/pdf/animal.pdf' },
    { id: 2, name: 'Violeta', img: '/animal1.jpg', pdf: '/pdf/animal1.pdf' },
    { id: 3, name: 'Bruno', img: '/animal2.jpg', pdf: '/pdf/animal2.pdf' },
    { id: 4, name: 'Paco y sus amigos', img: '/animal3.jpg', pdf: '/pdf/animal3.pdf' },
    { id: 5, name: 'Luisa', img: '/animal4.jpg', pdf: '/pdf/animal4.pdf' },
    { id: 6, name: 'Pablo', img: '/animal5.jpg', pdf: '/pdf/animal5.pdf' },
    { id: 7, name: 'Luna', img: '/animal6.jpg', pdf: '/pdf/animal6.pdf' },
    { id: 8, name: 'Max', img: '/animal7.jpg', pdf: '/pdf/animal7.pdf' },
    { id: 7, name: 'Bubu', img: '/animal8.jpg', pdf: '/pdf/animal8.pdf' },
    { id: 7, name: 'Pompón y Coco', img: '/animal9.jpg', pdf: '/pdf/animal9.pdf' }
  ],
  plantas: [
    { id: 1, name: 'Plantal', img: '/planta1.jpg', pdf: '/pdf/planta1.pdf' },
    { id: 2, name: 'Planta2', img: '/planta2.jpg', pdf: '/pdf/planta2.pdf' },
    { id: 3, name: 'Planta3', img: '/planta3.jpg', pdf: '/pdf/planta3.pdf' },
    { id: 4, name: 'Planta4', img: '/planta4.jpg', pdf: '/pdf/planta4.pdf' },
    { id: 5, name: 'Planta5', img: '/planta5.jpg', pdf: '/pdf/planta5.pdf' },
    { id: 6, name: 'Planta6', img: '/planta6.jpg', pdf: '/pdf/planta6.pdf' },
    { id: 7, name: 'Planta7', img: '/planta7.jpg', pdf: '/pdf/planta7.pdf' },
    { id: 8, name: 'Planta8', img: '/planta8.jpg', pdf: '/pdf/planta8.pdf' },
    { id: 9, name: 'Planta9', img: '/planta9.jpg', pdf: '/pdf/planta9.pdf' },
    { id: 10, name: 'Planta10', img: '/planta10.jpg', pdf: '/pdf/planta10.pdf' },
    { id: 11, name: 'Planta11', img: '/planta11.jpg', pdf: '/pdf/planta11.pdf' },
    { id: 12, name: 'Planta12', img: '/planta12.jpg', pdf: '/pdf/planta12.pdf' },
    { id: 13, name: 'Planta13', img: '/planta13.jpg', pdf: '/pdf/planta13.pdf' }
  ],
  astronautas: [
    { id: 1, name: 'astronauta1', img: '/astronauta1.jpg', pdf: '/pdf/astronauta1.pdf' },
    { id: 2, name: 'astronauta2', img: '/astronauta2.jpg', pdf: '/pdf/astronauta2.pdf' },
    { id: 3, name: 'astronauta3', img: '/astronauta3.jpg', pdf: '/pdf/astronauta3.pdf' },
    { id: 4, name: 'astronauta4', img: '/astronauta4.jpg', pdf: '/pdf/astronauta4.pdf' },
    { id: 5, name: 'astronauta5', img: '/astronauta5.jpg', pdf: '/pdf/astronauta5.pdf' },
    { id: 6, name: 'astronauta6', img: '/astronauta6.jpg', pdf: '/pdf/astronauta6.pdf' },
    { id: 7, name: 'astronauta7', img: '/astronauta7.jpg', pdf: '/pdf/astronauta7.pdf' },
    { id: 8, name: 'astronauta8', img: '/astronauta8.jpg', pdf: '/pdf/astronauta8.pdf' },
    { id: 9, name: 'astronauta9', img: '/astronauta9.jpg', pdf: '/pdf/astronauta9.pdf' },
    { id: 10, name: 'astronauta10', img: '/astronauta10.jpg', pdf: '/pdf/astronauta10.pdf' }
  ],
};

const Coloring = () => {
  const [activeTab, setActiveTab] = useState('princesas');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="font-sans bg-gradient-to-r from-blue-50 to-green-50 min-h-screen">
      <header className="bg-[#0d9488] p-4 flex flex-col sm:flex-row justify-between items-center shadow-lg">
        <div className="bg-blue-800 text-white p-4 rounded-full text-center font-comic-neue font-bold text-3xl">
          ABC Kids Learning
        </div>
        <nav className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="text-gray-800 hover:text-blue-500 font-bold">APPS educativas</a>
          <a href="#" className="text-gray-800 hover:text-blue-500 font-bold">Tienda</a>
          <a href="#" className="text-gray-800 hover:text-blue-500 font-bold">Padres</a>
        </nav>
      </header>

      <main className="text-center py-8">
        <h1 className="text-3xl sm:text-4xl text-pink-500 mb-4 font-comic-neue font-bold">
          ¡Grandiosas Plantillas para Colorear por Categorías!
        </h1>

        {/* Pestañas de categorías ajustadas para móviles y horizontales en tabletas/escritorio */}
        <div className="grid grid-cols-2 sm:grid-cols-7 mb-6 max-w-full px-4 sm:px-0 font-comic-neue font-bold">
          {Object.keys(categories).map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 font-bold text-sm sm:text-lg rounded-full ${
                activeTab === category
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-pink-300'
              } shadow-md transition duration-300 ease-in-out w-full`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Contenido de la categoría activa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {categories[activeTab].map(template => (
            <div
              key={template.id}
              className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110"
            >
              <a href={template.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={template.img}
                  alt={template.name}
                  className="w-full h-auto object-cover rounded-lg border-4 border-yellow-400"
                />
              </a>
              <p className="text-gray-800 mt-2 font-bold">{template.name}</p>
            </div>
          ))}
        </div>
      </main>

      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-xl py-2 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      <footer className="text-center py-4 bg-green-200">
        <p className="text-gray-800 font-bold">Política de privacidad | Términos de uso | ABC Kids Learning © 2024</p>
      </footer>
    </div>
  );
};

export default Coloring;
