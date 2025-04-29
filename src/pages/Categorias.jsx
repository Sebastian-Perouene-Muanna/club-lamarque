import React from 'react';

const categorias = [
  {
    nombre: "Infantil",
    edades: "6 a 12 años",
    descripcion: "Enfocada en el desarrollo de habilidades básicas y el trabajo en equipo.",
    imagen: "https://images.unsplash.com/photo-1599050751684-5153d2aa4a8e?auto=format&fit=crop&w=800&q=80", // Infantil
    horario: "Lunes y Miércoles - 17:00 a 18:30",
    entrenador: "Juan Pérez"
  },
  {
    nombre: "Juvenil",
    edades: "13 a 17 años",
    descripcion: "Preparación táctica y técnica para competencias regionales.",
    imagen: "https://images.unsplash.com/photo-1617791160536-4c0b26754d38?auto=format&fit=crop&w=800&q=80", // Juvenil
    horario: "Martes y Jueves - 18:00 a 19:30",
    entrenador: "María Gómez"
  },
  {
    nombre: "Mayores",
    edades: "18 años en adelante",
    descripcion: "Entrenamientos intensivos orientados a la competencia profesional.",
    imagen: "https://images.unsplash.com/photo-1593113599427-cc2d9d4e263f?auto=format&fit=crop&w=800&q=80", // Mayores
    horario: "Lunes, Miércoles y Viernes - 19:00 a 21:00",
    entrenador: "Carlos López"
  }
];

export default function Categorias() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-center text-blue-800">Nuestras Categorías</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {categorias.map((cat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={cat.imagen} alt={`Categoría ${cat.nombre}`} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-2xl font-semibold text-blue-700">{cat.nombre}</h3>
              <p className="text-sm text-gray-600">Edades: {cat.edades}</p>
              <p className="text-gray-700">{cat.descripcion}</p>
              <p className="text-sm text-gray-600">Horario: {cat.horario}</p>
              <p className="text-sm text-gray-600">Entrenador: {cat.entrenador}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  