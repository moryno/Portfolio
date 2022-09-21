import { GitHub, Link } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.section`
  width: 30%;
  height: 35vh;
  margin-top: 1.25rem;
  border: 2px solid rgb(243 242 242);

  padding: 1.5rem;
  box-sizing: border-box;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const IconContainer = styled.article`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  margin: 2rem 0 0.75rem;
  text-align: left;
`;

const Description = styled.span`
  text-align: left;
  line-height: 1.5;
`;

const LanguageContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;
`;

const Language = styled.span`
  margin-bottom: 0.5rem;
`;

const OtherProject = () => {
  return (
    <Container>
      <Wrapper>
        <IconContainer>
          <GitHub />
          <Link />
        </IconContainer>
        <Title>Quote App</Title>
        <Description>
          A coding bootcamp website portfoli for Apprentice Cloud. At apprentice
          Cloud, our main objective is to discover, nurture and showcase young
          Tech Talent; inlocking them to the digital economy
        </Description>
      </Wrapper>
      <LanguageContainer>
        <Language>JavaScript</Language>
        <Language>React</Language>
        <Language>Styled-Components</Language>
      </LanguageContainer>
    </Container>
  );
};

export default OtherProject;
