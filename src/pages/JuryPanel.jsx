import React from "react";

const JuryPanel = () => {
  return (
    <div className="flex">
      {/* Contenido */}
      <div className="w-3/4 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Evaluación de Proyectos</h2>
        <div className="bg-white shadow rounded p-4">
          <ul className="list-disc pl-6">
            <li className="mb-2">
            Análisis comparativo de modelos de Machine Learning en la clasificación de ocupación de habitaciones usando datos generados a través de IOT:{" Pendiente evaluación "}
              <button className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">
                Evaluar
              </button>
            </li>
            <li className="mb-2">
            Aplicación de red neuronal multicapa para el análisis de datos de sensores ambientales en el internet de las cosas.:{" Evaluado"}
              <button className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">
                Ver
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JuryPanel;

