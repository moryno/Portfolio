import styled from "styled-components";

const Container = styled.div`
  width: 45vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 35vh;
`;

const Left = styled.div`
  flex: 1;
  height: auto;
`;

const ImageContainer = styled.article`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const Title = styled.h1`
  font-weight: 400;
  align-self: flex-start;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-weight: 300;
  margin-bottom: 1rem;
`;

const TechnologyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Technology = styled.span`
  width: 50%;
  margin-bottom: 0.3rem;
`;

export const About = () => {
  return (
    <Container>
      <Title>About Me</Title>

      <Wrapper>
        <Left>
          <Subtitle>
            Hello! My name is Maurice, I create amazing solutions for Web
            applications.
          </Subtitle>
          <Description>
            I am a self-taught developer based in Nairobi Kenya, but to perfect
            my craft I attended several code jams. Also attended Moringa School
            to perfect my JavaScript & Web development skills.
          </Description>
          <Description>
            Here are a few technologies I have been working with recently:
          </Description>
          <TechnologyWrapper>
            <Technology>HTML</Technology>
            <Technology>CSS</Technology>
            <Technology>JavaScript (ES6+)</Technology>
            <Technology>React</Technology>
            <Technology>Node.js</Technology>
            <Technology>MongoDB</Technology>
            <Technology>MySQL</Technology>
            <Technology>Ruby</Technology>
            <Technology>Ruby on Rails</Technology>
          </TechnologyWrapper>
        </Left>
        <Right>
          <ImageContainer>
            <Image
              src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
              alt="profilePic"
            />
          </ImageContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};
