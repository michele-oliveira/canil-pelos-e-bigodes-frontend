import dog from "../assets/images/cachorros.jpg";
import patinha from "../assets/images/patinhas.png";

const Folder = () => {
  return (
    <div className="relative bg-gray-100 mt-5 mx-4 p-6 rounded-lg flex flex-col md:flex-row items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${patinha})`,
          backgroundSize: 'cover',
          opacity: 0.08 
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col justify-center flex-grow md:mr-6 mb-6 md:mb-0">
        <h1 className="text-2xl flex justify-center md:text-3xl font-bold text-green-700 mb-4 text-center md:text-left pb-5 " style={{ fontFamily: 'Montserrat, serif' }}>
          Adote um Amigo e Transforme sua Vida!
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-6 text-center md:text-left" style={{ fontFamily: 'Raleway, serif' }}>
          Nada se compara à alegria de ter um amigo peludo ao seu lado. Além de
          oferecer amor incondicional, adotar um cão ou gato muda a vida deles e
          a sua para melhor. Eles trazem felicidade, companheirismo e diversão
          para o seu lar. Dê a eles uma segunda chance e receba um amor que vai
          durar para sempre!
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
      <img src={dog} alt="Cachorrinhos" className="relative z-10 w-full md:w-60 rounded-lg object-cover" />
    </div>
  );
};

export default Folder;



