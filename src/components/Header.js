import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            src={logo}
            alt="Logo do Canil Pelos e Bigodes"
            className="w-32 sm:w-20 sm:h-20 rounded-full mr-4"
          />
          <Link to="/" className="text-2xl sm:text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pelos e Bigodes
          </Link>
        </div>
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 gap-5">
          <Link to="/" className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300">
            Home
          </Link>
          <Link to="/login" className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300">
            Adote um Amigo
          </Link>
          <Link to="/report" className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300">
            Informe uma Adoção
          </Link>
          <Link to="/about" className="text-base sm:text-sm text-green-400 hover:text-green-500 transition-colors duration-300">
            Sobre Nós
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


