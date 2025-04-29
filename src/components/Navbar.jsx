import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAuth } from "../context/AuthContext";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const { usuario } = useAuth();

  return (
    <nav className="relative h-60 shadow-md bg-navbar-humo overflow-visible">
      {/* Escudo centrado con efecto latido */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <Link to="/">
          <img
            src="/club-lamarque/esc/escudo22.png"
            alt="Escudo CAL"
            className="h-48 w-auto drop-shadow-lg animate-latido cursor-pointer"
          />
        </Link>
      </div>

      {/* Menú hamburguesa */}
      <div className="absolute top-6 right-6 z-20">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="text-white text-2xl p-2 rounded-full bg-transparent hover:bg-[#B80000] transition-all duration-300 focus:outline-none">
              <FaBars />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md z-50 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/" className={`block px-4 py-2 ${active ? "bg-[#B80000] text-white" : ""}`}>
                      Inicio
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link to="/disciplinas" className={`block px-4 py-2 ${active ? "bg-[#B80000] text-white" : ""}`}>
                      Disciplinas
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link to="/historia" className={`block px-4 py-2 ${active ? "bg-[#B80000] text-white" : ""}`}>
                      Historia
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link to="/tienda" className={`block px-4 py-2 ${active ? "bg-[#B80000] text-white" : ""}`}>
                      Tienda
                    </Link>
                  )}
                </Menu.Item>

                {usuario ? (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/perfil" className={`block px-4 py-2 ${active ? "bg-[#B80000] text-white" : ""}`}>
                          Perfil
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/cuotas" className={`block px-4 py-2 ${active ? "bg-[#B80000] text-white" : ""}`}>
                          Cuotas
                        </Link>
                      )}
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/asociarme" className={`block px-4 py-2 ${active ? "bg-[#B80000] text-white" : ""}`}>
                          Asociarme
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/login" className={`block px-4 py-2 ${active ? "bg-[#B80000] text-white" : ""}`}>
                          Iniciar sesión
                        </Link>
                      )}
                    </Menu.Item>
                  </>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}
