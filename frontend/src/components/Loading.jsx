import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-900">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      
      {/* Mensaje de Carga */}
      <p className="mt-4 text-white text-lg font-bold">Cargando, por favor espera...</p>
    </div>
  );
};

export default Loading;
