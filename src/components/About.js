import styled from "styled-components";

const Container = styled.div`
  width: 45vw;
  height: 60vh;
  display: flex;
  align-items: center;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 35vh;
`;

const Left = styled.div`
  flex: 1;
`;

const ImageContainer = styled.article`
  width: 100%;
  height: 100%;
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
`;

const Subtitle = styled.p`
  margin: 20px 0;
`;

const Description = styled.p`
  font-weight: 300;
`;

export const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>About Me</Title>
          <Subtitle>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </Subtitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            volutpat vulputate purus vitae placerat. Mauris aliquam mattis arcu
            at malesuada. Vestibulum blandit urna felis, pellentesque blandit
            nibh pretium non. Vestibulum venenatis volutpat facilisis. Donec
            quis lacus gravida, condimentum mi eget, ultrices enim. Ut rutrum in
            est sit amet ornare. Nullam ornare, dui a vestibulum ultrices, justo
            mauris ultrices erat, et pulvinar quam mi sit amet elit. Quisque
            arcu tortor, feugiat eget tellus vel, viverra pulvinar purus. Etiam
            nec turpis odio. Duis ultrices dui a sem porta euismod. Nulla a
            eleifend metus, at pretium est. In sodales auctor accumsan. Nulla
            facilisi. Ut sit amet ultrices est, sed pulvinar velit. Integer
            consectetur quis ipsum at luctus.
          </Description>
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
