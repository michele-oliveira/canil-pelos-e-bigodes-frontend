import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import dogCat from "../assets/images/cachorro e gato 2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white flex flex-col md:flex-row items-center justify-between">
      <img
        src={dogCat}
        alt="Cachorro e gato"
        className="w-32 md:w-44 rounded-lg mb-4 md:mb-0"
      />
      <div className="flex flex-col items-center flex-grow text-center md:text-left">
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300">
            <FaXTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="text-sm my-2 transition-colors duration-300">
          contato@canilpelosebigodes.com
        </p>
        <Link to="/about" className="text-sm font-semibold hover:text-green-400 transition-colors duration-300">
          Sobre nós
        </Link>
        <p className="my-4 md:mb-0 px-8 md:px-0 text-sm">
          &copy; {new Date().getFullYear()} Canil Pelos e Bigodes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


