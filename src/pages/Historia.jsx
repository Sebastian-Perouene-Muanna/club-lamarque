import React from "react";

export default function Historia() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat flex flex-col items-center px-4 py-16 space-y-20"
      style={{ backgroundImage: "url('/club-lamarque/fondos/humo2.png')" }}
    >
      {/* Fondo escudo central fijo y sutil */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img
          src="/club-lamarque/esc/escudo5.jpeg"
          alt="Escudo de fondo"
          className="w-[400px] h-[400px] object-contain"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl space-y-20 text-white">

        {/* Título principal */}
        <h1 className="text-5xl font-extrabold text-center text-azulgrana-rojo tracking-wide drop-shadow-lg">
          Historia del Club Atlético Lamarque
        </h1>

        {/* Introducción extendida */}
        <section className="space-y-6 text-lg leading-relaxed bg-black bg-opacity-50 p-8 rounded-xl shadow-xl">
          <p className="text-justify">
            El <span className="font-bold text-azulgrana-rojo">Club Atlético Lamarque</span> nació el 
            <span className="font-bold text-azulgrana-rojo"> 26 de octubre de 1919</span> en el corazón de Río Negro, impulsado por 
            el sueño de forjar comunidad a través del deporte.
          </p>
          <p className="text-justify">
            Apodado el <span className="font-bold text-azulgrana-azul">"Decano del Valle Medio"</span>, lleva con orgullo los colores
            <span className="font-bold text-azulgrana-rojo"> rojo</span> y
            <span className="font-bold text-azulgrana-azul"> azul</span>, símbolos de coraje, pasión y pertenencia.
          </p>
          <p className="text-justify">
            Desde sus primeras competencias en fútbol, el Club creció exponencialmente, integrando disciplinas
            que enriquecieron su propuesta social y formativa:
          </p>
          <ul className="list-disc list-inside ml-6 font-semibold space-y-1">
            <li>Vóley: Equipos mixtos, formativos y federados (desde 1950)</li>
            <li>Básquet: Escuelas juveniles y competencias regionales (desde 1965)</li>
            <li>Hockey sobre césped: femenino y masculino, competitivo (desde 1978)</li>
            <li>Atletismo y Patín artístico: inclusión de jóvenes de toda la región (desde 1985)</li>
          </ul>
          <p className="text-justify">
            A través de los años, el Club Atlético Lamarque consolidó su identidad
            como formador de deportistas y ciudadanos, generando sentido de pertenencia
            en generaciones enteras.
          </p>
        </section>

        {/* Visión y Misión en forma de escudos */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Visión */}
          <div className="relative bg-azulgrana-azul text-white p-10 w-72 h-72 flex flex-col justify-center items-center text-center rounded-full shadow-2xl border-4 border-white">
            <h2 className="text-2xl font-bold mb-3">Nuestra Visión</h2>
            <p className="text-sm leading-snug">
              Ser líderes en el desarrollo humano y deportivo del Valle Medio, impulsando valores de superación, solidaridad y excelencia.
            </p>
          </div>

          {/* Misión */}
          <div className="relative bg-azulgrana-rojo text-white p-10 w-72 h-72 flex flex-col justify-center items-center text-center rounded-full shadow-2xl border-4 border-white">
            <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
            <p className="text-sm leading-snug">
              Promover el deporte como herramienta de transformación social, transmitiendo pasión, respeto y pertenencia azulgrana en cada acción.
            </p>
          </div>
        </section>

        {/* Momentos históricos animados */}
        <section className="bg-black bg-opacity-40 rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center text-azulgrana-rojo mb-8">
            📜 Momentos Históricos
          </h2>
          <div className="h-52 overflow-hidden relative">
            <div className="absolute top-full animate-scroll-credits w-full text-center space-y-5 text-lg">
              {[
                "1919: Fundación del Club Atlético Lamarque.",
                "1925: Primera participación oficial en torneos regionales.",
                "1950: Creación del primer equipo de vóley femenino.",
                "1965: Inauguración del gimnasio cerrado.",
                "1978: Incorporación oficial del hockey sobre césped.",
                "1985: Escuela de atletismo y patín artístico abre sus puertas.",
                "1986: Campeones de la Liga Avellaneda de fútbol.",
                "1995: Bicampeonato en fútbol regional.",
                "2010: Campeonas en Hockey Sub-18 a nivel provincial.",
                "2021: Campeones del Apertura y Clausura en fútbol regional.",
              ].map((momento, i) => (
                <p key={i}>{momento}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Video institucional */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-azulgrana-azul">🎥 Video Institucional</h2>
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/XdEQGnz2x5Y"
              title="Video institucional del Club Atlético Lamarque"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </section>

      </div>
    </div>
  );
}
