import Footer from "../components/Footer";
import Header from "../components/Header";
import border from "../assets/images/borderCollie.jpg";

function Adopted() {
  return (
    <div>
      <Header />
      <div className="m-10 flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Conheça seu novo companheiro
        </h1>
        <p className="text-lg pt-5">
          Seu companheirinho para todas as horas espera por você!
        </p>
        <p className="text-lg p-5">
          Basta clicar no anúncio e você será redirecionado para o WhatsApp do
          anunciante para combinarem a melhor forma de adotá-lo.
        </p>
      </div>

      <div className="border bg-gray-800 m-10 px-24 rounded-lg flex flex-col md:flex-row justify-center items-center">
        <img
          src={border}
          className="w-96 h-96 object-cover rounded-full md:mr-6 mb-4 md:mb-0"
          alt="Cachorro para adoção"
        />
        <div className="flex flex-col text-white text-2xl p-24">
          <p className="mb-2">
            <b>Nome: </b> Rex
          </p>
          <p className="mb-2">
            <b>Sexo:</b> Macho
          </p>
          <p className="mb-2">
            <b>Idade:</b> 6 meses
          </p>
          <p className="mb-2">
            <b>Vacinas:</b> v8 e v10, antirrábica, gripe canina, giárdia,
            leishmaniose.
          </p>
          <p className="mb-2">
            <b>Comportamento:</b> Conheça o nosso adorável Border Collie de 6
            meses! Este filhote energético e inteligente está em busca de um lar
            amoroso. Com seu pelagem macia em preto e branco e seus olhos
            expressivos, ele certamente irá conquistar seu coração. O Rex é
            sociável e adora interagir com pessoas e outros animais, tornando-se
            um ótimo companheiro para toda a família.
          </p>
          <p className="mb-4">
            <b>Raça:</b> Border Collie
          </p>

          <div className="flex justify-center pt-10">
            <button className="w-96 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors duration-300">
              Adotar
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Adopted;
