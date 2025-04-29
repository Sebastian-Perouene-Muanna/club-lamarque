import { useEffect, useState } from "react";
import { auth, cerrarSesion } from "../firebaseAuth";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUsuario(user);
    });
    return () => unsubscribe();
  }, []);

  if (!usuario) {
    return (
      <div className="p-6 text-center text-gray-600">
        Debes iniciar sesión para ver tu perfil.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-8 md:flex items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Avatar */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center text-4xl text-white font-bold shadow-inner">
            {usuario.email[0].toUpperCase()}
          </div>
        </div>

        {/* Información */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Hola, {usuario.email.split("@")[0]}</h2>
          <p className="text-gray-700 text-sm mb-4">
            Este es tu panel de usuario. Desde aquí podrás gestionar tu perfil, tus pagos, inscripciones y más.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold">Correo electrónico:</p>
              <p>{usuario.email}</p>
            </div>
            <div>
              <p className="font-semibold">ID de usuario:</p>
              <p className="break-all">{usuario.uid}</p>
            </div>
            <div>
              <p className="font-semibold">Email verificado:</p>
              <p>{usuario.emailVerified ? "Sí" : "No"}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={cerrarSesion}
              className="bg-red-600 text-white px-5 py-2 rounded-full shadow hover:bg-red-700 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
