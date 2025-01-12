import InfoCard from "./InfoCard";

import img1 from "../assets/images/adestrar.jpg";
import img2 from "../assets/images/criança com cachorro.jpg";
import img3 from "../assets/images/cachorro e gato 3.png";
import img4 from "../assets/images/golden-crianca.jpg";
import img5 from "../assets/images/playDog.jpg";

const Info = () => {
  return (
    <div className="p-4 m-10 rounded-lg flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
        <InfoCard
          imgSrc={img1}
          imgAlt="Cachorro e gato para adoção"
          text="Como cuidar do seu amigo"
        />

        <InfoCard
          imgSrc={img2}
          imgAlt="Criança com cachorro"
          text="Conheça as melhores rações"
          linkTo="/notices"
        />

        <InfoCard
          imgSrc={img3}
          imgAlt="Cachorro e gato para adoção"
          text="Como cuidar do seu amigo no calor?"
        />

        <InfoCard
          imgSrc={img4}
          imgAlt="Criança com cachorro"
          text="Saiba mais sobre seu amigo"
        />

        <InfoCard
          imgSrc={img5}
          imgAlt="Criança com cachorro"
          text="Como brincar com seu cachorro"
        />
      </div>
    </div>
  );
};

export default Info;
