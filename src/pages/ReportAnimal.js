import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

function Report() {
  const [formData, setFormData] = useState({
    nome: "",
    raca: "",
    idade: "",
    sexo: "",
    vacinas: {
      gato: false,
      cachorro: false,
    },
    vacinasSelecionadas: [],
    comportamento: "",
    imagem: null,
  });

  const vacinasGato = [
    "Vacina tríplice felina (V3)",
    "Vacina quádrupla felina (V4)",
    "Vacina quíntupla felina (V5)",
    "Vacina antirrábica",
  ];

  const vacinasCachorro = [
    "Vacina V8",
    "Vacina V10",
    "Vacina contra a raiva",
    "Vacina contra giárdia",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "gato" || name === "cachorro") {

        setFormData((prevData) => ({
          ...prevData,
          vacinas: { ...prevData.vacinas, [name]: checked },
          vacinasSelecionadas: checked
            ? name === "gato"
              ? vacinasGato
              : vacinasCachorro
            : [],
        }));
      } else {

        const selectedVacinas = formData.vacinasSelecionadas.includes(name)
          ? formData.vacinasSelecionadas.filter((vacina) => vacina !== name)
          : [...formData.vacinasSelecionadas, name];
        setFormData((prevData) => ({
          ...prevData,
          vacinasSelecionadas: selectedVacinas,
        }));
      }
    } else if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Raça</label>
            <input
              type="text"
              name="raca"
              value={formData.raca}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Idade</label>
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Sexo</label>
            <select
              name="sexo"
              value={formData.sexo}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            >
              <option value="">Selecione</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>

          <div>
            <label className="block text-lg mb-2">Vacinas</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="gato"
                  checked={formData.vacinas.gato}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span className="ml-2">Gato</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="cachorro"
                  checked={formData.vacinas.cachorro}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span className="ml-2">Cachorro</span>
              </label>
            </div>
          </div>


          {formData.vacinas.gato || formData.vacinas.cachorro ? (
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg mb-4">Selecione as Vacinas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.vacinasSelecionadas.map((vacina, index) => (
                  <label key={index} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name={vacina}
                      checked={formData.vacinasSelecionadas.includes(vacina)}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-green-600"
                    />
                    <span className="ml-2">{vacina}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <label className="block text-lg mb-2">Comportamento</label>
            <textarea
              name="comportamento"
              value={formData.comportamento}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-lg mb-2">Upload de Imagem</label>
            <input
              type="file"
              name="imagem"
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
