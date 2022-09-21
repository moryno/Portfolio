import styled from "styled-components";
import OtherProject from "./OtherProject";

const Container = styled.main`
  width: 60vw;
  padding: 50px 0;
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1``;

const SubTitle = styled.span``;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const OtherProjects = () => {
  return (
    <Container>
      <Title>Other Noteworthy Projects</Title>
      <SubTitle>view the archive</SubTitle>
      <Wrapper>
        <OtherProject />
        <OtherProject />
        <OtherProject />
        <OtherProject />
        <OtherProject />
        <OtherProject />
      </Wrapper>
    </Container>
  );
};

export default OtherProjects;
