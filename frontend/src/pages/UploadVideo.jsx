import React, { useState } from 'react';

const UploadVideoPage = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEmbedVideo = () => {
    const videoId = extractVideoId(url);
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      setVideoUrl(embedUrl);
      setIsModalOpen(true); // Abrir el modal para confirmar la subida
    } else {
      alert('Por favor, ingrese una URL válida de YouTube.');
    }
  };

  const extractVideoId = (youtubeUrl) => {
    const urlPattern = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&?]+)/;
    const match = youtubeUrl.match(urlPattern);
    return match ? match[1] : null;
  };

  const handleConfirmUpload = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl, title }), // Enviando también el título
      });

      if (!response.ok) {
        throw new Error('Error al subir el video');
      }

      // Si la subida es exitosa, cierra el modal
      setIsModalOpen(false);
      setUrl(''); // Limpiar el campo de la URL
      setTitle(''); // Limpiar el campo del título

      alert('¡Video subido con éxito!');
    } catch (error) {
      console.error('Error al subir el video:', error);
      alert('Hubo un problema al subir el video. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 font-comic">Subir un Nuevo Video</h1>
        </header>

        <section className="mb-8">
          <div className="text-center">
            <h2 className="text-xl font-bold mt-4 text-gray-700 font-comic">Subir Video</h2>
            <div className="w-full p-4">
              <div className="mb-4">
                <input
                  type="text"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder="Ingrese URL del video de YouTube"
                  className="border border-gray-300 p-2 w-full rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 font-comic"
                />
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Ingrese el título del video"
                  className="border border-gray-300 p-2 w-full mt-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 font-comic"
                />
                <button
                  onClick={handleEmbedVideo}
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-blue-600 transition-all duration-300 font-comic"
                >
                  Incrustar Video
                </button>
              </div>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg text-black">
              <h2 className="text-lg font-bold mb-4">Confirmar Subida de Video</h2>
              <p>¿Estás seguro de que deseas subir este video?</p>
              <p className="mt-2 font-bold">{title}</p>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-all duration-300"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirmUpload}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadVideoPage;
