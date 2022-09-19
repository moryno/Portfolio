import styled from "styled-components";
import Home from "../pages/Home";
import TopBar from "./TopBar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const Container = styled.main`
  width: 100%;
`;
const Wrapper = styled.article`
  display: flex;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <TopBar />
      <Wrapper>
        <LeftSideBar />
        <Home />
        <RightSideBar />
      </Wrapper>
    </Container>
  );
}

export default App;
