import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebaseAuth";

export default function RutaPrivada({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUsuario(user);
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  if (cargando) return <p className="text-center mt-6">Cargando...</p>;

  return usuario ? children : <Navigate to="/login" />;
}
