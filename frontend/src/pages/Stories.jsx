import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';  // Importa la librería para manejar las fechas
import { useNavigate } from 'react-router-dom'; // Importa el hook para navegar

const Stories = () => {
  const [pdfs, setPdfs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Hook para manejar la navegación

  useEffect(() => {
    // Fetch the PDFs from the backend
    const fetchPdfs = async () => {
      try {
        const response = await axios.get('https://kids-nine.vercel.app/api/pdf');
        setPdfs(response.data); // Assuming the response contains the array of PDFs
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching PDFs:', error);
        setIsLoading(false);
      }
    };

    fetchPdfs();
  }, []);

  // Función para volver atrás
  const handleBack = () => {
    navigate('/'); // Navegar a la página de inicio
  };

  // Sort PDFs by created_at date (most recent first)
  const sortedPdfs = pdfs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

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
          ¡Lee y Descarga los mejores cuentos en formato PDF!
        </h1>

        {isLoading ? (
          <p className="text-gray-700 text-lg">Cargando cuentos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {sortedPdfs.map((pdf) => (
              <div
                key={pdf.id}
                className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110"
              >
                <p className="text-gray-800 mt-2 font-bold">{pdf.titulo}</p>
                <p className="text-gray-600 text-sm">
                  Publicado el: {dayjs(pdf.created_at).format('DD/MM/YYYY')}  {/* Formatear la fecha con dayjs */}
                </p>
                <a
                  href={pdf.pdf_path}
                  target="_blank" // Abre el PDF en una nueva pestaña
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Ver y Descargar PDF
                </a>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Botón para volver atrás */}
      <button
        onClick={handleBack}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white text-sm md:text-lg lg:text-xl font-comic-neue font-regular py-2 px-4 md:py-2 md:px-6 lg:py-2 lg:px-8 mt-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
      >
        ⬅️ Volver Atrás
      </button>

      <footer className="text-center py-4 bg-green-200">
        <p className="text-gray-800 font-bold">Política de privacidad | Términos de uso | ABC Kids Learning © 2024</p>
      </footer>
    </div>
  );
};

export default Stories;
