import React from "react";

const CoordinatorPanel = () => {
  return (
    <div className="flex">
    
      {/* Contenido */}
      <div className="w-3/4 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Gestión de Proyectos</h2>
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold text-lg mb-2">Proyectos Registrados</h3>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <span className="font-bold">Análisis comparativo de modelos de Machine Learning en la clasificación de ocupación de habitaciones usando datos generados a través de IOT.</span>: En revisión
            </li>
            <li className="mb-2">
              <span className="font-bold">Aplicación de red neuronal multicapa para el análisis de datos de sensores ambientales en el internet de las cosas.</span>: Aprobado
            </li>
          </ul>
        </div>
        <div className="mt-6 bg-white shadow rounded p-4">
          <h3 className="font-semibold text-lg mb-2">Asignación jurados y asesores</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre del Proyecto"
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Jurado o Asesor"
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="ID Jurado o  Asesor"
              className="p-2 border rounded"
            />
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
              Asignar Jurado
            </button>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
              Asignar Asesor
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorPanel;
