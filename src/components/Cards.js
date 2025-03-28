import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter as FilterIcon } from "react-icons/fa";
import toast from "../components/react-stacked-toast";
import Loading from "./Loading";
import List from "./List";
import { listAnimals } from "../api/animals/animals.api";
import { ITEMS_PER_PAGE } from "./constants/config";
import { AnimalType } from "../enums/AnimalType";

const Cards = () => {
  const [animals, setAnimals] = useState();
  const [animalFilter, setAnimalFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAnimalType = (animalType) => {
    switch (animalType) {
      case AnimalType.CAT:
        return "Gato";
      case AnimalType.DOG:
        return "Cachorro";
      default:
        return "";
    }
  };

  const fetchAnimals = async (page, animalType = null) => {
    try {
      setLoading(true);

      const { animals: animalsResponse, totalPages } = await listAnimals(
        page,
        ITEMS_PER_PAGE,
        animalType
      );

      if (animals && page !== currentPage) {
        setAnimals((previousValue) => [...previousValue, ...animalsResponse]);
      } else {
        setAnimals(animalsResponse);
      }
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
      setAnimals([]);
      toast({
        title: "Erro inesperado",
        description: "Houve um erro durante a sincronização dos animais",
        type: "error",
        duration: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChangeAnimalFilter = (e) => {
    if (e.target.value) {
      if (Object.values(AnimalType)) {
        setAnimalFilter(e.target.value);
      } else {
        const enumValues = Object.values(AnimalType);
        const joinedValues =
          enumValues.length === 2
            ? `'${enumValues[0]}' or '${enumValues[1]}'`
            : enumValues
                .slice(0, -1)
                .map((value) => `'${value}'`)
                .join(", ") + `, or ${enumValues.at(-1)}`;
        console.error(`animalType must be ${joinedValues}`);
        setAnimalFilter(null);
      }
    } else {
      setAnimalFilter(null);
    }
  };

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    }
  }, [loading, currentPage, totalPages]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    fetchAnimals(currentPage, animalFilter);
  }, [currentPage, animalFilter]);

  return (
    <div
      id="animal-cards"
      className="flex flex-col items-center bg-slate-100 p-4 m-4 rounded-lg"
    >
      <h1 className="text-3xl text-green-700 mb-6 pt-3 text-center font-bold">
        Conheça nossos amigos para adoção
      </h1>
      {animals ? (
        <List
          data={animals}
          component={() => (
            <>
              <div className="flex w-full mb-4 lg:mb-2 justify-end items-center">
                <FilterIcon className="text-green-700" />
                <div>
                  <select
                    value={animalFilter}
                    onChange={handleChangeAnimalFilter}
                    className="bg-transparent text-lg md:text-base font-semibold text-green-700"
                  >
                    <option value="">Todos os tipos</option>
                    <option value={AnimalType.DOG}>Cachorros</option>
                    <option value={AnimalType.CAT}>Gatos</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-[1900px]">
                {animals.map((animal) => (
                  <div
                    key={animal.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden p-4"
                  >
                    <img
                      src={animal.image_1}
                      alt={`Imagem de ${animal.name}`}
                      className="w-full h-64 object-cover mb-4"
                    />
                    <h2 className="text-2xl font-bold leading-4 text-green-700 pt-2">
                      {animal.name}
                    </h2>
                    <p className="mb-2 text-sm text-gray-500">
                      {getAnimalType(animal.type)}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Idade: {animal.age + (animal.age > 1 ? " meses" : " mês")}
                    </p>
                    <p className="text-gray-600 mb-2">Raça: {animal.breed}</p>
                    <p className="text-gray-700 mb-4">{animal.description}</p>
                    <Link to={`/animal/${animal.id}`}>
                      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">
                        Saber mais
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
              {loading && (
                <div className="flex mt-8 w-full max-w-[1900px] justify-center">
                  <Loading text="Carregando mais amiguinhos..." />
                </div>
              )}
            </>
          )}
          emptyComponent={() => (
            <div className="border rounded-lg m-5 p-5 flex flex-col justify-center items-center bg-white ">
              <p className="text-gray-800 font-bold">
                Nenhum amiguinho encontrado :(
              </p>
              <p className="mt-5 text-gray-900 text-sm">
                A busca não retornou nenhum animal. Se você acha que isto pode
                ser um erro de sistema, por favor, contate o suporte.
              </p>
            </div>
          )}
        />
      ) : (
        <div className="mt-4">
          <Loading text="Carregando amiguinhos..." />
        </div>
      )}
    </div>
  );
};

export default Cards;
