import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Bienvenido al Sistema de Gestión de Proyectos</h1>
      <p className="text-lg mb-6">Este es un prototipo de interfaz de usuario para el sistema de gestión de proyectos de grado.</p>
      <button className="bg-white text-purple-500 font-bold py-2 px-6 rounded hover:bg-gray-100">
        INICIO
      </button>
    </div>
  );
};

export default Home;
