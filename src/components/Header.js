import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoMdMenu as MenuIcon,
  IoIosLogOut as LogoutIcon,
} from "react-icons/io";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdoptionRequestsSubmenuOpen, setIsAdoptionRequestsSubmenuOpen] =
    useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center mb-0 sm:mb-0">
          <img
            src={logo}
            alt="Logo do Canil Pelos e Bigodes"
            className="w-12 sm:w-14 md:w-16 lg:w-20 rounded-full mr-4"
          />
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Pelos e Bigodes
          </Link>
        </div>
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon size={28} />
        </button>
        <nav className="hidden md:flex gap-5 space-x-1">
          <Link
            to="/"
            className="py-2 text-base sm:text-sm md:text-md text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="py-2 text-base sm:text-sm md:text-md text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Adote um Amigo
          </Link>
          <Link
            to="/report"
            className="py-2 text-base sm:text-sm md:text-md text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Informe uma Adoção
          </Link>
          <div className="relative group py-2 text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300">
            <span className="cursor-pointer">Solicitações para adoção</span>
            <ul className="absolute hidden left-1/2 transform -translate-x-1/2 mt-2 p-3 z-30 group-hover:block bg-gray-800 rounded-md border border-gray-500 shadow-md">
              <li>
                <Link
                  to="/made-adoption-requests"
                  className="block mb-2 text-nowrap hover:text-green-600"
                >
                  Minhas solicitações
                </Link>
              </li>
              <li>
                <Link
                  to="/received-adoption-requests"
                  className="block text-nowrap hover:text-green-600"
                >
                  Solicitações recebidas
                </Link>
              </li>
            </ul>
          </div>
          <button className="py-2 text-base sm:text-sm md:text-md text-green-400 hover:text-green-500 transition-colors duration-300">
            <span className="flex items-center">
              <p className="mr-1">Sair</p>
              <LogoutIcon className="text-lg" />
            </span>
          </button>
        </nav>

        <nav
          className={`flex flex-col w-full gap-4 overflow-hidden md:hidden items-end font-semibold transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "mt-2 max-h-64 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <Link
            to="/"
            className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Adote um Amigo
          </Link>
          <Link
            to="/report"
            className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Informe uma Adoção
          </Link>
          <div>
            <button
              type="button"
              onClick={() =>
                setIsAdoptionRequestsSubmenuOpen(!isAdoptionRequestsSubmenuOpen)
              }
              className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300"
            >
              Solicitações para adoção
            </button>
            <ul
              className={`flex flex-col items-end pr-1.5 leading-6 transition-all duration-300 ease-in-out transform ${
                isAdoptionRequestsSubmenuOpen
                  ? "mt-1 max-h-12 opacity-100"
                  : "mt-0 max-h-0 opacity-0"
              } border-r border-gray-500`}
            >
              <li>
                <Link
                  className="text-green-300 hover:text-green-500"
                  to="/made-adoption-requests"
                >
                  Minhas solicitações
                </Link>
              </li>
              <li>
                <Link
                  className="text-green-300 hover:text-green-500"
                  to="/received-adoption-requests"
                >
                  Solicitações recebidas
                </Link>
              </li>
            </ul>
          </div>
          <button className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300">
            <span className="flex items-center">
              <p className="mr-1">Sair</p>
              <LogoutIcon className="text-lg" />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
