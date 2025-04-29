import React, { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Camiseta Oficial de Fútbol",
    descripcion: "Camiseta titular del Club Atlético Lamarque, edición 2024.",
    imagen: "/tienda/camiseta.png",
    precio: 8500,
  },
  {
    id: 2,
    nombre: "Short de Entrenamiento",
    descripcion: "Short azul con escudo del club, tela deportiva.",
    imagen: "/tienda/short.png",
    precio: 4800,
  },
  {
    id: 3,
    nombre: "Campera Rompeviento",
    descripcion: "Campera impermeable azulgrana, edición invierno 2024.",
    imagen: "https://via.placeholder.com/400x300?text=Campera",
    precio: 11200,
  },
  {
    id: 4,
    nombre: "Botines Profesionales",
    descripcion: "Botines Puma EvoSpeed para césped natural.",
    imagen: "https://via.placeholder.com/400x300?text=Botines",
    precio: 13500,
  },
  {
    id: 5,
    nombre: "Pelota Oficial Fútbol 5",
    descripcion: "Balón número 5 de alta competición.",
    imagen: "https://via.placeholder.com/400x300?text=Pelota+Fútbol",
    precio: 6200,
  },
  {
    id: 6,
    nombre: "Rodilleras de Vóley",
    descripcion: "Protección de alta absorción para jugadores de vóley.",
    imagen: "https://via.placeholder.com/400x300?text=Rodilleras+Vóley",
    precio: 3100,
  },
  {
    id: 7,
    nombre: "Pelota de Básquet Oficial",
    descripcion: "Molten G7X Indoor/Outdoor Basketball.",
    imagen: "https://via.placeholder.com/400x300?text=Pelota+Básquet",
    precio: 7900,
  },
  {
    id: 8,
    nombre: "Raqueta de Tenis",
    descripcion: "Wilson Ultra 100 para adultos profesionales.",
    imagen: "https://via.placeholder.com/400x300?text=Raqueta+Tenis",
    precio: 21500,
  },
  {
    id: 9,
    nombre: "Gorra de Entrenamiento",
    descripcion: "Gorra ligera ideal para actividades al aire libre.",
    imagen: "https://via.placeholder.com/400x300?text=Gorra",
    precio: 2200,
  },
  {
    id: 10,
    nombre: "Mochila Deportiva CAL",
    descripcion: "Mochila azulgrana con el escudo bordado del club.",
    imagen: "https://via.placeholder.com/400x300?text=Mochila+Deportiva",
    precio: 6800,
  },
];

export default function Tienda() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-12">
      <h2 className="text-4xl font-extrabold text-center text-azulgrana-azul mb-10">
        Tienda Oficial
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Productos */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-azulgrana-rojo">{producto.nombre}</h3>
                <p className="text-gray-600 text-sm">{producto.descripcion}</p>
                <p className="text-lg font-bold text-green-600">${producto.precio}</p>
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="bg-azulgrana-azul hover:bg-azulgrana-rojo text-white w-full py-2 rounded-full font-semibold transition-colors duration-300"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carrito */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-fit sticky top-20">
          <div>
            <h3 className="text-2xl font-extrabold text-center text-azulgrana-azul mb-6">
              🛒 Tu Carrito
            </h3>

            {carrito.length === 0 ? (
              <p className="text-gray-500 text-center">Tu carrito está vacío</p>
            ) : (
              <ul className="space-y-4">
                {carrito.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700">{item.nombre}</span>
                    <button
                      className="text-red-500 text-xs hover:underline"
                      onClick={() => eliminarDelCarrito(index)}
                    >
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {carrito.length > 0 && (
            <div className="mt-6 border-t pt-4 space-y-3">
              <p className="font-bold text-lg text-gray-800">Total: ${total}</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-bold transition-colors duration-300">
                Continuar con el Pago
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
