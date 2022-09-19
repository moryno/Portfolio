import styled from "styled-components";

const Container = styled.main`
  height: 6rem;
  width: 100%;
  background-color: #ca1b37;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  box-sizing: border-box;
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.article`
  flex: 2;
`;

const Right = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const MenuItems = styled.article`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
`;

const Button = styled.button`
  border: none;
  padding: 0.625rem;
  font-weight: 600;
  margin-left: 1rem;
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Right>
          <MenuItems>About</MenuItems>
          <MenuItems>Work</MenuItems>
          <MenuItems>Contact</MenuItems>
          <MenuItems>Blog</MenuItems>
          <Button>Resume</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default TopBar;
