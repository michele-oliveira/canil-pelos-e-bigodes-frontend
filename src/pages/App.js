import Cards from "../components/Cards";
import Presentation from "../components/Presentation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Container from "../components/Container";
import Content from "../components/Content";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Presentation />
        <Info />
        <Cards />
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
