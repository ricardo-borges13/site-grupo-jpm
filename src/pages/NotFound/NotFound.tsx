import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

export const NotFound = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // pequena animação de entrada via CSS transition
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 overflow-hidden">
      <div
        className={`flex flex-col items-center transform transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <AlertTriangle className="text-red-500 w-20 h-20 mb-4" />
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-2">
          Página não encontrada
        </h2>
        <p className="text-gray-500 mt-2 max-w-md">
          O endereço que você tentou acessar não existe ou foi movido.
          Verifique o link ou volte à página inicial.
        </p>

        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium transition-all"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};
