import styled from "styled-components";

const Container = styled.main`
  width: 50vw;
  margin: auto;
  height: 90vh;
`;

const Title = styled.h1`
  font-size: 5rem;
  line-height: 5.5rem;
  padding-bottom: 1rem;
`;

const Introduction = styled.h2`
  margin-top: 20vh;
  font-size: 1.875rem;
  font-weight: 300;
  padding-bottom: 1rem;
`;

const SubTittle = styled.h1`
  font-size: 5rem;
  line-height: 4.5rem;
  padding-bottom: 1rem;
`;

const Description = styled.p`
  width: 60%;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const Intro = () => {
  return (
    <Container>
      <Introduction>Hello, my name is</Introduction>
      <Title>Maurice Nganga.</Title>
      <SubTittle>I build for Web.</SubTittle>
      <Description>
        I’m a software engineer specializing in building web applications that
        add impact to the community. I mainly program in Javascript but I am
        also profficient in Ruby and MySql.I design and develop services for
        customers of all sizes, specializing in creating stylish, modern
        websites, web services and online store.
      </Description>
    </Container>
  );
};

export default Intro;
