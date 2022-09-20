import styled from "styled-components";
import { About } from "../components/About";
import Intro from "../components/Intro";
import { ProductList } from "../components/ProductList";

const Container = styled.main`
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Intro />
      <About />
      <ProductList />
    </Container>
  );
};

export default Home;
