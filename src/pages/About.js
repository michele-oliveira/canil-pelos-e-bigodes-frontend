import Footer from "../components/Footer";
import Header from "../components/Header";
import gatinhos from "../assets/images/gatinhos.png";

function Report() {
  return (
    <div>
      <Header />
      <div className="relative bg-gray-800 m-10 p-6 rounded-lg flex flex-col md:flex-row items-center overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center flex-grow md:mr-6 mb-6 md:mb-0">
          <h1
            className="text-2xl flex justify-center md:text-3xl font-bold text-gray-50 mb-4 text-center md:text-left p-5"
            style={{ fontFamily: "Montserrat, serif" }}
          >
            Conheça nossos valores
          </h1>
          <p
            className="text-lg md:text-2xl text-gray-50 mb-6 text-center md:text-left"
            style={{ fontFamily: "Raleway, serif" }}
          >
            Somos mais que um canil, somos uma família apaixonada por
            transformar vidas – tanto dos cães e gatos quanto das pessoas que os
            adotam.
          </p>
          <p
            className="text-lg md:text-2xl text-gray-50 mb-6 text-center md:text-left"
            style={{ fontFamily: "Raleway, serif" }}
          >
            Com o coração cheio de amor, nossa missão diária é encontrar lares
            cheios de carinho e cuidado para nossos amigos de quatro patas. Cada
            cachorro e gato registrados tem uma história única, e cada adoção
            marca o começo de um novo capítulo cheio de esperança.
          </p>
          <p
            className="text-lg md:text-2xl text-gray-50 mb-6 text-center md:text-left"
            style={{ fontFamily: "Raleway, serif" }}
          >
            Acreditamos que todo animal merece uma segunda chance, uma
            oportunidade de ser amado incondicionalmente e de retribuir com
            afeto e lealdade. Nossa dedicação vai além do cuidado – oferecemos
            abrigo, conforto, e muito carinho a cada resgate.
          </p>
          <p
            className="text-lg md:text-2xl text-gray-50 mb-6 text-center md:text-left"
            style={{ fontFamily: "Raleway, serif" }}
          >
            Mais do que isso, buscamos lares responsáveis, onde nossos
            companheiros possam viver com dignidade e alegria. Ao adotar
            conosco, você não leva apenas um cachorro ou gato para casa, mas sim
            um novo membro da família, um amigo leal para a vida.
          </p>
          <p
            className="text-lg md:text-2xl text-gray-50 mb-6 text-center md:text-left"
            style={{ fontFamily: "Raleway, serif" }}
          >
            Adotar é um ato de amor, e estamos prontos para acompanhá-lo nessa
            jornada tão especial.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 m-5">
            <button className="bg-green-600 text-white w-full md:w-32 py-2 text-lg rounded hover:bg-green-700 transition-colors duration-300 mb-2 md:mb-0">
              Adote Agora
            </button>
            <button className="bg-green-600 text-white w-full md:w-56 py-2 text-lg rounded hover:bg-green-700 transition-colors duration-300">
              Informe uma Adoção
            </button>
          </div>
        </div>
        <img
          src={gatinhos}
          alt="Gatinhos"
          className="relative z-10 w-full md:w-72 rounded-full object-cover bg-gray-900 hover:bg-slate-400"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Report;
