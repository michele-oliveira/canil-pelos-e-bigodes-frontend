import { Link } from "react-router-dom";
import dog1 from "../assets/images/cachorros.jpg";

const Cards = () => {
  const pets = [
    {
      name: "Buddy",
      age: "2 anos",
      breed: "Golden Retriever",
      description: "Amigável e cheio de energia, ótimo para famílias com crianças.",
      image: dog1,
    },
    {
      name: "Luna",
      age: "3 anos",
      breed: "Labrador",
      description: "Calma e afetuosa, Luna adora estar ao ar livre e é muito carinhosa.",
      image: dog1,
    },
    {
      name: "Max",
      age: "1 ano",
      breed: "Beagle",
      description: "Curioso e cheio de vida, Max precisa de espaço para correr e brincar.",
      image: dog1,
    },
    {
      name: "Max",
      age: "1 ano",
      breed: "Beagle",
      description: "Curioso e cheio de vida, Max precisa de espaço para correr e brincar.",
      image: dog1,
    },
    {
      name: "Max",
      age: "1 ano",
      breed: "Beagle",
      description: "Curioso e cheio de vida, Max precisa de espaço para correr e brincar.",
      image: dog1,
    },
    {
      name: "Max",
      age: "1 ano",
      breed: "Beagle",
      description: "Curioso e cheio de vida, Max precisa de espaço para correr e brincar.",
      image: dog1,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-slate-100 p-4 m-4 rounded-lg">
      <h1 className="text-3xl text-green-700 mb-6 pt-3 text-center font-bold">
        Conheça nossos amigos para adoção
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-[1900px]">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-4"
          >
            <img
              src={pet.image}
              alt={`Imagem de ${pet.name}`}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-green-700 pt-2">{pet.name}</h2>
            <p className="text-gray-600 mb-2">Idade: {pet.age}</p>
            <p className="text-gray-600 mb-2">Raça: {pet.breed}</p>
            <p className="text-gray-700 mb-4">{pet.description}</p>
            <Link to="/adopted">
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">
              Saber mais
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
