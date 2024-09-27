import Footer from "../components/Footer";
import Header from "../components/Header";

function Notices() {
  return (
    <div>
      <Header />
      <div className="relative bg-gray-800 m-20 p-6 rounded-lg flex flex-col md:flex-row items-center overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center flex-grow md:mr-6 mb-6 md:mb-0 p-10">
          <h1
            className="text-2xl flex justify-center md:text-3xl font-bold text-gray-50 mb-4 text-center md:text-left p-5"
            style={{ fontFamily: "Montserrat, serif" }}
          >
            Melhores rações para seu pet
          </h1>
          <p
            className="text-lg md:text-2xl text-gray-50 mb-6 text-center md:text-left"
            style={{ fontFamily: "Raleway, serif" }}
          >
            Com a crescente preocupação dos tutores em oferecer uma alimentação
            de qualidade para seus cães, o mercado de rações premium e super
            premium para cães tem se expandido com novas fórmulas e inovações
            nutricionais. Em 2024, diversas marcas se destacam por oferecer
            produtos que vão além da nutrição básica, focando em ingredientes de
            alta qualidade e benefícios específicos para a saúde dos cães.
          </p>
          <div className="flex flex-col">
            <p
              className="pb-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Royal Canin
            </p>
            <p className="text-xl text-slate-200">
              <b>Benefícios:</b>Reconhecida por suas fórmulas personalizadas, a
              Royal Canin oferece rações específicas para diferentes raças,
              idades e necessidades de saúde, como controle de peso, problemas
              digestivos e suporte para pele e pelo.
            </p>
            <p className="text-xl text-slate-200">
              <b>Contras: </b>Preço elevado em comparação com outras marcas e,
              em alguns casos, presença de ingredientes como grãos, que podem
              não ser adequados para cães com sensibilidades alimentares.
            </p>
            <a
              href="https://www.royalcanin.com/br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 mt-2"
            >
              Saiba mais sobre Royal Canin
            </a>
          </div>
          <div className="flex flex-col">
            <p
              className="py-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Hill's Science Diet
            </p>
            <p className="text-xl text-slate-200">
              <b>Benefícios:</b>Famosa por ser uma ração recomendada por
              veterinários, a Hill's utiliza ingredientes selecionados e é
              conhecida por suas fórmulas científicas que ajudam a tratar
              condições como obesidade, doenças renais e articulares.
            </p>
            <p className="text-xl text-slate-200">
              <b>Contras: </b>Também possui um custo elevado e algumas fórmulas
              contêm conservantes artificiais que não são bem-vistos por
              consumidores que preferem alimentos mais naturais.
            </p>
            <a
              href="https://www.hillspet.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 mt-2"
            >
              Saiba mais sobre Hill's Science Diet
            </a>
          </div>
          <div className="flex flex-col">
            <p
              className="py-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Premier Pet
            </p>
            <p className="text-xl text-slate-200">
              <b>Benefícios:</b>Marca nacional com grande aceitação no mercado
              brasileiro, a Premier oferece rações sem corantes artificiais e
              com boas fontes de proteína, ajudando na saúde digestiva e no
              fortalecimento do sistema imunológico.
            </p>
            <p className="text-xl text-slate-200">
              <b>Contras: </b>Pode não ser tão eficaz para cães com necessidades
              nutricionais mais específicas, como alergias a determinados tipos
              de proteína.
            </p>
            <a
              href="https://www.premierpet.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 mt-2"
            >
              Saiba mais sobre Premier Pet
            </a>
          </div>
          <div className="flex flex-col">
            <p
              className="py-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Orijen
            </p>
            <p className="text-xl text-slate-200">
              <b>Benefícios:</b>Considerada uma das melhores rações naturais e
              de alta qualidade, a Orijen foca em ingredientes frescos e
              biológicamente adequados. Suas fórmulas têm alta concentração de
              carnes e são livres de grãos.
            </p>
            <p className="text-xl text-slate-200">
              <b>Contras: </b>Preço muito elevado, além de ser uma opção que
              pode ser pesada para cães que não estão acostumados a uma dieta
              tão rica em proteínas.
            </p>
            <a
              href="https://www.orijen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 mt-2"
            >
              Saiba mais sobre Orijen
            </a>
          </div>
          <div className="flex flex-col">
            <p
              className="py-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Prós e Contras das Rações Premium
            </p>
            <p className="text-xl text-slate-200">
              <b>Prós:</b>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <b>Ingredientes de alta qualidade:</b> Estas rações geralmente
                  incluem proteínas de qualidade, gorduras saudáveis, vitaminas
                  e minerais essenciais.
                </li>
                <li>
                  <b>Fórmulas balanceadas:</b> Muitas rações premium são
                  formuladas por veterinários e nutricionistas para atender às
                  necessidades específicas de cães em diferentes estágios de
                  vida ou com condições de saúde especiais.
                </li>
                <li>
                  <b>Benefícios para a saúde:</b> Rações dessa categoria podem
                  melhorar a pele, o pelo, a digestão e fortalecer o sistema
                  imunológico.
                </li>
              </ul>
            </p>
            <p className="text-xl text-slate-200 pt-5">
              <b>Contras:</b>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <b>Custo elevado:</b> As rações premium podem ser muito mais
                  caras do que as rações convencionais, o que pode ser uma
                  barreira para muitos tutores.
                </li>
                <li>
                  <b>Sensibilidade a alguns ingredientes:</b> Algumas dessas
                  rações ainda utilizam grãos ou proteínas que podem causar
                  alergias em cães mais sensíveis.
                </li>
                <li>
                  <b>Necessidade de adaptação: </b> Mudanças para rações de alta
                  proteína, como Orijen, podem exigir uma adaptação gradual para
                  evitar problemas digestivos.
                </li>
              </ul>
            </p>
          </div>
          <a
            href="https://amoraospets.com/melhor-racao-para-cachorro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 mt-4"
          >
            Melhores rações para cachorro em 2024 - site Amor aos Pets
          </a>
          <a
            href="https://amoraospets.com/racoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 mt-4"
          >
            Comparativo entre rações - Veja os melhores produtos no site Amor
            aos Pets
          </a>
        </div>
      </div>
      <div className="relative bg-gray-800 m-20 p-6 rounded-lg flex flex-col md:flex-row items-center overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center flex-grow md:mr-6 mb-6 md:mb-0 p-10">
          <h1
            className="text-2xl flex justify-center md:text-3xl font-bold text-gray-50 mb-4 text-center md:text-left p-5"
            style={{ fontFamily: "Montserrat, serif" }}
          >
            Melhores rações para seu gato
          </h1>
          <p
            className="text-lg md:text-2xl text-gray-50 mb-6 text-center md:text-left"
            style={{ fontFamily: "Raleway, serif" }}
          >
            A nutrição adequada é essencial para a saúde dos gatos, e, em 2024,
            as melhores marcas de ração premium e super premium se destacam por
            oferecer fórmulas específicas que atendem às necessidades
            nutricionais felinas. Essas marcas não só focam em ingredientes de
            alta qualidade, mas também proporcionam benefícios para a saúde a
            longo prazo.
          </p>
          <div className="flex flex-col">
            <p
              className="pb-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Royal Canin
            </p>
            <p className="text-xl text-slate-200">
              <b>Benefícios:</b> Royal Canin tem uma linha especializada para
              gatos, com fórmulas ajustadas para diferentes idades, raças e
              condições de saúde, como controle de peso e suporte para o trato
              urinário.
            </p>
            <p className="text-xl text-slate-200">
              <b>Contras:</b> O preço é um pouco mais alto em comparação com
              outras marcas, e algumas fórmulas ainda contêm grãos, o que pode
              não ser ideal para gatos com sensibilidades alimentares.
            </p>
            <a
              href="https://www.royalcanin.com/br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 mt-2"
            >
              Saiba mais sobre Royal Canin
            </a>
          </div>
          <div className="flex flex-col">
            <p
              className="py-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Hill's Science Diet
            </p>
            <p className="text-xl text-slate-200">
              <b>Benefícios:</b> Hill's é recomendada por veterinários e tem uma
              linha específica para gatos com ingredientes de alta qualidade,
              além de fórmulas que ajudam em problemas renais e digestivos.
            </p>
            <p className="text-xl text-slate-200">
              <b>Contras:</b> O preço é elevado, e algumas fórmulas contêm
              conservantes artificiais.
            </p>
            <a
              href="https://www.hillspet.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 mt-2"
            >
              Saiba mais sobre Hill's Science Diet
            </a>
          </div>
          <div className="flex flex-col">
            <p
              className="py-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Premier Pet
            </p>
            <p className="text-xl text-slate-200">
              <b>Benefícios:</b> Marca nacional conhecida pela qualidade de suas
              rações, a Premier Pet oferece fórmulas livres de corantes
              artificiais e com boas fontes de proteína.
            </p>
            <p className="text-xl text-slate-200">
              <b>Contras:</b> Algumas fórmulas podem não ser ideais para gatos
              com condições de saúde específicas.
            </p>
            <a
              href="https://www.premierpet.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 mt-2"
            >
              Saiba mais sobre Premier Pet
            </a>
          </div>
          <div className="flex flex-col">
            <p
              className="py-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Orijen
            </p>
            <p className="text-xl text-slate-200">
              <b>Benefícios:</b> Orijen é uma das marcas mais naturais do
              mercado, com alta concentração de carne fresca e sem grãos, ideal
              para gatos com dietas de alto teor proteico.
            </p>
            <p className="text-xl text-slate-200">
              <b>Contras:</b> Preço elevado e pode não ser adequada para gatos
              com baixa necessidade proteica.
            </p>
            <a
              href="https://www.orijen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 mt-2"
            >
              Saiba mais sobre Orijen
            </a>
          </div>
          <div className="flex flex-col">
            <p
              className="py-5 text-slate-200 text-2xl"
              style={{ fontFamily: "Raleway, serif" }}
            >
              Prós e Contras das Rações Premium
            </p>
            <p className="text-xl text-slate-200">
              <b>Prós:</b>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <b>Ingredientes de alta qualidade:</b> As rações premium para
                  gatos incluem proteínas de alta qualidade e ingredientes
                  específicos para suporte à saúde.
                </li>
                <li>
                  <b>Fórmulas balanceadas:</b> Muitas são formuladas para
                  garantir nutrição ideal para diferentes fases da vida e
                  condições de saúde.
                </li>
              </ul>
            </p>
            <p className="text-xl text-slate-200 pt-5">
              <b>Contras:</b>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <b>Custo elevado:</b> O preço dessas rações pode ser
                  significativamente maior.
                </li>
                <li>
                  <b>Necessidade de adaptação:</b> Mudanças na dieta podem
                  exigir uma transição cuidadosa para evitar problemas
                  digestivos.
                </li>
              </ul>
            </p>
          </div>
          <a
            href="https://amoraospets.com/melhor-racao-para-gato/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 mt-4"
          >
            Melhores rações para gatos em 2024 - site Amor aos Pets
          </a>
          <a
            href="https://amoraospets.com/melhor-racao-para-gatos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 mt-4"
          >
            Comparativo entre rações para gatos - Veja os melhores produtos no
            site Amor aos Pets
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Notices;
