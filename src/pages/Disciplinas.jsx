import { Link } from "react-router-dom";

const disciplinas = [
  {
    nombre: "Fútbol",
    descripcion: "Categorías infantiles, juveniles y mayores.",
    ruta: "futbol",
    imagen: "/club-lamarque/disciplinas/futbol.jpeg",
  },
  {
    nombre: "Vóley",
    descripcion: "Entrenamientos mixtos y competición local.",
    ruta: "voley",
    imagen: "/club-lamarque/disciplinas/voley.webp",
  },
  {
    nombre: "Básquet",
    descripcion: "Formación deportiva desde temprana edad.",
    ruta: "basquet",
    imagen: "/club-lamarque/disciplinas/basquet.jpeg",
  },
  {
    nombre: "Tenis",
    descripcion: "Clases y torneos recreativos para todas las edades.",
    ruta: "tenis",
    imagen: "/club-lamarque/disciplinas/tenis.jpeg",
  },
];

export default function Disciplinas() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <h1 className="text-3xl font-bold text-center text-azulgrana-rojo mb-8">
        Disciplinas del Club
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {disciplinas.map((disc, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={disc.imagen}
              alt={disc.nombre}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-extrabold text-azulgrana-azul mb-2">{disc.nombre}</h2>
            <p className="text-center text-gray-700 mb-6">{disc.descripcion}</p>

            {/* Solo botón INSCRIBIRSE */}
            <Link
              to="/inscripciones"
              className="bg-azulgrana-rojo hover:bg-red-700 text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-semibold"
            >
              Inscribirse
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
