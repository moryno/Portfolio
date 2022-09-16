import styled from "styled-components";
import Intro from "../components/Intro";
import RightSideBar from "../components/RightSideBar";

const Container = styled.main`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <RightSideBar />
      <Intro />
    </Container>
  );
};

export default Home;
