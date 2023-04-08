import React from 'react';

function Main() {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen w-screen ">
      <h1 className="text-6xl font-bold text-gray-900 mb-8">Proyecto Caja de Agua</h1>
      <nav className="flex justify-center">
        <button className="bg-gray-800 text-white text-lg font-bold py-2 px-4 mx-2 rounded-full hover:bg-gray-700">
          Inicio
        </button>
        <button className="bg-gray-800 text-white text-lg font-bold py-2 px-4 mx-2 rounded-full hover:bg-gray-700">
          Servicios
        </button>
        <button className="bg-gray-800 text-white text-lg font-bold py-2 px-4 mx-2 rounded-full hover:bg-gray-700">
          Contacto
        </button>
      </nav>
    </div>
  );
}

export default Main;
