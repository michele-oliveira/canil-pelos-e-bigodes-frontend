import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimals } from "../hooks/useAnimals";
import toast from "../components/react-stacked-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { newAnimal } from "../api/animals/animals.api";
import { AnimalType } from "../enums/AnimalType";
import { AnimalGender } from "../enums/AnimalGender";

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

  const navigate = useNavigate();
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
    formData.append("name", body.name);
    formData.append("type", body.type);
    formData.append("breed", body.breed);
    formData.append("age", body.age);
    formData.append("gender", body.gender);
    formData.append("vaccines", body.vaccines);
    formData.append("description", body.description);
    formData.append("image_1", body.image_1);
    formData.append("image_2", body.image_2);

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
    const { name, value, type } = e.target;
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
      setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = formatRequestBody(formData);

    await newAnimal(requestBody);

    emptyForm();
    toast({
      title: "Animal cadastrado com sucesso",
      type: "success",
      duration: 2000,
    });
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

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg mt-10">
        <h1
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
          style={{ fontFamily: "Montserrat, serif" }}
        >
          Informe um Animal
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg mb-2">Nome do Animal</label>
            <input
              type="text"
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
            <label className="block text-lg mb-2">Raça</label>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Idade</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Sexo</label>
            <select
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
            <label className="block text-lg mb-2">Comportamento</label>
            <textarea
              name="behavior"
              value={formData.behavior}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-lg mb-2">Imagem 1</label>
            <input
              type="file"
              name="image1"
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Imagem 2</label>
            <input
              type="file"
              name="image2"
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
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
