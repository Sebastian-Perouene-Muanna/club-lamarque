import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Footer() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5,
      spacing: 15,
    },
    created(slider) {
      slider.moveToIdx(5, true, { duration: 20000 });
    },
    updated(slider) {
      slider.moveToIdx(5, true, { duration: 20000 });
    },
    animationEnded(slider) {
      slider.moveToIdx(slider.track.details.abs + 1, true, { duration: 20000 });
    },
  });

  return (
    <footer className="bg-azulgrana-azul text-white pt-10 mt-20">

      {/* Logo institucional */}
      <div className="flex justify-center my-6">
        <img
          src="/club-lamarque/esc/escudo11.png"
          alt="Logo Club Atlético Lamarque"
          className="h-40 w-auto"
        />
      </div>

      {/* Redes sociales */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Seguinos en nuestras redes</h3>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://facebook.com" className="text-white hover:text-[#B80000] transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-[#B80000] transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" className="text-white hover:text-[#B80000] transition duration-300">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Carrusel de sponsors */}
      <div className="my-10 w-full">
        <h3 className="text-center text-lg font-semibold mb-4">Sponsors Oficiales</h3>
        <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
          {[
            { nombre: "Atomik", logo: "/club-lamarque/sponsors/atomik.png" },
            { nombre: "Coca-Cola", logo: "/club-lamarque/sponsors/cocacola.png" },
            { nombre: "YPF", logo: "/club-lamarque/sponsors/ypf.png" },
            { nombre: "Banco Nación", logo: "/club-lamarque/sponsors/bna.png" },
            { nombre: "Adidas", logo: "/club-lamarque/sponsors/adidas.png" },
            { nombre: "Red Bull", logo: "/club-lamarque/sponsors/redbull.png" },
            { nombre: "Flow", logo: "/club-lamarque/sponsors/flow.png" },
          ].map((s, i) => (
            <div
              key={i}
              className="keen-slider__slide flex items-center justify-center px-6 py-4 h-32"
            >
              <img
                src={s.logo}
                alt={s.nombre}
                className="h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="bg-azulgrana-rojo text-white text-sm text-center py-4">
        © {new Date().getFullYear()} Club Atlético Lamarque – Todos los derechos reservados
      </div>
    </footer>
  );
}
