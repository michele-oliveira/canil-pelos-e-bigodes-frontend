import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAnimals } from "../hooks/useAnimals";
import toast from "../components/react-stacked-toast";
import Header from "../components/Header";
import ImageDrop from "../components/ImageDrop";
import Footer from "../components/Footer";
import { getAnimal, newAnimal, updateAnimal } from "../api/animals/animals.api";
import { deleteJwt } from "../utils/jwt";
import { getFileFromUrl } from "../utils/files";
import { AnimalType } from "../enums/AnimalType";
import { AnimalGender } from "../enums/AnimalGender";
import InvalidImageFileError from "../errors/files/InvalidImageFileError";
import InvalidFileAmountSelectedError from "../errors/files/InvalidFileAmountSelectedError";
import NotFoundError from "../errors/http/NotFoundError";
import UnauthorizedError from "../errors/http/UnauthorizedError";

function Report() {
  const [formData, setFormData] = useState({
    name: "",
    type: AnimalType.CAT,
    breed: "",
    age: "",
    gender: "",
    vaccines: [],
    behavior: "",
    image1: null,
    image2: null,
  });
  const [catVaccines, setCatVaccines] = useState();
  const [dogVaccines, setDogVaccines] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { animal_id: animalId } = useParams();
  const { clearUser } = useAuth();
  const { vaccines, error } = useAnimals();

  const formatRequestBody = (data) => {
    const body = {
      ...data,
      age: parseInt(data.age),
      description: data.behavior,
      image_1: data.image1,
      image_2: data.image2,
    };

    const formData = new FormData();
    if (animalId) formData.append("id", animalId);
    formData.append("name", body.name);
    formData.append("type", body.type);
    formData.append("breed", body.breed);
    formData.append("age", body.age);
    formData.append("gender", body.gender);
    formData.append("description", body.description);
    formData.append("image_1", body.image_1);
    formData.append("image_2", body.image_2);
    body.vaccines.forEach((vaccine) => {
      formData.append("vaccineIds", vaccine);
    });

    return formData;
  };

  const emptyForm = () => {
    setFormData({
      name: "",
      type: AnimalType.CAT,
      breed: "",
      age: "",
      gender: "",
      vaccines: [],
      behavior: "",
      image1: null,
      image2: null,
    });
  };

  const handleChange = (e) => {
    const {
      target: { name, value, type },
      type: eventType,
    } = e;

    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        type: value,
        vaccines: value === prevData.type ? prevData.vaccines : [],
      }));
    } else if (type === "checkbox") {
      const selectedVaccines = formData.vaccines.includes(value)
        ? formData.vaccines.filter((vaccine) => vaccine !== value)
        : [...formData.vaccines, value];
      setFormData((prevData) => ({
        ...prevData,
        vaccines: selectedVaccines,
      }));
    } else if (type === "file") {
      const selectedFile = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, [name]: selectedFile }));
    } else if (eventType === "drop") {
      const droppedFile = e.dataTransfer.files[0];
      setFormData((prevData) => ({ ...prevData, [name]: droppedFile }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = formatRequestBody(formData);

      if (requestBody.get("id")) {
        await updateAnimal(requestBody);

        toast({
          title: "Registro de animal atualizado com sucesso",
          type: "success",
          duration: 2000,
        });
        navigate("/");
      } else {
        await newAnimal(requestBody);

        emptyForm();
        toast({
          title: "Animal cadastrado com sucesso",
          type: "success",
          duration: 2000,
        });
      }
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        toast({
          title: "Acesso não autorizado",
          description:
            "Ops... parece que você não tem permissão para fazer isso. Por favor, faça login e tente novamente",
          type: "error",
          duration: 3500,
        });
        clearUser();
        deleteJwt();
        navigate("/login");
      } else if (error instanceof NotFoundError) {
        toast({
          title: "Animal não encontrado",
          description:
            "Ops... parece que tivemos um problema para encontrar este animal. Por favor, tente novamente ou acione o suporte",
          type: "error",
          duration: 3500,
        });
        navigate("/");
      } else {
        toast({
          title: "Houve um erro inesperado",
          description:
            "Lamentamos pelo ocorrido. Por favor, tente novamente mais tarde ou acione o suporte",
          type: "error",
          duration: 2500,
        });
      }
    }
  };

  const onSelectImageError = (error) => {
    if (error instanceof InvalidImageFileError) {
      toast({
        title: "Imagem inválida",
        description: "Por favor, envie uma imagem JPG, JPEG ou PNG",
        type: "warning",
        duration: 3000,
      });
    } else if (error instanceof InvalidFileAmountSelectedError) {
      toast({
        title: "Envio inválido",
        description: "Por favor, envie apenas uma imagem",
        type: "warning",
        duration: 3000,
      });
    } else {
      toast({
        title: "Erro inesperado ao atualizar dados",
        description:
          "Por favor, tente novamente. Se achar que se trata de uma falha, acione o suporte",
        type: "error",
        duration: 3000,
      });
      console.error(error);
    }
  };

  useEffect(() => {
    if (error) {
      toast({
        title: "Erro ao carregar informações das vacinas",
        description:
          "Encontramos um erro ao carregar informações sobre as vacinas. Tente novamente ou verifique sua conexão",
        type: "error",
        duration: 3000,
      });
      navigate("/");
    }
  }, [error, navigate]);

  useEffect(() => {
    if (vaccines) {
      setCatVaccines(vaccines.filter((vaccine) => vaccine.type === "cat"));
      setDogVaccines(vaccines.filter((vaccine) => vaccine.type === "dog"));
    }
  }, [vaccines]);

  useEffect(() => {
    (async () => {
      try {
        if (animalId) {
          setLoading(true);
          const animal = await getAnimal(animalId);

          if (animal) {
            const image1File = await getFileFromUrl(animal.image_1);
            const image2File = await getFileFromUrl(animal.image_2);
            const vaccineIds = animal.vaccines
              ? animal.vaccines.map((vaccine) => vaccine.id)
              : [];

            setFormData({
              id: animal.id,
              name: animal.name,
              type: animal.type,
              breed: animal.breed,
              age: animal.age,
              gender: animal.gender,
              behavior: animal.description,
              vaccines: vaccineIds,
              image1: image1File,
              image2: image2File,
            });
          }
        }
      } catch (error) {
        console.error(error);
        if (error instanceof NotFoundError) {
          toast({
            title: "Animal não encontrado",
            description:
              "O identificador informado não foi encontrado para nenhum animal",
            type: "error",
            duration: 3000,
          });
        } else {
          toast({
            title: "Erro ao carregar animal",
            description:
              "Houve um erro inesperado ao carregar as informações do animal",
            type: "error",
            duration: 3000,
          });
        }
        navigate("/");
      } finally {
        setLoading(false);
      }
    })();
  }, [animalId, navigate]);

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-4 lg:mx-auto p-6 bg-gray-800 text-white rounded-lg mt-10">
        <h1
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
          style={{ fontFamily: "Montserrat, serif" }}
        >
          Informe um Animal
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg mb-2">
              Nome do Animal
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Tipo de Animal</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value={AnimalType.CAT}
                  checked={formData.type === AnimalType.CAT}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span className="ml-2">Gato</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value={AnimalType.DOG}
                  checked={formData.type === AnimalType.DOG}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span className="ml-2">Cachorro</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="breed" className="block text-lg mb-2">
              Raça
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-lg mb-2">
              Idade
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-lg mb-2">
              Sexo
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            >
              <option value="">Selecione</option>
              <option value={AnimalGender.MALE}>Macho</option>
              <option value={AnimalGender.FEMALE}>Fêmea</option>
            </select>
          </div>

          <div>
            <label className="block text-lg mb-2">Vacinas</label>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg mb-4">Selecione as Vacinas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(formData.type === "cat" ? catVaccines : dogVaccines)?.map(
                  (vaccine, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name={vaccine.name}
                        value={vaccine.id}
                        checked={formData.vaccines.includes(vaccine.id)}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-green-600"
                      />
                      <span className="ml-2">{vaccine.name}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="behavior" className="block text-lg mb-2">
              Comportamento
            </label>
            <textarea
              id="behavior"
              name="behavior"
              value={formData.behavior}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="image1" className="block text-lg mb-2">
              Imagem 1 <span className="text-gray-400 text-sm">(Paisagem)</span>
            </label>
            <ImageDrop
              id="image1"
              name="image1"
              image={formData.image1}
              onChange={handleChange}
              onError={onSelectImageError}
              className="aspect-video"
            />
          </div>

          <div>
            <label htmlFor="image2" className="block text-lg mb-2">
              Imagem 2 <span className="text-gray-400 text-sm">(Retrato)</span>
            </label>
            <div className="flex justify-center">
              <div className="w-full md:w-3/4">
                <ImageDrop
                  id="image2"
                  name="image2"
                  image={formData.image2}
                  onChange={handleChange}
                  onError={onSelectImageError}
                  className="aspect-square"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Report;
