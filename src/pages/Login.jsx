import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Iniciar Sesión
        </h2>
        <form className="space-y-4">
          {/* Campo de Correo */}
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="correo@ejemplo.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Campo de Contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Botón de Inicio de Sesión */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>
        {/* Enlace a Registro */}
        <p className="mt-4 text-center text-gray-600">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
