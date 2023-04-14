import React from "react";

function Main() {
  const backgroundImageUrl = "images/imagen01.jpg";
  const spacing = 1;

  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen w-screen">
      <div className="flex flex-row h-screen">
        <div
          className="w-1/2 bg-opacity-50 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="h-full border-r-2 border-white"></div>
        </div>
        <div className="w-1/2 p-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vTz4fybXBR4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <h1 className="text-6xl font-bold text-gray-900 mb-8">
        Proyecto Caja de Agua
      </h1>
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
