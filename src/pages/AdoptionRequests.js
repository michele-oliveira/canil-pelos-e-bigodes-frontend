import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import toast from "../components/react-stacked-toast";
import {
  FaClock as ClockIcon,
  FaCheck as CheckIcon,
  FaXmark as CloseIcon,
  FaWhatsapp as WhatsAppIcon,
} from "react-icons/fa6";
import Header from "../components/Header";
import Loading from "../components/Loading";
import List from "../components/List";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { getAdoptionRequests } from "../api/adoptionRequests/adoptionRequests.api";
import { ITEMS_PER_PAGE } from "../components/constants/config";
import InvalidPropsError from "../errors/components/InvalidPropsError";
import BadRequestError from "../errors/http/BadRequestError";

const AdoptionRequests = ({ type }) => {
  const [adoptionRequests, setAdoptionRequests] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAnimalType = (type, capitalized = false) => {
    switch (type) {
      case "dog":
        return capitalized ? "Cachorro" : "cachorro";
      case "cat":
        return capitalized ? "Gato" : "gato";
      default:
        return capitalized ? "Não informado" : "não informado";
    }
  };

  const getBackgroundFromStatus = (status) => {
    switch (status) {
      case "pending":
        return "bg-gray-200";
      case "accepted":
        return "bg-green-200";
      case "rejected":
        return "bg-red-200";
      default:
        return "";
    }
  };

  const getLabeledIconFromStatus = (status) => {
    switch (status) {
      case "pending":
        return (
          <span className="flex flex-row items-center text-gray-700">
            <p className="mr-1">Pendente</p>
            <ClockIcon />
          </span>
        );
      case "accepted":
        return (
          <span className="flex flex-row items-center text-green-700">
            <p className="mr-1">Aceita</p>
            <CheckIcon />
          </span>
        );
      case "rejected":
        return (
          <span className="flex flex-row items-center text-red-700">
            <p className="mr-1">Rejeitada</p>
            <CloseIcon />
          </span>
        );
      default:
        return null;
    }
  };

  const fetchAdoptionRequests = async (page) => {
    try {
      setLoading(true);

      if (!type || !["made", "received"].includes(type)) {
        throw new InvalidPropsError("'type' prop must be 'made' or 'received'");
      }
      const typeFilter = type === "made" ? "made" : "received";
      const { adoptionRequests: adoptionRequestsResponse, totalPages } =
        await getAdoptionRequests(page, ITEMS_PER_PAGE, typeFilter);

      if (adoptionRequests) {
        setAdoptionRequests((previousValue) => [
          ...previousValue,
          ...adoptionRequestsResponse,
        ]);
      } else {
        setAdoptionRequests(adoptionRequestsResponse);
      }
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
      setAdoptionRequests([]);
      if (error instanceof InvalidPropsError) {
        toast({
          title: "Ops... tivemos um erro inesperado",
          description:
            "Parece que esta página foi chamada com parâmetros inválidos",
          type: "error",
          duration: 3000,
        });
      } else if (error instanceof BadRequestError) {
        toast({
          title: "Erro na requisição",
          description:
            "Parece que a requisição foi realizada com parâmetros inválidos. Por favor, tente novamente ou acione o suporte caso necessário",
          type: "error",
          duration: 3500,
        });
      } else {
        toast({
          title: "Erro inesperado durante a requisição",
          description:
            "Houve um erro inesperado durante a requisição. Por favor, tente novamente ou acione o suporte caso necessário",
          type: "error",
          duration: 3000,
        });
      }
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
    fetchAdoptionRequests(currentPage);
  }, [currentPage]);

  if (!["made", "received"].includes(type)) {
    console.error("'type' prop must be 'made' or 'received'");
    return null;
  }

  return (
    <Container>
      <Header />
      <div className="flex flex-col items-center bg-slate-100 p-4 rounded-lg">
        <h1 className="text-3xl text-green-700 mb-6 pt-3 text-center font-bold">
          Solicitações para adoção
        </h1>

        <div className="w-full max-w-[1700px]">
          {adoptionRequests ? (
            <List
              data={adoptionRequests}
              component={() => (
                <>
                  {adoptionRequests.map((adoptionRequest) => (
                    <div
                      className={`mt-4 p-4 ${getBackgroundFromStatus(
                        adoptionRequest.status
                      )} rounded-lg`}
                      key={adoptionRequest.id}
                    >
                      <div className="flex justify-end mb-3">
                        {getLabeledIconFromStatus(adoptionRequest.status)}
                      </div>

                      <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                          <img
                            src={adoptionRequest.animal.image_1}
                            alt={`Contains a ${adoptionRequest.animal.type}`}
                            className="h-36 w-36 rounded-full"
                          />
                          <div className="ml-4">
                            <p className="mb-2">
                              Animal:{" "}
                              {getAnimalType(adoptionRequest.animal.type)}
                            </p>
                            <p>Nome: {adoptionRequest.animal.name}</p>
                            <p>Raça: {adoptionRequest.animal.breed}</p>
                            <p>Idade: {adoptionRequest.animal.age} meses</p>
                          </div>
                        </div>

                        <div>
                          <p>
                            Autor da solicitação:{" "}
                            {adoptionRequest.intender.name}
                          </p>
                          <p className="mt-3 mb-1">Contato</p>
                          <p>Telefone: {adoptionRequest.intender.phone}</p>
                          <p>Email: {adoptionRequest.intender.email}</p>
                        </div>
                      </div>

                      <div className="flex mt-3 gap-4 justify-end">
                        <button className="flex items-center gap-1 p-2 rounded-md bg-yellow-300 hover:bg-yellow-400">
                          Rejeitar
                        </button>
                        <button className="flex items-center gap-1 p-2 rounded-md bg-yellow-300 hover:bg-yellow-400">
                          Contactar <WhatsAppIcon />
                        </button>
                        <button className="flex items-center gap-1 p-2 rounded-md bg-yellow-300 hover:bg-yellow-400">
                          Aceitar
                        </button>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex mt-8 w-full max-w-[1900px] justify-center">
                      <Loading text="Carregando mais solicitações..." />
                    </div>
                  )}
                </>
              )}
              emptyComponent={() => (
                <div className="border rounded-lg m-5 p-5 flex flex-col justify-center items-center bg-white ">
                  <p className="text-gray-800 font-bold">Sem resultados</p>
                  <p className="mt-5 text-gray-900 text-sm">
                    A busca não retornou nenhum resultado. Se você acha que isto
                    pode ser um erro de sistema, por favor, contate o suporte.
                  </p>
                </div>
              )}
            />
          ) : (
            <div className="mt-8">
              <Loading text="Carregando solicitações..." />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

AdoptionRequests.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AdoptionRequests;
