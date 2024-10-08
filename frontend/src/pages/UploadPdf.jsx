import React, { useState, useRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const UploadPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); // Estado para el token de CAPTCHA

  const fileInputRef = useRef(null);
  const recaptchaRef = useRef(null); // Ref para el componente de reCAPTCHA

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== 'application/pdf') {
      alert('Solo se permiten archivos PDF.');
      return;
    }
    setSelectedFile(file);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Manejar la verificación del reCAPTCHA
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleConfirmUpload = async () => {
    if (!captchaToken) {
      alert('Por favor, completa el reCAPTCHA.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', selectedFile);
    formData.append('titulo', title);
    formData.append('captchaToken', captchaToken); // Enviar el token de CAPTCHA al backend

    try {
      const response = await axios.post('https://kids-nine.vercel.app/api/pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status !== 201) {
        throw new Error('Error al subir el PDF');
      }

      setIsModalOpen(false);
      setTitle('');
      setSelectedFile(null);
      fileInputRef.current.value = '';
      recaptchaRef.current.reset(); // Reiniciar el reCAPTCHA después de una subida exitosa
      alert('¡PDF subido con éxito!');
    } catch (error) {
      console.error('Error al subir el PDF:', error);
      alert('Hubo un problema al subir el PDF. Inténtalo de nuevo.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Por favor, selecciona un archivo PDF.');
      return;
    }
    if (!title) {
      alert('Por favor, ingresa un título para el PDF.');
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 font-comic-neue">Subir un Nuevo PDF</h1>
        </header>

        <section className="mb-8">
          <div className="text-center">
            <h2 className="text-xl font-bold mt-4 text-gray-700 font-comic-neue">Subir PDF</h2>
            <div className="w-full p-4">
              <div className="mb-4">
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Ingrese el título del PDF"
                  className="border border-gray-300 p-2 w-full rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 font-comic-neue"
                />
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="border border-gray-300 p-2 w-full mt-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 font-comic-neue"
                />
                
                {/* reCAPTCHA */}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Ley008qAAAAAIKu9BJSKE6JNsYm4jLzepGbSlDd"  // Reemplaza con tu clave del sitio
                  onChange={handleCaptchaChange}
                  className="mt-4"
                />
                
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-blue-600 transition-all duration-300 font-comic-neue"
                >
                  Incrustar PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg text-black">
              <h2 className="text-lg font-bold mb-4">Confirmar Subida de PDF</h2>
              <p>¿Estás seguro de que deseas subir este PDF?</p>
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

export default UploadPdf;
