import { useState } from "react";
import { iniciarSesion } from "../firebaseAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await iniciarSesion(email, password);
      navigate("/perfil"); // redirige al perfil si fue exitoso
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Usuario no registrado");
      } else if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta");
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border border-gray-300 p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
