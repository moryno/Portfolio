import styled from "styled-components";

const Container = styled.main`
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
`;

const Email = styled.a`
  transform: rotate(90deg);
`;

const Vertical = styled.div`
  border-left: 1px solid black;
  height: 6.25rem;
`;

const Icon = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightSideBar = () => {
  return (
    <Container>
      <SocialIcon>
        <Icon>
          <Email>mauricenganga41@gmail.com</Email>
        </Icon>

        <Vertical />
      </SocialIcon>
    </Container>
  );
};

export default RightSideBar;
