import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import toast from "../components/react-stacked-toast";
import Container from "../components/Container";
import Content from "../components/Content";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Item from "../components/Item";
import Footer from "../components/Footer";
import { getAnimal } from "../api/animals/animals.api";
import { newAdoptionRequest } from "../api/adoptionRequests/adoptionRequests.api";
import { deleteJwt } from "../utils/jwt";
import NotFoundError from "../errors/http/NotFoundError";
import ConflictError from "../errors/http/ConflictError";

function Animal() {
  const [animal, setAnimal] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { animal_id: animalId } = useParams();
  const { clearUser } = useAuth();

  const fetchAnimal = async (animalId) => {
    try {
      setIsLoading(true);
      const animal = await getAnimal(animalId);
      setAnimal(animal);
    } catch (error) {
      if (error instanceof NotFoundError) {
        toast({
          title: "Amiguinho não encontrado",
          description:
            "Nenhum animal foi encontrado para o id informado. Caso o erro persista, acione o suporte",
          type: "error",
          duration: 3000,
        });
      } else {
        toast({
          title: "Erro inesperado",
          description:
            "Houve um erro durante o carregamento das informações deste amiguinho",
          type: "error",
          duration: 3000,
        });
      }
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const getGender = (gender) => {
    switch (gender) {
      case "male":
        return "Macho";
      case "female":
        return "Fêmea";
      default:
        return "";
    }
  };

  const handleRequestAdoption = async (animalId) => {
    try {
      await newAdoptionRequest(animalId);
      toast({
        title: "Solicitação enviada com sucesso",
        type: "success",
        duration: 2500,
      });
      navigate("/");
    } catch (error) {
      if (error instanceof NotFoundError) {
        toast({
          title: "Algo deu errado",
          description:
            "O animal pode ter sido adotado, removido ou sua sessão expirou",
          type: "error",
          duration: 3500,
        });
        clearUser();
        deleteJwt();
        navigate("/login");
      } else if (error instanceof ConflictError) {
        toast({
          title: "Ops, tivemos um conflito na sua solicitação",
          description:
            "Este animal pode já ter sido adotado ou você pode ter uma solicitação pendente. Verifique e tente novamente ou acione o suporte, caso achar que esta seja uma falha do sistema",
          type: "error",
          duration: 5500,
        });
        navigate("/");
      } else {
        toast({
          title: "Tivemos um erro inesperado",
          description:
            "Um erro inesperado ocorreu durante a sua requisição. Por favor, tente novamente ou acione o suporte caso achar que esta seja uma falha do sistema",
          type: "error",
          duration: 4500,
        });
        navigate("/");
      }
    }
  };

  useEffect(() => {
    fetchAnimal(animalId);
  }, [animalId]);

  return (
    <Container>
      <Header />
      <Content>
        <div className="m-10 flex justify-center flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Conheça seu novo companheiro
          </h1>
          <p className="text-lg pt-5 text-center">
            Seu companheirinho para todas as horas espera por você!
          </p>
          <p className="text-lg pt-5 text-center">
            Basta clicar no anúncio e você será redirecionado para o WhatsApp do
            anunciante para combinarem a melhor forma de adotá-lo.
          </p>
        </div>

        {isLoading ? (
          <Loading text="Carregando informações deste amiguinho..." />
        ) : (
          <Item
            data={animal}
            component={(data) => (
              <div className="flex w-full justify-center">
                <div className="flex flex-col md:flex-row justify-center items-center mx-2 mb-4 px-2 py-4 lg:px-24 max-w-[1900px] bg-gray-800 rounded-lg">
                  <img
                    src={data.image_2}
                    className="w-32 h-32 md:w-48 md:h-48 lg:w-96 lg:h-96 md:mr-6 mb-4 md:mb-0 object-cover rounded-full"
                    alt="Cachorro para adoção"
                  />
                  <div className="flex flex-col p-1 lg:p-24 text-lg md:text-xl lg:text-2xl text-white">
                    <p className="mb-2">
                      <b>Nome: </b>
                      {data.name}
                    </p>
                    <p className="mb-2">
                      <b>Sexo: </b>
                      {getGender(data.gender)}
                    </p>
                    <p className="mb-2">
                      <b>Idade: </b>
                      {data.age + (data.age > 1 ? " meses" : " mês")}
                    </p>
                    {data.vaccines.length > 0 && (
                      <p className="mb-2">
                        <b>Vacinas: </b>
                        {data.vaccines
                          .map((vaccine) => vaccine.name)
                          .join(", ")}
                      </p>
                    )}
                    <p className="mb-2">
                      <b>Comportamento: </b>
                      {data.description}
                    </p>
                    <p className="mb-2">
                      <b>Raça:</b> Border Collie
                    </p>

                    <div className="flex justify-center mt-4 md:mt-6">
                      <button
                        onClick={() => handleRequestAdoption(data.id)}
                        className="w-96 py-2 bg-green-600 text-white hover:bg-green-700 rounded transition-colors duration-300"
                      >
                        Solicitar adoção
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            emptyComponent={() => (
              <div className="flex w-full justify-center">
                <div className="flex flex-col m-5 mt-10 p-5 max-w-[960px] justify-center items-center border rounded-lg">
                  <p className="text-gray-800 font-bold">
                    Amiguinho não encontrado
                  </p>
                  <p className="mt-5 text-gray-900 text-sm">
                    O amiguinho que você está procurando não foi encontrado. O
                    sistema pode estar indisponível ou este amiguinho pode ter
                    sido removido
                  </p>
                </div>
              </div>
            )}
          />
        )}
      </Content>
      <Footer />
    </Container>
  );
}

export default Animal;
