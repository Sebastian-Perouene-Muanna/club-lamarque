import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function Inscripciones() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    nacimiento: "",
    direccion: "",
    edad: "",
    categoria: "",
    disciplina: "", // 🔥 Agregado
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "inscripciones"), {
        ...formData,
        fecha: Timestamp.now(),
      });

      alert("Inscripción enviada correctamente");
      setFormData({
        nombre: "",
        apellido: "",
        dni: "",
        nacimiento: "",
        direccion: "",
        edad: "",
        categoria: "",
        disciplina: "", // 🔥 Limpiarlo también
        telefono: "",
        email: "",
      });
    } catch (error) {
      alert("Error al guardar: " + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Formulario de Inscripción
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="nombre" placeholder="Nombre" required value={formData.nombre} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="apellido" placeholder="Apellido" required value={formData.apellido} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="dni" placeholder="DNI" required value={formData.dni} onChange={handleChange} className="border p-2 rounded" />
          <input type="date" name="nacimiento" placeholder="Fecha de nacimiento" required value={formData.nacimiento} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="direccion" placeholder="Dirección" required value={formData.direccion} onChange={handleChange} className="border p-2 rounded" />
          <input type="number" name="edad" placeholder="Edad" required value={formData.edad} onChange={handleChange} className="border p-2 rounded" />
          <input type="tel" name="telefono" placeholder="Teléfono" required value={formData.telefono} onChange={handleChange} className="border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="border p-2 rounded" />
        </div>

        {/* Selección de disciplina 🔥 */}
        <select name="disciplina" value={formData.disciplina} onChange={handleChange} required className="w-full border p-2 rounded">
          <option value="">Seleccionar disciplina</option>
          <option value="Fútbol">Fútbol</option>
          <option value="Vóley">Vóley</option>
          <option value="Básquet">Básquet</option>
          <option value="Tenis">Tenis</option>
          <option value="Hockey">Hockey</option>
          <option value="Patín">Patín Artístico</option>
        </select>

        {/* Selección de categoría */}
        <select name="categoria" value={formData.categoria} onChange={handleChange} required className="w-full border p-2 rounded">
          <option value="">Seleccionar categoría</option>
          <option value="Infantil">Infantil</option>
          <option value="Juvenil">Juvenil</option>
          <option value="Mayores">Mayores</option>
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Enviar inscripción
        </button>
      </form>
    </div>
  );
}
