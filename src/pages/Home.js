import styled from "styled-components";
import { About } from "../components/About";
import Intro from "../components/Intro";

const Container = styled.main`
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Intro />
      <About />
    </Container>
  );
};

export default Home;
