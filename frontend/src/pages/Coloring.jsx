import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate de React Router

const Coloring = () => {
  const templates = [
    { id: 1, name: 'Plantilla de Colorear 1', img: '/colorear.jpg', pdf: '/pdf/colorear.pdf' },
    { id: 2, name: 'Plantilla de Colorear 2', img: '/colorear1.jpg', pdf: '/pdf/colorear1.pdf' },
    { id: 3, name: 'Plantilla de Colorear 3', img: '/colorear2.jpg', pdf: '/pdf/colorear2.pdf' },
    { id: 4, name: 'Plantilla de Colorear 4', img: '/colorear3.jpg', pdf: '/pdf/colorear3.pdf' },
    { id: 5, name: 'Plantilla de Colorear 5', img: '/colorear4.jpg', pdf: '/pdf/colorear4.pdf' },
    { id: 6, name: 'Plantilla de Colorear 6', img: '/colorear5.jpg', pdf: '/pdf/colorear5.pdf' },
    { id: 7, name: 'Plantilla de Colorear 7', img: '/colorear6.jpg', pdf: '/pdf/colorear6.pdf' },
    { id: 8, name: 'Plantilla de Colorear 8', img: '/colorear7.jpg', pdf: '/pdf/colorear7.pdf' },
    { id: 9, name: 'Plantilla de Colorear 9', img: '/colorear8.jpg', pdf: '/pdf/colorear8.pdf' },
    { id: 10, name: 'Plantilla de Colorear 10', img: '/colorear9.jpg', pdf: '/pdf/colorear9.pdf' },
    { id: 11, name: 'Plantilla de Colorear 11', img: '/colorear10.jpg', pdf: '/pdf/colorear10.pdf' },
    { id: 12, name: 'Plantilla de Colorear 12', img: '/colorear11.jpg', pdf: '/pdf/colorear11.pdf' },
    { id: 13, name: 'Plantilla de Colorear 13', img: '/colorear12.jpg', pdf: '/pdf/colorear12.pdf' },
    { id: 14, name: 'Plantilla de Colorear 14', img: '/colorear13.jpg', pdf: '/pdf/colorear13.pdf' },
    { id: 15, name: 'Plantilla de Colorear 15', img: '/colorear14.jpg', pdf: '/pdf/colorear14.pdf' },
    { id: 16, name: 'Plantilla de Colorear 16', img: '/colorear15.jpg', pdf: '/pdf/colorear15.pdf' },
    { id: 17, name: 'Plantilla de Colorear 17', img: '/colorear16.jpg', pdf: '/pdf/colorear16.pdf' },
    { id: 18, name: 'Plantilla de Colorear 18', img: '/colorear17.jpg', pdf: '/pdf/colorear17.pdf' },
    { id: 19, name: 'Plantilla de Colorear 19', img: '/colorear18.jpg', pdf: '/pdf/colorear18.pdf' },
    { id: 20, name: 'Plantilla de Colorear 20', img: '/colorear19.jpg', pdf: '/pdf/colorear19.pdf' },
    { id: 21, name: 'Plantilla de Colorear 21', img: '/colorear20.jpg', pdf: '/pdf/colorear20.pdf' },
    { id: 22, name: 'Plantilla de Colorear 22', img: '/colorear21.jpg', pdf: '/pdf/colorear21.pdf' },
  ];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navegar a la página anterior
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="bg-[#0d9488] p-4 flex flex-col sm:flex-row justify-between items-center border-b border-gray-300">
        <div className="bg-blue-800 text-white p-4 rounded-full text-center font-comic-neue font-bold text-3xl">ABC Kids Learning</div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-blue-500">APPS educativas</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Tienda</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Padres</a>
        </nav>
      </header>

      <main className="text-center py-8 bg-[#a6ef18]">
        <h1 className="text-3xl sm:text-4xl text-pink-500 mb-4">Jelly, Ben & Pogo: Coloreando Juntos</h1> {/* Título optimizado */}
        <p className="text-lg sm:text-xl text-gray-800 mb-8 px-4 sm:px-0">
          Resuelve problemas de forma creativa con "Lyla en el Bucle", un nuevo show para niños de 4 a 8 años. 
          <a href="#" className="text-blue-500">Aprende más</a>
        </p>
        
        <Link to="/game">
          <button className="bg-pink-500 text-white py-2 px-4 rounded font-comic-neue font-regular mb-4">
            🎮 Juegos Educativos
          </button>
        </Link>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 sm:px-0">
          {templates.map((template) => (
            <div key={template.id} className="bg-white p-4 rounded shadow transform transition-transform duration-300 hover:scale-105">
              <a href={template.pdf} target="_blank" rel="noopener noreferrer">
                <img src={template.img} alt={`Plantilla de colorear infantil ${template.id}`} className="w-full h-auto object-cover rounded" /> {/* Alt optimizado */}
              </a>
              <p className="text-gray-800 mt-2">{template.name}</p>
            </div>
          ))}
        </div>
      </main>

      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-xl font-comic-neue font-regular py-2 px-8 mt-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      <footer className="text-center py-4 pt-6 bg-green-200">
        <div className='text-black'>
          Política de privacidad  | Términos de uso | ABC Kids Learning © 2024 {/* Ajustado para SEO */}
        </div> 
      </footer>
    </div>
  );
};

export default Coloring;
