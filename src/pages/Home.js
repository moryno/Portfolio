import styled from "styled-components";
import { About } from "../components/About";
import Intro from "../components/Intro";
import OtherProjects from "../components/OtherProjects";
import { ProductList } from "../components/ProductList";
import Archive from "./Archive";

const Container = styled.main`
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      {/* <Intro />
      <About />
      <ProductList />
      <OtherProjects /> */}
      <Archive />
    </Container>
  );
};

export default Home;
