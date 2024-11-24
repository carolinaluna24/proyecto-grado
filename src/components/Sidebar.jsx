import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBell, FaProjectDiagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-lg font-bold mb-6">Gestión de Proyectos</h2>
      <nav className="flex flex-col gap-4">
      <Link to="/login" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <FaHome /> Login
        </Link>
        <Link to="/" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <FaHome /> Inicio
        </Link>
        <Link to="/student" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <FaProjectDiagram /> Estudiante
        </Link>
        <Link to="/advisor" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <FaUser /> Asesor
        </Link>
        <Link to="/jury" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <FaUser /> Jurado
        </Link>
        <Link to="/coordinator" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <FaUser /> Coordinador
        </Link>
        <Link to="/notifications" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <FaBell /> Notificaciones
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

