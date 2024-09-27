import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import dogcat from "../assets/images/cachorro e gato 2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white flex flex-col md:flex-row items-center justify-between mt-5">
      <img
        src={dogcat}
        alt="Cachorro e gato"
        className="w-32 md:w-44 rounded-lg md:mb-0"
      />
      <div className="flex flex-col items-center flex-grow text-center md:text-left">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Canil Pelos e Bigodes. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="text-sm">
          <Link to="/" className="hover:text-green-400 transition-colors duration-300">
            contato@canilpelosebigodes.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


