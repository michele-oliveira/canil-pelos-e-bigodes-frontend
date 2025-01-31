import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "../components/react-stacked-toast";
import Loading from "./Loading";
import List from "./List";
import { listAnimals } from "../api/animals/animals.api";
import { ITEMS_PER_PAGE } from "./constants/config";

const Cards = () => {
  const [animals, setAnimals] = useState();
  const [animalFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

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
    <div className="flex flex-col items-center bg-slate-100 p-4 m-4 rounded-lg">
      <h1 className="text-3xl text-green-700 mb-6 pt-3 text-center font-bold">
        Conheça nossos amigos para adoção
      </h1>
      {animals ? (
        <List
          data={animals}
          component={() => (
            <>
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
                    <h2 className="text-2xl font-bold text-green-700 pt-2">
                      {animal.name}
                    </h2>
                    <p className="text-gray-600 mb-2">Idade: {animal.age}</p>
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
