import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu as MenuIcon, IoIosLogOut as LogoutIcon } from "react-icons/io";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            className="text-base sm:text-sm md:text-md text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-base sm:text-sm md:text-md text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Adote um Amigo
          </Link>
          <Link
            to="/report"
            className="text-base sm:text-sm md:text-md text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            Informe uma Adoção
          </Link>
          <button
            className="text-base sm:text-sm md:text-md text-green-400 hover:text-green-500 transition-colors duration-300"
          >
            <span className="flex items-center">
              <p className="mr-1">Sair</p>
              <LogoutIcon className="text-lg" />
            </span>
          </button>
        </nav>

        <nav
          className={`flex flex-col w-full gap-4 overflow-hidden md:hidden items-end font-semibold transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "mt-2 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
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
          <button
            className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300"
          >
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
