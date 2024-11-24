import React from "react";

const AdvisorPanel = () => {
  return (
    <div className="flex">
      {/* Contenido */}
      <div className="w-3/4 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Proyectos Asignados</h2>
        <div className="bg-white shadow rounded p-4">
          <ul className="list-disc pl-6">                      

            <li className="mb-2">
            <span className="font-bold"> Análisis comparativo de modelos de Machine Learning en la clasificación de ocupación de habitaciones usando datos generados a través de IOT.</span>:{" En revisión "}
              <button className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">
                AVALAR
              </button>
            </li>

            <li className="mb-2">
            <span className="font-bold"> Aplicación de red neuronal multicapa para el análisis de datos de sensores ambientales en el internet de las cosas.</span>:{" Avalado "}
              <button className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600">
                VER AVANCES
              </button>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvisorPanel;
