import styled from "styled-components";
import Intro from "../components/Intro";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

const Container = styled.main`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <LeftSideBar />
      <Intro />
      <RightSideBar />
    </Container>
  );
};

export default Home;
