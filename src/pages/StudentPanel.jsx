import React from "react";

const StudentPanel = () => {
  return (
    <div className="flex">
    
      {/* Contenido */}
      <div className="w-3/4 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Cargar Proyecto</h2>
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold text-lg mb-2">Registra tu Proyecto</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Título del Proyecto"
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Descripción"
              className="p-2 border rounded h-32"
            ></textarea>
            <input type="file" className="p-2 border rounded" />
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
              Enviar Proyecto
            </button>
          </form>
        </div>
        {/* Estado del Proyecto */}
        <div className="mt-6 bg-white shadow rounded p-4">
          <h3 className="font-semibold text-lg mb-2">Estado del Proyecto</h3>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              Estado: <span className="font-bold text-green-600">Aprobado</span>
            </li>
            <li className="mb-2">Fecha de Aprobación: 2024-11-01</li>
            <li className="mb-2">Calificación: 4.5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentPanel;



