import dog1 from "../assets/images/adestrar.jpg";
import dog2 from "../assets/images/criança com cachorro.jpg";
import dog3 from "../assets/images/cachorro e gato 3.png";
import dog4 from "../assets/images/golden-crianca.jpg";
import dog5 from "../assets/images/playDog.jpg";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="p-4 m-10 rounded-lg flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
        <div className="relative bg-white rounded-full overflow-hidden flex items-center justify-center group">
          <img
            src={dog1}
            className="w-64 h-64 object-cover rounded-full"
            alt="Cachorro e gato para adoção"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 rounded-full">
            <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Como cuidar do seu amigo
            </p>
          </div>
        </div>

        <div className="relative bg-white rounded-full overflow-hidden flex items-center justify-center group">
            <img
              src={dog2}
              className="w-64 h-64 object-cover rounded-full"
              alt="Criança com cachorro"
            />
          <Link to="/notices" className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 rounded-full">
            <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Conheça as melhores rações
            </p>
          </Link>
        </div>

        <div className="relative bg-white rounded-full overflow-hidden flex items-center justify-center group">
          <img
            src={dog3}
            className="w-64 h-64 object-cover rounded-full"
            alt="Cachorro e gato para adoção"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 rounded-full">
            <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Como cuidar do seu amigo no calor?
            </p>
          </div>
        </div>

        <div className="relative bg-white rounded-full overflow-hidden flex items-center justify-center group">
          <img
            src={dog4}
            className="w-64 h-64 object-cover rounded-full"
            alt="Criança com cachorro"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 rounded-full">
            <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Saiba mais sobre seu amigo
            </p>
          </div>
        </div>

        <div className="relative bg-white rounded-full overflow-hidden flex items-center justify-center group">
          <img
            src={dog5}
            className="w-64 h-64 object-cover rounded-full"
            alt="Criança com cachorro"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 rounded-full">
            <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Como brincar com seu cachorro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
