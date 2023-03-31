import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-teal-400">Proyecto Caja de agua</span>
          </div>
          <div className="flex">
            <a href="#" className="mx-3 hover:text-teal-400">
              Inicio
            </a>
            <a href="#" className="mx-3 hover:text-teal-400">
              Servicios
            </a>
            <a href="#" className="mx-3 hover:text-teal-400">
              Contacto
            </a>
          </div>
          <div className="flex items-center">
            <button className="bg-teal-400 text-white font-bold py-2 px-4 rounded-full mr-3 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
              Botón 1
            </button>
            <button className="bg-red-400 text-white font-bold py-2 px-4 rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
              Botón 2
            </button>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm opacity-50 text-center ">Todos los derechos reservados © 2023 Alberto Millán</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
