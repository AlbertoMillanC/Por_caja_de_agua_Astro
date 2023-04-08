import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a className="text-xl font-bold text-gray-800 uppercase hover:text-gray-700" href="#">
              Artes escenicas
            </a>
            <button className="text-gray-500 focus:outline-none lg:hidden ml-4">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M21 7h-18v-2h18v2zm0 6h-18v-2h18v2zm0 6h-18v-2h18v2z"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex">
              <li>
                <a
                  className="px-4 py-2 text-gray-700 font-bold hover:text-gray-900"
                  href="#"
                >
                  Trayectoria
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 text-gray-700 font-bold hover:text-gray-900"
                  href="#"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 text-gray-700 font-bold hover:text-gray-900"
                  href="#"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
