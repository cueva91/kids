import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stories = () => {
  const [pdfs, setPdfs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the PDFs from the backend, assuming the API returns an array of objects with { id, titulo, pdf_path, created_at }
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
          ¡Descarga los mejores cuentos en formato PDF!
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
                <a href={pdf.pdf_path} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/pdf-thumbnail.png" // Placeholder image for PDFs
                    alt={pdf.titulo}
                    className="w-full h-auto object-cover rounded-lg border-4 border-yellow-400"
                  />
                </a>
                <p className="text-gray-800 mt-2 font-bold">{pdf.titulo}</p>
                <p className="text-gray-600 text-sm">
                  Publicado el: {new Date(pdf.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="text-center py-4 bg-green-200">
        <p className="text-gray-800 font-bold">Política de privacidad | Términos de uso | ABC Kids Learning © 2024</p>
      </footer>
    </div>
  );
};

export default Stories;
